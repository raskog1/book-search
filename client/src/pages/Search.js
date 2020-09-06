import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Results from "../components/Results";
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
    console.log(e.target);
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
      <Results books={books} buttonvalue="Add" />
    </>
  );
}

export default Search;
