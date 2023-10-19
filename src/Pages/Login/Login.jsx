import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Login = () => {
    const [action, setAction] = useState('Sign Up')
    const [error, setError] = useState('')
    const {createUser, logInUser, googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()


    // sign up function here 
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('')

        if (!/[$#@%&*]/.test(password)) {
            setError('Password should be a spacial character')
            return
        }
        if (password.length < 6) {
            setError('Password should be six character')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError('Password should be one upper case letter')
            return
        }
        
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset()
                navigate('/')
                Swal.fire({
                    title: 'Success!',
                    text: 'You are Sign Up successfuly',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                updateProfile(result.user, {
                    displayName: name
                })
            })
            .catch(error =>{
                setError(error.message)
            })
    }


    // log in function here
    const handleLogIn = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        setError('')

        logInUser(email, password)
            .then(result =>{
                console.log(result.user);
                form.reset()
                navigate('/')

                Swal.fire({
                    title: 'Successful!',
                    text: 'You are Log In successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    // log in with google 
    const handleSignInGoogle = () =>{
        setError('')
        googleSignIn()
            .then(result =>{
                console.log(result.user);
                navigate('/')
                Swal.fire({
                    title: 'Successful!',
                    text: 'You are Log In successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
            .catch(error =>{
                console.log(error);
                setError(error.message)
            })
    }

    return (
        <div className="bg-orange-100">
            <div className="container mx-auto flex justify-center items-center">
                <div className="bg-base-100 shadow-lg p-5 m-5 rounded">
                    <h2 className="text-3xl text-center text-lime-400 font-bold">Please {action} here</h2>

                    {
                        action === 'Sign Up' ? <div>
                            <form onSubmit={handleSignUp}>
                                <div className='py-2'>
                                    <input className='p-2 w-full border rounded' type="text" name='name' placeholder='Full Name' />
                                </div>
                                <div className='py-2'>
                                    <input className='p-2 w-full border rounded' type="email" name='email' placeholder='Email' required />
                                </div>
                                <div className='py-2 relative'>
                                    <input className='p-2 w-full border rounded' type='password' name='password' placeholder='Password' required />

                                </div>
                                <div className='py-2'>
                                    <input className='w-full btn bg-lime-400 hover:bg-lime-200' type="submit" value="Sign Up" />
                                </div>
                            </form>
                        </div> : <div>
                            <form onSubmit={handleLogIn}>
                                <div className=''>
                                    <></>
                                </div>
                                <div className='py-2'>
                                    <input className='p-2 w-full border rounded' type="email" name='email' placeholder='Email' required />
                                </div>
                                <div className='py-2 relative'>
                                    <input className='p-2 w-full border rounded' type='password' name='password' placeholder='Password' required />

                                </div>
                                <div className='py-2'>
                                    <input className='w-full btn bg-lime-400 hover:bg-lime-200' type="submit" value="Log In" />
                                </div>
                            </form>

                        </div>
                    }
                     <div className='mb-2'>
                        {
                            error && <p className='text-red-400'>{error}</p>
                        }
                    </div>



                    <div className='text-center pb-2'>
                        <hr />
                        <p>or</p>
                        <button onClick={handleSignInGoogle} className='btn hover:bg-lime-400 rounded-full bg-inherit hover:text-black border-lime-400 text-lime-400'>
                            <FcGoogle className='text-3xl'></FcGoogle>
                            Google Sign Up
                        </button>
                    </div>

                    <div className='border rounded p-2 flex justify-between'>
                        <button onClick={() => { setAction('Sign Up') }} className={action === 'Sign Up' ? 'btn bg-lime-400 hover:bg-lime-300' : 'btn btn-ghost hover:bg-lime-200'}>Sign Up</button>
                        <button onClick={() => { setAction('Log In') }} className={action === 'Log In' ? 'btn bg-lime-400 hover:bg-lime-300' : 'btn btn-ghost hover:bg-lime-200'}>Log In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;