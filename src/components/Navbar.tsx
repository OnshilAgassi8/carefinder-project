import React from "react"
import Logo from "../assets/Logo.jpg"
import { Link } from "react-router-dom"


const Navbar: React.FC = () => {
    return (
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
    );
};

export default Navbar;