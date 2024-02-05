// src/components/AddBook.js
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    ISBN: '',
    genre: '',
    publicationYear: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post('https://library-management-system-jade-eight.vercel.app/api/book', formData);
      setError(null);
      // Optionally, you can reset the form after successful submission
      setFormData({
        title: '',
        author: '',
        ISBN: '',
        genre: '',
        publicationYear: '',
      });
    } catch (error) {
      setError('Error adding book.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className=" w-[80%] p-4 flex mx-auto items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-full">
        <h2 className="text-2xl font-bold mb-3">Add Book</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">
              Author:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter author"
              value={formData.author}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="isbn" className="block text-sm font-medium text-gray-700">
              ISBN:
            </label>
            <input
              type="text"
              id="ISBN"
              name="ISBN"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter ISBN"
              value={formData.ISBN}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
              Genre:
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter genre"
              value={formData.genre}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="publicationYear" className="block text-sm font-medium text-gray-700">
              Publication Year:
            </label>
            <input
              type="text"
              id="publicationYear"
              name="publicationYear"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter publication year"
              value={formData.publicationYear}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Book'}
          </button>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      </div>
    </div>
 
    </>
  );
};

export default AddBook;
