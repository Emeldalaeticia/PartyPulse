import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Logout() {
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("https://partypulse-q43v.onrender.com/api/user/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // You may need to include any authentication token or session information here
      });

      if (response.ok) {
        // Call the handleLogout function from the Navbar component
        Navbar.handleLogout();

        console.log("Logout successful");

        // Redirect to the login page after successful logout
        navigateTo("/login");
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error.message);
      // Handle logout error, show an alert, etc.
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-2/4 left-72">
        <h1 className="text-4xl text-white font-bold text-center mb-6">Logout</h1>
        <button
          onClick={handleLogout}
          className="w-full py-2 px-0 text-sm text-white bg-blue-600 rounded-md focus:outline-none focus:ring-0 focus:bg-blue-700"
        >
          Logout
        </button>
        <div>
          <span>
            {" "}
            Not logging out? <Link to="/">Return to Homepage</Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Logout;
