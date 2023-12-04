import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <div className={`lg:hidden block absolute top-16 w-full left-0 right-0 bg-Fuchsia-400 transition mb-0`}>
      <ul className="text-center text-xl p-20">
        <Link to="/" className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
          <li>Home</li>
        </Link>
        <Link to="/eventlist" className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
          <li>Events</li>
        </Link>
        <Link to="/register" className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
          <li>Register</li>
        </Link>
        <Link to="/login" className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
          <li>Login</li>
        </Link>
        <Link to="/dashboard" className={`hover:text-amber-500 transition border-b-2 border-slate-900 hover:border-amber-500 cursor-pointer ${click ? `hidden` : ''}`}>
          <li>Organizers Dashboard</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <> 
    
    
      <div className={`h-10vh flex justify-between z-50  text-slate-950 lg:py-4 ${click ? `py-4` : ''}`}>
        <div className="">
          <span className="">
            <Link to="/">
              <img
                src="/src/assets/Logo.png"
                alt="Image"
                className="img-fluid w-28 h-auto rounded-full "
              />
            </Link>
          </span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10 ">
            <ul className="flex gap-8 mr-16  text-[18px] ">
              <Link to="/" className={`hover:text-amber-500 transition border-b-2 border-slate-900 hover:border-amber-500 cursor-pointer ${click ? `hidden` : ''}`}>
                <li>Home</li>
              </Link>
              <Link to="/eventlist" className={`hover:text-amber-500 transition border-b-2 border-slate-900 hover:border-amber-500 cursor-pointer ${click ? `hidden` : ''}`}>
                <li>Events</li>
              </Link>
              <Link to="/register" className={`hover:text-amber-500 transition border-b-2 border-slate-900 hover:border-amber-500 cursor-pointer ${click ? `hidden` : ''}`}>
                <li>Register</li>
              </Link>
              <Link to="/login" className={`hover:text-amber-500 transition border-b-2 border-slate-900 hover:border-amber-500 cursor-pointer ${click ? `hidden` : ''}`}>
                <li>Login</li>
              </Link>
              <Link to="/dashboard" className={`hover:text-amber-500 transition border-b-2 border-slate-900 hover:border-amber-500 cursor-pointer ${click ? `hidden` : ''}`}>
                <li>Organizers Dashboard</li>
              </Link>
            </ul>
          </div>
          <div>
            {click && content}
          </div>
        </div>
        <button className={`block sm:hidden transition ${click ? `hidden` : ''}`} onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    
    </>
  );
}

export default Navbar;
