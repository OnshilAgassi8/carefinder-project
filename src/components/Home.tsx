//import React from "react";
//import Register from "./Register";
import Navbar from "./Navbar";
import ExperiencedDoctors from "../assets/ExperiencedDoctors.jpg";
import HighCustomerSatifaction from "../assets/HighCustomerSatifaction.jpg";
import PharmaTeam from "../assets/PharmaTeam.jpg";
import Footer from "./footer";

export default function Home() {
  return (
    <>
    <Navbar />

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
            At Carefinder, we connect you with highly experienced doctors who are dedicated to providing exceptional medical care. Our network of professionals includes specialists across various fields, ensuring you receive the expertise you need for your health and well-being. Trust Carefinder to help you find top-rated doctors who prioritize your health with years of experience and proven track records.
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
            Customer satisfaction is our top priority. We pride ourselves on delivering a seamless healthcare experience by connecting users with trusted hospitals and specialists across Nigeria. Our platform is designed with user feedback in mind, ensuring easy navigation, accurate information, and reliable service. With a focus on quality care and personalized support, Carefinder consistently receives high ratings and positive reviews from satisfied users.
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
            The dedicated Pharma team of our Carefinder app is here to support your medication needs. Our experts work closely with trusted pharmacies to ensure that you have access to safe, effective, and affordable medicines. Whether you need prescription refills, medication advice, or information on drug availability, our Pharma team is committed to delivering timely and reliable assistance, so you can focus on your health with confidence.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      
    </>
  );
}

