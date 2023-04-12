import React from "react";
import { Link } from 'react-router-dom';
// import { useState } from "react";
import "./SuggestionFilter.sass";
import SearchResult from "../../Pages/SearchResultPage/SearchResult";


export default function SuggestionFilter({filters}) {
  return (
    <div className="filter-grid">
      {filters.map((filtering, index) => (
          <div key={index} className="filter-item">
            <Link  to={`/search-result`} key={index}>
            <p className="filter-name">{filtering}</p>
            </Link>
          </div>
        ))}
    </div>
  )
}
