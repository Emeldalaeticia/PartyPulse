import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Logo from "../assets/Logo.png";

// Common class names for consistency
const linkClass = "hover:text-amber-500 transition border-b-2 border-slate-900 hover:border-amber-500 cursor-pointer";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const renderLogoutLink = () => (
    <>
      <span className="text-white">Hi, {username}</span>
      <Link to="/logout" onClick={handleLogout} className={linkClass}>
        <li>Logout</li>
      </Link>
    </>
  );

  const content = (
    <div className={`lg:hidden block absolute top-16 w-full left-0 right-0 bg-Fuchsia-400 transition mb-0`}>
      <ul className="text-center text-xl p-20">
        <Link to="/" className={`my-4 text-slate-950 border-b border-slate-800 hover:bg-slate-800 hover:rounded ${linkClass}`}>
          <li>Home</li>
        </Link>
        <Link to="/eventlist" className={`my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ${linkClass}`}>
          <li>Events</li>
        </Link>
        {!isLoggedIn && (
          <>
            <Link to="/register" className={`my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ${linkClass}`}>
              <li>Register</li>
            </Link>
            <Link to="/login" className={`my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ${linkClass}`}>
              <li>Login</li>
            </Link>
          </>
        )}
        {isLoggedIn && renderLogoutLink()}
        <Link to="/organizersdashboard" className={`${linkClass} ${click ? "hidden" : ""}`}>
          <li>Organizers Dashboard</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <>
      <div className={`h-10vh flex justify-between z-50  text-slate-950 lg:py-0 ${click ? "py-0" : ""}`}>
        <div className="">
          <span className="">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="img-fluid w-28 h-auto rounded-full "
              />
            </Link>
          </span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10 ">
            <ul className="flex gap-8 mr-16  text-[18px] ">
              <Link to="/" className={`${linkClass} ${click ? "hidden" : ""}`}>
                <li>Home</li>
              </Link>
              <Link to="/eventlist" className={`${linkClass} ${click ? "hidden" : ""}`}>
                <li>Events</li>
              </Link>
              {!isLoggedIn && (
                <>
                  <Link to="/register" className={`${linkClass} ${click ? "hidden" : ""}`}>
                    <li>Register</li>
                  </Link>
                  <Link to="/login" className={`${linkClass} ${click ? "hidden" : ""}`}>
                    <li>Login</li>
                  </Link>
                </>
              )}
              {isLoggedIn && renderLogoutLink()}
              <Link to="/organizersdashboard" className={`${linkClass} ${click ? "hidden" : ""}`}>
                <li>Organizers Dashboard</li>
              </Link>
            </ul>
          </div>
          <div>
            {click && content}
          </div>
        </div>
        <button className={`block sm:hidden transition ${click ? "hidden" : ""}`} onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </>
  );
}

export default Navbar;
