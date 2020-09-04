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

  // function formatAuthors(authors) {
  //   const commaAuthors = authors;
  //   for (let i = 0; i < authors.length - 1; i++) {
  //     authors[i] += ", ";
  //     commaAuthors.push(authors[i]);
  //   }
  //   return commaAuthors;
  // }

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

  function handleAddButton(e) {
    e.preventDefault();

    console.log(e.target);
    // const { id, title, authors, imageLinks, infoLink, subtitle, description } = e.target;
  }

  function formatAuthors(authors) {
    if (authors && authors.length > 0) {
      return authors.join(", ");
    }
    return "Unknown";
  }

  function getImage(images) {
    if (images && images.smallThumbnail) {
      return images.smallThumbnail;
    }
    return;
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
      <Results
        books={books}
        handleAddButton={handleAddButton}
        formatAuthors={formatAuthors}
        getImage={getImage}
      />
    </>
  );
}

export default Search;
