import React from "react";
import Navbar from "./Navbar";
import partypulse from "../assets/partypulse.png";
import Footer from "./Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        {/* About Section */}
        <section className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Welcome to PartyPulse</h2>
            <div className="flex flex-col items-center">
              <p className="text-gray-700 mb-4">
                Discover, create, and share memorable events with PartyPulse. Whether you're a party-goer looking for the hottest events or a host planning the next big thing, we've got you covered.
              </p>
              <p className="text-gray-700 mb-4">
                Join our vibrant community and let's make every event an unforgettable experience together!
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
