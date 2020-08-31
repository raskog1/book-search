import React from "react";
import "./style.css";

function Searchbar(props) {
  return (
    <div className="searchbar">
      <h2>Search for a book:</h2>
      <input className="form-control" {...props} />
      <button
        className="btn"
        onClick={props.onClick}
        style={{ marginLeft: "auto", marginBottom: 10 }}
      >
        Search
      </button>
    </div>
  );
}

export default Searchbar;
