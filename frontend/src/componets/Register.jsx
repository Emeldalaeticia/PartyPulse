import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";



function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            // Passwords match, you can proceed with registration.
            // You may want to add your registration logic here.
        } else {
            alert("Passwords do not match. Please try again.");
        }
    };

    return (
        <>
            <Navbar/>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-2/4 left-56  ">
                <h1 className="text-4xl text-white font-bold text-center mb-6">Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="text-white mb-1 block">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            className="block w-full py-2.3 px-0 text-sm text-white bg-transparent border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                        />
                        
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="text-white mb-1 block">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="block w-full py-2.3 px-0 text-sm text-white bg-transparent border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                        />
                        
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="text-white mb-1 block">Password</label>
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
                            <button type="button" onClick={handleShowPassword} className="ml-4 bg-white text-slate-950 px-2 py-1 rounded-md focus:outline-none focus:ring-0 focus:text-white focus:bg-slate-800">
                                {showPassword ? "Hide" : "Show"}
                            </button>
                            
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="text-white mb-1 block">Confirm Password</label>
                        <div className="flex items-center">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="block w-full py-2.3 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            />
                            <button type="button" onClick={handleShowConfirmPassword} className="ml-4 bg-white text-slate-950 px-2 py-1 rounded-md focus:outline-none focus:ring-0 focus:text-white focus:bg-slate-800">
                                {showConfirmPassword ? "Hide" : "Show"}
                            </button>
                            
                        </div>
                    </div>

                    <button type="submit" className="w-full py-2 px-0 text-sm text-white bg-blue-600 rounded-md focus:outline-none focus:ring-0 focus:bg-blue-700">Register</button>
                    <div>
                        <span> Already have an account? <Link to="/Login">Login</Link></span>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;
