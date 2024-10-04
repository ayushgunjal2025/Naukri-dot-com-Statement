import React from "react";
import Logo from "../assets/Sample Logo.png";

function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-8 bg-gray-100 shadow-md flex-wrap">
      <div className="flex-shrink-0">
        <img src={Logo} alt="Logo" className="h-12" />
      </div>

      <nav className="flex-1 flex justify-center space-x-8 text-gray-700 mt-4 md:mt-0">
        <p className="hover:text-blue-500 cursor-pointer transition">
          Features
        </p>
        <p className="hover:text-blue-500 cursor-pointer transition">Pricing</p>
        <p className="hover:text-blue-500 cursor-pointer transition">
          Community
        </p>
        <p className="hover:text-blue-500 cursor-pointer transition">Support</p>
      </nav>

      <div className="mt-4 md:mt-0 space-x-4 flex flex-col md:flex-row items-center">
        <button className="px-4 py-2 bg-white border-2 border-blue-400 text-blue-400 rounded-md transition hover:bg-blue-400 hover:text-white">
          Login
        </button>
        <button className="px-4 py-2 bg-blue-400 text-white border-2 border-blue-400 rounded-md transition hover:bg-white hover:text-blue-400 mt-2 md:mt-0">
          Register
        </button>
      </div>
    </header>
  );
}

export default Header;
