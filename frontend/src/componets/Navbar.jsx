/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-Fuchsia-400 transition">
            <ul className="text-center text-xl p-20">
                <Link to="Home">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
                </Link>
                <Link to="Register">
                    <li>Register</li>
                </Link>
                <Link to="Login">
                    <li>Login</li>
                </Link>

            </ul>
        </div>    
    
    
    </>

    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-4">
                <div className="flex items-center flex-1">
                    <span> <img src="/src/assets/Logo.png" alt="Image" className="img-fluid w-28 h-auto rounded-full" />
                    </span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <Link to="Home">
                            <li>Home</li>
                        </Link>
                        <Link to="Register">
                            <li>Register</li>
                        </Link>
                        <Link to="Login">
                            <li>Login</li>
                        </Link>
                     </ul>
                    </div>
                </div>
            </div>
        </nav>


    );
}

export default Navbar;
