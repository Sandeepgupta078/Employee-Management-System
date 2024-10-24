import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Heading Section */}
      <h1 className="text-5xl font-extrabold text-white mb-10">
        Employee Management System
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-100 mb-8 text-center max-w-2xl">
        Manage your employees efficiently with our Employee Management System. Please login to access your dashboard.
      </p>

      {/* Login Options */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Admin Login Button */}
        <Link
          to="/login/admin"
          className="px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-200 transition duration-300 ease-in-out shadow-lg"
        >
          Admin Login
        </Link>

        {/* Employee Login Button */}
        <Link
          to="/login/employee"
          className="px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-200 transition duration-300 ease-in-out shadow-lg"
        >
          Employee Login
        </Link>
      </div>

      {/* Extra Section or Image */}
      <div className="mt-12">
        <img
          src="/assets/employee_management.svg"
          alt="Employee Management"
          className="w-96 h-auto"
        />
      </div>
    </div>
  );
};

export default Home;
