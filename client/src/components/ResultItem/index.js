import React from "react";
import "./style.css";

function ResultItem({
  book: { title, authors, imageLinks, infoLink, subtitle, description },
  handleAddButton,
  formatAuthors,
  getImage,
}) {
  return (
    <div className="book-link">
      <a href={infoLink}>
        <img src={getImage(imageLinks)} />
        <h5>
          {title} by {formatAuthors(authors)}
        </h5>
      </a>
      <p className="dropdown">{description}</p>
      <button
        className="btn addButton"
        onClick={handleAddButton}
        style={{ marginLeft: "auto", marginBottom: 10 }}
      >
        Add
      </button>
    </div>
  );
}

export default ResultItem;
