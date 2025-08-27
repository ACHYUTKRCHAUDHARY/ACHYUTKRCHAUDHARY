// src/components/AccountSettings.js
import React from 'react';
import { Link } from 'react-router-dom';

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col items-center px-4 py-8">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02] duration-300">
        <div className="p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Account Settings</h1>
          
          <div className="flex flex-col md:flex-row items-start mb-8">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 md:mb-0 md:mr-6">
              NR
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Nishant Raj</h2>
              <p className="text-gray-600">nishantraj.li2019@gmail.com</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-2">
              Lorem ipsum Dolor 35, Ames, Consectetur Sedipiscing
            </p>
            <p className="text-gray-700 mb-2">
              Utill, Sed Diam. Nusarium? Simpled Tempor Imbilicat Ut,
            </p>
            <p className="text-gray-700">
              Lisiense is Duisce Magna. Malaygani Israel, Sed Diam.
            </p>
          </div>
          
          <div className="space-y-4">
            <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg">
              Edit Profile
            </button>
            <button className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors">
              Change Password
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50 px-8 py-4 text-center">
          <Link to="/" className="text-purple-600 hover:underline text-sm font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;