import React from "react";
import Img from "../assets/sean-pollock-PhYq704ffdA-unsplash 1.png";

function Social() {
  return (
    <div className="px-4 md:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Have you ever posted any photo on social media?
        </h1>
        <p className="text-gray-400 font-extralight mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h2 className="text-3xl font-bold">Sed ut perspiciatis</h2>
            <p className="text-gray-600 font-light text-lg">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Sed ut perspiciatis</h2>
            <p className="text-gray-600 font-light text-lg">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Sed ut perspiciatis</h2>
            <p className="text-gray-600 font-light text-lg">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur.
            </p>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2 flex justify-center items-center h-full">
          <img
            src={Img}
            alt="Social media"
            className="object-contain h-64 md:h-full"
          />{" "}
          {/* Adjust the height */}
        </div>
      </div>
    </div>
  );
}

export default Social;
