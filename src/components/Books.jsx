// src/components/BookList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from './Navbar';


const Books = () => {
  const [Books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://library-management-system-jade-eight.vercel.app/api/books"
      );
      console.log(response);
      setBooks(response.data.books);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <Navbar/>
    <div className=" w-full p-8 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-full">
        <h2 className="text-2xl font-bold mb-6">Book List</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid gap-4">
          <table className="min-w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Author</th>
              <th className="py-2 px-4">ISBN</th>
              <th className="py-2 px-4">Genre</th>
              {/* Add more header columns as needed */}
            </tr>
          </thead>
          <tbody>
            {Books.map((book) => (
              <tr key={book.id} className="border-b">
                <td className="py-2 px-4">{book.title}</td>
                <td className="py-2 px-4">{book.author}</td>
                <td className="py-2 px-4">{book.ISBN}</td>
                <td className="py-2 px-4">{book.genre}</td>
                {/* Add more columns as needed */}
              </tr>
            ))}
          </tbody>
        </table>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Books;
