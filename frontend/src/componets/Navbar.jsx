import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <div
      className={`lg:hidden block absolute top-16 w-full left-0 right-0 bg-Fuchsia-400 transition`}
    >
      <ul className="text-center text-xl p-20">
        <Link
          spy={true}
          smooth={true}
          to="Home"
          className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"
        >
          <li>Home</li>
        </Link>
        <Link
          spy={true}
          smooth={true}
          to="Register"
          className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"
        >
          <li>Register</li>
        </Link>
        <Link
          spy={true}
          smooth={true}
          to="Login"
          className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"
        >
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav>
      <div
        className={`h-10vh flex justify-between z-50 text-slate-950 lg:py-4 ${click ? `py-4` : ''}`}
      >
        <div className="flex items-center flex-1">
          <span>
            <img
              src="/src/assets/Logo.png"
              alt="Image"
              className="img-fluid w-28 h-auto rounded-full"
            />
          </span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link
                spy={true}
                smooth={true}
                to="Home"
                className={`hover:text-amber-500 transition border-b-2 border-slate-900 hover:border-amber-500 cursor-pointer ${click ? `hidden` : ''}`}
              >
                <li>Home</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="Register"
                className={`hover:text-amber-500 transition border-b-2 border-slate-900 hover:border-amber-500 cursor-pointer ${click ? `hidden` : ''}`}
              >
                <li>Register</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="Login"
                className={`hover:text-amber-500 transition border-b-2 border-slate-900 hover:border-amber-500 cursor-pointer ${click ? `hidden` : ''}`}
              >
                <li>Login</li>
              </Link>
            </ul>
          </div>
          <div>
            {click && content}
          </div>
        </div>
        <button
          className={`block sm:hidden transition ${click ? `hidden` : ''}`}
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;