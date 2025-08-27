// src/components/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col justify-center items-center px-4 py-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02] duration-300">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
            <p className="text-gray-600 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              to="/create-account"
              className="block w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center shadow-md hover:shadow-lg"
            >
              Create Account
            </Link>
            
            <div className="text-center pt-4">
              <p className="text-gray-600 text-sm md:text-base">
                Already Registered?{' '}
                <Link to="/login" className="text-purple-600 hover:underline font-medium">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 px-8 py-4 text-center">
          <p className="text-xs text-gray-500">
            © 2023 PopX. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;