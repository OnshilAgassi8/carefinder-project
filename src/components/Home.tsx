//import React from "react";
//import Register from "./Register";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import ExperiencedDoctors from "../assets/ExperiencedDoctors.jpg";
import HighCustomerSatifaction from "../assets/HighCustomerSatifaction.jpg";
import PharmaTeam from "../assets/PharmaTeam.jpg";

export default function Home() {
  return (
    <>
      <div className="bg-white shadow-md py-4">
        <header className="container mx-auto flex flex-wrap justify-between items-center px-4">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <button
              className="text-gray-600 text-2xl ml-4 lg:hidden"
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <nav className="w-full lg:w-auto">
            <ul className="flex flex-col lg:flex-row lg:space-x-6 text-gray-800 lg:mt-0 mt-4">
              <li>
                <a href="#" className="hover:text-blue-500 py-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-500 py-2">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-500 py-2">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about_us" className="hover:text-blue-500 py-2">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact_us" className="hover:text-blue-500 py-2">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
            <Link to="/Register">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full lg:w-auto">
                Register
              </button>
            </Link>
            <Link to="/Login">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full lg:w-auto">
                Login
              </button>
            </Link>
          </div>
        </header>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Carefinder</h1>
          <h1 className="text-2xl md:text-4xl font-semibold mt-4">
            You are in the Right Place <br /> at the Right Time
          </h1>
          <p className="text-base md:text-lg mt-6">
            Therefore do not be anxious about tomorrow, for tomorrow will be
            anxious for itself. <br /> Sufficient for the day is its own
            trouble.
          </p>
          <span className="block mt-4 text-gray-600 italic">Matthew 6:34.</span>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Our Key Features</h2>
          <p className="text-base md:text-lg mt-2">
            Take a look at some of our key features
          </p>
          <ul className="mt-6 space-y-2">
            <li className="text-lg md:text-xl font-medium">Find Hospitals</li>
            <li className="text-lg md:text-xl font-medium">Export Hospitals</li>
            <li className="text-lg md:text-xl font-medium">Share Hospitals</li>
            <li className="text-lg md:text-xl font-medium">Markdown Support</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="text-center">
            <img
              src={ExperiencedDoctors}
              alt="Experienced Doctors"
              className="w-full h-40 object-cover rounded-lg mb-4 mx-auto"
            />
            <h5 className="text-xl md:text-2xl font-semibold mt-4">
              Experienced Doctors
            </h5>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              erat nec leo lobortis blandit.
            </p>
          </div>
          <div className="text-center">
            <img
              src={HighCustomerSatifaction}
              alt="High Customer Satisfaction"
              className="w-full h-40 object-cover rounded-lg mb-4 mx-auto"
            />
            <h5 className="text-xl md:text-2xl font-semibold mt-4">
              High Customer Satisfaction
            </h5>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              erat nec leo lobortis blandit.
            </p>
          </div>
          <div className="text-center">
            <img
              src={PharmaTeam}
              alt="Pharma Team"
              className="w-full h-40 object-cover rounded-lg mb-4 mx-auto"
            />
            <h5 className="text-xl md:text-2xl font-semibold mt-4">
              Pharma Team
            </h5>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              erat nec leo lobortis blandit.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-blue-500 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left px-4">
          <div>
            <h4 className="text-lg md:text-xl font-semibold">
              About CareFinder
            </h4>
            <p className="mt-2 text-sm md:text-base">
              CareFinder is dedicated to helping you find the best healthcare
              facilities near you. Whether you need to find, export, or share
              hospital information, we’ve got you covered.
            </p>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-semibold">Quick Links</h4>
            <ul className="mt-2 text-sm md:text-base space-y-2">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact_us" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-semibold">Contact Us</h4>
            <p className="mt-2 text-sm md:text-base">
              Email: support@carefinder.com
            </p>
            <p className="text-sm md:text-base">
              Phone: +229 51 74 06 53 / +234 70 7849 0070
            </p>
            <div className="mt-4">
              <a
                href="#facebook"
                className="text-white hover:text-gray-300 mx-2"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#twitter"
                className="text-white hover:text-gray-300 mx-2"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#linkedin"
                className="text-white hover:text-gray-300 mx-2"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#instagram"
                className="text-white hover:text-gray-300 mx-2"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">
          <p>&copy; 2024 CareFinder. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
