import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

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
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
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
                        <button onClick={handleLogOut}>Log Out</button> 
                        : 
                        <Link to={'/login'}>
                            <button className="btn btn-sm ">Log In</button>
                        </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;