import React from "react";
import "./style.css";

function Results({ children }) {
  return (
    <div className="results">
      <h4>Search Results</h4>

      <ul className="list-group">{children}</ul>
    </div>
  );
}

export default Results;
