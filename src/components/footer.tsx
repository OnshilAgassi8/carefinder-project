import React from "react";

const Footer: React.FC = () => {
    return (
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
    );
};

export default Footer;
