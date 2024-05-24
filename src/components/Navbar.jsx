// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* College Logo */}
        <div className="flex items-center space-x-2">
          <img src="/college-mono.gif" alt="College Logo" className="h-10 w-10 rounded-md" />
          <span className="text-white md:text-2xl text-xl font-bold">
           Library Management System 
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300">
            Home
          </Link>

          <Link to="/add-book" className="text-white hover:text-gray-300 transition duration-300">
            Add Book
          </Link>
          <Link to="/search-book" className="text-white hover:text-gray-300 transition duration-300">
           Search
          </Link>

          <Link to="/books" className="text-white hover:text-gray-300 transition duration-300">
          Books
          </Link>

          <Link to="/members" className="text-white hover:text-gray-300 transition duration-300">
            Members
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
