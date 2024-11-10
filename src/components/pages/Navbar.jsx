import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">
          <h1>Dev Zone</h1>
        </Link>
      </div>

      {/* Menu */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <Link to="/register" className="hover:text-gray-300">Register</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </div>

      {/* Button */}
      <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </div>
    </nav>
    );
};

export default Navbar;