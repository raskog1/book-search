import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Results from "../components/Results";
import ResultItem from "../components/ResultItem";
import API from "../utils/API";

function Search() {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const { search } = formObject;
    if (search) {
      console.log(`Searching for ${search}`);
      API.searchId(search).then((res) => setBooks(res.data.items));
      // .then(console.log(books));
    }
  }

  console.log(books);
  books.map((book) => {
    console.log(book.volumeInfo.title);
  });
  return (
    <>
      <Navbar />
      <Searchbar
        onChange={handleInputChange}
        onClick={handleFormSubmit}
        name="search"
        placeholder="Enter title or author here..."
      />
      <Results>
        {books.map((book) => (
          <ResultItem key={book.id}>
            <a href={book.volumeInfo.infoLink}>
              <h5>
                {book.volumeInfo.title} by {book.volumeInfo.authors.join(", ")}
              </h5>
            </a>
            <p className="dropdown">{book.volumeInfo.description}</p>
          </ResultItem>
        ))}
      </Results>
    </>
  );
}

export default Search;
