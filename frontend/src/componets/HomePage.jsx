/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Home = () => {
  const text = "✨Welcome to Party Pulse 💫";
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <div className="container mx-auto text-center ">
            <h1 className="overflow-hidden text-4xl font-bold leading-6 text-slate-950 pt-20 pb-3 ">
                 {text.split(/(?!$)/u).map((char, index) => (
                    <span
                        className="animate-text-reveal inline-block"
                        key={`${char}-${index}`}
                        style={{ animationDelay: `${index * 0.05}s` }} >
                         {char === " " ? "\u00A0" : char}
                    </span>
            ))}
            </h1>
          <div className=" box-border h-32 w-50 flex flex-col items-center px-5 text-xl ">
            <p className="text-amber-500 mb-4">
              Discover, create, and share memorable events with PartyPulse. Whether you're a party-goer looking for the hottest events or a host planning the next big thing, we've got you covered.
            </p>
            <p className="text-amber-500 mb-4">
              Join our vibrant community and let's make every event an unforgettable experience together!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
