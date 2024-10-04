import React from "react";
import Img1 from "../assets/backlit-bonding-casual-708392-400x400 1.png";
import Img2 from "../assets/businessman-4608282_1920 1.png";
import Img3 from "../assets/hands-1063442_1280 1.png";

function Photos() {
  return (
    <div className="px-4 md:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Make your photos more stylish</h1>
        <p className="text-gray-400 font-extralight mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center space-x-8">
        {/* Card 1 */}
        <div
          className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          style={{ minHeight: "450px" }}
        >
          <img
            src={Img1}
            alt="Stylish photo 1"
            className="w-full h-auto rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold text-center">
            Sed ut perspiciatis
          </h2>
          <p className="text-gray-600 font-light text-center">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          style={{ minHeight: "450px" }}
        >
          <img
            src={Img2}
            alt="Stylish photo 2"
            className="w-full h-auto rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold text-center">
            Sed ut perspiciatis
          </h2>
          <p className="text-gray-600 font-light text-center">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          style={{ minHeight: "450px" }}
        >
          <img
            src={Img3}
            alt="Stylish photo 3"
            className="w-full h-auto rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold text-center">
            Sed ut perspiciatis
          </h2>
          <p className="text-gray-600 font-light text-center">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Photos;
