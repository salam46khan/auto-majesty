import { useContext } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Footer = () => {
    const {logo} = useContext(AuthContext)
    return (
        <div className="bg-orange-400 text-gray-100 py-10 px-3">
            <div className="container mx-auto grid gap-3 grid-cols-1 md:grid-cols-3">
                <div>
                    <div className='mb-4'>
                        <img className='w-1/2' src={logo.img} alt="" />
                    </div>
                    <p className="">
                    Welcome to Automajesty, where the world of cars meets luxury, quality, and unmatched customer satisfaction. We are not just another car selling company; <br /> We are your gateway to a world of automotive excellence and distinction. At Automajesty, we redefine the car-buying experience with a commitment to providing the finest vehicles and services to our valued customers.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-lime-300 mb-4">Contacts</h2>
                    <div>
                        <p className="text-xl"><span className="font-semibold">Phone :</span> +8801700-000000</p>
                    </div>
                    <div>
                        <p className="text-xl"><span className="font-semibold">Email :</span> xyz@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-xl"><span className="font-semibold">Address :</span> Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl text-lime-300 font-bold mb-4">Social</h2>
                    <div className='flex gap-2'>
                        <Link className='text-3xl duration-150 hover:text-gray-300' to={'/'}>
                        <TiSocialTwitter ></TiSocialTwitter>
                        </Link>

                        <Link className='text-3xl duration-150 hover:text-gray-300' to={'/'}>
                        <TiSocialInstagram ></TiSocialInstagram>
                        </Link>

                        <Link className='text-3xl duration-150 hover:text-gray-300' to={'/'}>
                        <FaFacebook></FaFacebook>
                        </Link>
                        
                    </div>
                    <div className='mt-3'>
                        <p>
                        Come and experience the majesty of cars at Automajesty, where your automotive dreams become a reality. Visit our showroom today and let us guide you on a journey to discover the car of your dreams
                        </p>
                    </div>
                </div>
                
            </div>
            <div className='container mx-auto mt-4'>
                <hr />
                <div className='flex justify-center mt-3'>
                    <Link className='border-r px-3' to={'/'}>FAQ</Link>
                    <Link className='border-r px-3' to={'/'}>Privacy Policy</Link>
                    <Link className=' px-3' to={'/'}>Terms and Conditions</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;