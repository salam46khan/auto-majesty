import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext()
const gooleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const [logo, setLogo] =useState({})
    const [brands, setBrand] = useState([])
    const [testimonial, setTestimonial] = useState([])

    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        setLoader(true)
        return signInWithPopup(auth, gooleProvider)
    }

    const logOut = () =>{
        setLoader(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('from auth state',currentUser);
            setUser(currentUser)
            setLoader(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])

    useEffect(()=>{
        fetch('http://localhost:5000/logo')
            .then(res => res.json())
            .then(data => setLogo(data))
    },[])

    useEffect(() => {
        fetch('http://localhost:5000/brand')
            .then(res => res.json())
            .then(data => setBrand(data))
    }, [])

    useEffect(()=>{
        fetch('http://localhost:5000/testimonial')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    },[])
    
    const authinfo = {
        createUser,
        logInUser,
        googleSignIn,
        user,
        logOut,
        loader,
        logo,
        brands,
        testimonial
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;