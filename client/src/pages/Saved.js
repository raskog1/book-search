import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import API from "../utils/API";

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.getBooks().then((result) => setBooks(result.data));
  });

  // async function getSaved() {
  //   const books = await API.getBooks();
  //   console.log(books.data);
  //   setBooks(books.data);
  // }

  return (
    <>
      <Navbar />
      <Results books={books} />
    </>
  );
}

export default Saved;
