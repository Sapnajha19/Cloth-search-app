import React from "react";
import { Link } from 'react-router-dom';
import "./SuggestionFilter.sass"
export default function SuggestionFilter({filters}) {
  
  return (
    <div className="filter-grid">
      {filters.map((filtering, index) => (
          <div key={index} className="filter-item">
            <Link to={`/search-result?query=${filtering}`} key={index} className="filter-link" exact="true">
            <p className="filter-name">{filtering}</p>
            </Link>
          </div>
        ))}
    </div>
  )
}
