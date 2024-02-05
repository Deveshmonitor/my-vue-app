import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar/>
      <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to the Library Management System</h2>
          <p className="text-gray-600">
            Explore the features of our library management system and manage your library efficiently.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center">
          <Link to="/add-book" className="m-4 p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add New Book
          </Link>
          <Link
            to="/search-book"
            className="m-4 p-4 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Search Books
          </Link>
          <Link
            to="/members"
            className="m-4 p-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          >
            Manage Members
          </Link>
          <Link
            to="/books"
            className="m-4 p-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          >
            Look All Books
          </Link>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Featured Books</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Book Showcase - Replace with actual book data */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <h4 className="text-lg font-bold mb-2">Book Title 1</h4>
              <p className="text-gray-600">Author: Author Name</p>
              <p className="text-gray-600">Genre: Fiction</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <h4 className="text-lg font-bold mb-2">Book Title 2</h4>
              <p className="text-gray-600">Author: Author Name</p>
              <p className="text-gray-600">Genre: Non-Fiction</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <h4 className="text-lg font-bold mb-2">Book Title 3</h4>
              <p className="text-gray-600">Author: Author Name</p>
              <p className="text-gray-600">Genre: Mystery</p>
            </div>
            {/* Add more book showcases as needed */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
