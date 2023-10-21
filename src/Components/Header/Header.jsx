import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import './Header.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
    const { user, logOut, logo } = useContext(AuthContext)
    


    const handleLogOut = () =>{
        logOut()
            .then(()=>{
                console.log('log out successful');
            })
            .catch(error =>{
                console.log(error);
            })
    }

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/addproduct'}>Add Product</NavLink></li>

    </>
    return (
        <div className="shadow-sm bg-orange-400 text-white">
            <div className="navbar container mx-auto " id="navbar">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBars className="text-2xl"></FaBars>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-40 bg-orange-400">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <div className="flex items-center normal-case text-xl">
                        <img className="w-20" src={logo.img} alt="" />
                        <p className="font-extrabold hidden md:block">{logo.name}</p>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* log in or log out btn  */}


                    {
                        user ? 
                        <button className="btn bg-lime-400 hover:bg-lime-200 " onClick={handleLogOut}>Log Out</button> 
                        : 
                        <Link to={'/login'}>
                            <button className="btn bg-lime-400 hover:bg-lime-200 ">Log In</button>
                        </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;