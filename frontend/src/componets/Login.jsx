import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import Navbar from "./Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigateTo = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://partypulse-q43v.onrender.com/api/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Login successful
        // You may want to redirect the user or perform other actions
        navigateTo('/'); // Replace '/dashboard' with your desired redirect path
      } else {
        // Handle login failure
        console.error("Login failed");
        // You can display an error message or take other actions
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      // Handle network errors or other issues
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-2/4 left-72">
        <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="text-white mb-1 block">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full py-2.3 px-0 text-sm text-white bg-transparent border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
            />
            <BiUser className="absolute top-10 right-5" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-white mb-1 block">
              Password
            </label>
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full py-2.3 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
              />
              <button
                type="button"
                onClick={handleShowPassword}
                className="ml-4 bg-white text-slate-950 px-2 py-1 rounded-md focus:outline-none focus:ring-0 focus:text-white focus:bg-slate-800"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              <AiOutlineUnlock className="absolute top-10 right-5" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-0 text-sm text-white bg-blue-600 rounded-md focus:outline-none focus:ring-0 focus:bg-blue-700"
          >
            Login
          </button>
          <div>
            <span>
              {" "}
              New Here? <Link to="/register">Create an Account</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
