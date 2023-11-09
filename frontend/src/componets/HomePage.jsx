import React from "react";
import Navbar from "./Navbar";

function Home() {
    return (
        <>
            <Navbar/>
            <div className="absolute top-60 right-60 w-80">
                <h3 className="text-warning font-tahoma italic">USHANICONVINCE!!</h3>
            </div>


                <div className="col-md-6"></div>
                <div className="container">
                    <img src="/src/assets/partypulse.png" alt="Image" className="img-fluid" />
                </div>
            
        </>
    );
}

export default Home;
