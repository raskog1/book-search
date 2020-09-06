import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import API from "../utils/API";

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.getBooks().then((result) => setBooks(result.data));
  });

  return (
    <>
      <Navbar />
      <Results books={books} buttonvalue="Delete" />
    </>
  );
}

export default Saved;
