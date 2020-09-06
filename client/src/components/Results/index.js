import React from "react";
import ResultItem from "../ResultItem";
import "./style.css";

// Passing in props exactly as they are in Search.js
function Results({ books, buttonvalue }) {
  return (
    <div className="results">
      <h4>Search Results</h4>

      <ul className="list-group">
        {books.map((book) => (
          <ResultItem
            book={book.volumeInfo}
            _id={book._id}
            key={book._id}
            buttonvalue={buttonvalue}
          />
        ))}
      </ul>
    </div>
  );
}

export default Results;
