import React, { useState } from "react";
import logo from "../assets/Sample Logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prev) => {
      const { name, type, checked, value } = event.target;
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Ready to take a free trial?</h1>
        <p className="text-gray-400 font-light mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      <div className="bg-white border border-green-500 rounded-lg shadow-md p-8 w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">
          Sign up for a free account
        </h1>
        <form onSubmit={submitHandler}>
          <div className="flex space-x-4 mb-4">
            <input
              name="first_name"
              onChange={changeHandler}
              type="text"
              placeholder="First Name"
              className="border border-light-gray p-2 flex-1 rounded"
            />
            <input
              name="last_name"
              onChange={changeHandler}
              type="text"
              placeholder="Last Name"
              className="border border-light-gray p-2 flex-1 rounded"
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <input
              name="email"
              onChange={changeHandler}
              type="email"
              placeholder="Email Address"
              className="border border-light-gray p-2 flex-1 rounded"
            />
            <input
              name="phone_number"
              onChange={changeHandler}
              type="tel"
              placeholder="Phone Number"
              className="border border-light-gray p-2 flex-1 rounded"
            />
          </div>
          <input
            name="password"
            onChange={changeHandler}
            type="password"
            placeholder="Create Password"
            className="border border-light-gray p-2 rounded w-full mb-4"
          />
          <button className="bg-blue-500 text-white p-2 rounded w-1/2 mb-4 mx-auto">
            Register
          </button>
        </form>
      </div>

      <footer className="bg-black text-white p-6 mt-8 w-full">
        <div className="flex justify-between items-center mb-4">
          <img src={logo} alt="Logo" className="h-10" />
          <div className="flex space-x-8">
            <div>
              <p>Mobile app</p>
              <p>Features</p>
              <p>Live share</p>
              <p>Video record</p>
            </div>
            <div>
              <p>Mobile app</p>
              <p>Features</p>
              <p>Live share</p>
              <p>Video record</p>
            </div>
            <div>
              <p>Mobile app</p>
              <p>Features</p>
              <p>Live share</p>
              <p>Video record</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white my-4" />

        <div className="flex justify-between items-center">
          <p className="text-gray-400">
            © 2024 Your Company. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <FaFacebook className="h-5 w-5" />
            <FaInstagram className="h-5 w-5" />
            <FaYoutube className="h-5 w-5" />
            <FaTwitter className="h-5 w-5" />
            <FaLinkedin className="h-5 w-5" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Register;
