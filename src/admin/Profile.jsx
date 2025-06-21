import React from "react";
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md w-full">
      <div className="flex items-center gap-4 mb-6">
        <FaUserCircle className="text-6xl text-blue-600" />
        <div>
          <h2 className="text-2xl font-bold">Charika X</h2>
          <p className="text-gray-500">System Administrator</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-blue-500" />
          <span className="text-gray-700">admin@example.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="text-green-500" />
          <span className="text-gray-700">+212 600 000 000</span>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-red-500" />
          <span className="text-gray-700">Casablanca, Morocco</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="text-gray-600 text-sm">
          We are a companies located in Rabat, Morocco, created for more than 13 years from now, our work is creating websites and applications for your needs, and for that we hire every year new developpers and UX/UI designers expert in their job, to delivery the quality and give you the result you expect and more.
        </p>
      </div>
    </div>
  );
}
