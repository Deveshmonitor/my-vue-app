import React from "react";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Members from "./components/Members";
import SearchBookByISBN from "./components/SearchBookByISBN";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Books from './components/Books';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/search-book" element={<SearchBookByISBN/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
