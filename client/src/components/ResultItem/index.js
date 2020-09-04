import React from "react";
import "./style.css";

function ResultItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

export default ResultItem;
