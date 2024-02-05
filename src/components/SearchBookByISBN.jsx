// src/components/SearchBookByISBN.js
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";


const SearchBookByISBN = () => {
  const [isbn, setIsbn] = useState({
    ISBN: '',
  });
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsbn((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearch = async () => {
    if (!isbn.ISBN) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(`https://library-management-system-jade-eight.vercel.app/api/book/ISBN/?ISBN=${isbn.ISBN}`
      );
      setBook(response.data.Book);
      setError(null);
      console.log(isbn)
    } catch (error) {
      setBook(null);
      console.log(error.message, 'error');
      setError('Book not found.');
    } finally {
      setLoading(false);
    }
    console.log(isbn);
  };

  return (
    <>
   <Navbar/>
    <div className="w-[70%] mx-auto p-8 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-full">
        <h2 className="text-2xl font-bold mb-6">Search Book by ISBN</h2>

        <div className="mb-4">
          <label htmlFor="ISBN" className="block text-sm font-medium text-gray-700">
            Enter ISBN:
          </label>
          <input
            type="number"
            id="ISBN"
            name="ISBN"
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter ISBN"
            value={isbn.ISBN}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={handleSearch}
          disabled={!isbn.ISBN || loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {book && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Book Details</h3>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.ISBN}</p>
            <p>Genre: {book.genre}</p>
            {/* Add more details as needed */}
          </div>
        )}
      </div>
    </div>
    <div className='flex-row items-center text-center w-[70%] mx-auto'>
    <h3 className="text-lg font-semibold mb-2">Book Details</h3>
    {book && (
      
    <table className="min-w-full text-center">
    <thead>
      <tr className="bg-gray-200">
        <th className="py-2 px-4">Title</th>
        <th className="py-2 px-4">Author</th>
        <th className="py-2 px-4">ISBN</th>
        <th className="py-2 px-4">Genre</th>
        <th className="py-2 px-4">Publication Year</th>
        {/* Add more header columns as needed */}
      </tr>
    </thead>
    <tbody>
    
        <tr className="border-b">
          <td className="py-2 bg-slate-500 px-4">{book.title}</td>
          <td className="py-2 bg-slate-500 px-4">{book.author}</td>
          <td className="py-2 bg-slate-500 px-4">{book.ISBN}</td>
          <td className="py-2 bg-slate-500 px-4">{book.genre}</td>
          <td className="py-2 bg-slate-500 px-4">{book.publicationYear}</td>
          {/* Add more columns as needed */}
        </tr>
     
    </tbody>
  </table>
  )}
  </div>
    </>
  );
};

export default SearchBookByISBN;
