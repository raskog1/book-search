import React from "react";
import "./style.css";
import API from "../../utils/API";

function ResultItem({
  book: { title, authors, imageLinks, infoLink, subtitle, description },
  googleId,
}) {
  function addButton(e) {
    if (e.target.value !== "Saved") {
      API.saveBook({
        volumeInfo: {
          title,
          authors,
          imageLinks,
          infoLink,
          subtitle,
          description,
        },
      }).then((e.target.value = "Saved"));
    }
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

  return (
    <div className="book-link">
      <a href={infoLink}>
        <img src={getImage(imageLinks)} />
        <h5>
          {title} by {formatAuthors(authors)}
        </h5>
      </a>
      <p className="dropdown">{description}</p>
      <input
        type="button"
        className="btn addButton"
        onClick={addButton}
        style={{ marginLeft: "auto", marginBottom: 10 }}
        value="Add"
      />
    </div>
  );
}

export default ResultItem;
