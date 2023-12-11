import React from "react";
import Navbar from "./Navbar";
import partypulse from "../assets/partypulse.png"
import Footer from "./Footer";


function Home() {
    return (
        <>
            <Navbar/>
            <div className="absolute top-60 right-60 w-80">
                <h3 className="text-warning font-tahoma italic">USHANICONVINCE!!</h3>
            </div>


                <div className="col-md-6"></div>
                <div className="container">
                    <img src={partypulse} alt="Image" className="img-fluid" />
                </div>
            <div>
                <Footer/>
            </div>

            
            
        </>
    );
}

export default Home;
