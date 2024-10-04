import React from "react";
import hero from "../assets/scott-graham-5fNmWej4tAA-unsplash 1.png";

function Hero() {
  return (
    <div className="relative w-full h-[70vh]">
      <img src={hero} alt="Hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <p className="text-4xl md:text-6xl mb-6">
          The largest community of photo enthusiasts
        </p>
        <button className="px-6 py-3 bg-blue-400 text-white border-2 border-blue-400 rounded-md text-lg transition hover:bg-white hover:text-blue-400">
          Join Today
        </button>
      </div>
    </div>
  );
}

export default Hero;
