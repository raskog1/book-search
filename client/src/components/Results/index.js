import React from "react";
import ResultItem from "../ResultItem";
import "./style.css";

// Passing in props exactly as they are in Search.js
function Results({ books }) {
  return (
    <div className="results">
      <h4>Search Results</h4>

      <ul className="list-group">
        {/* For the book array passed in, map through it and pass in each
        book as a prop, as well as the button handler */}
        {books.map((book) => (
          <ResultItem book={book.volumeInfo} />
        ))}
      </ul>
    </div>
  );
}

export default Results;
