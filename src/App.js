import React from 'react';
import './App.css';
import Home from './Pages/Homepage/Home.js';
import Suggestion from './Pages/SuggestionPage/Suggestion';
import SearchResult from './Pages/SearchResultPage/SearchResult';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suggestions" element={<Suggestion />} />
          <Route path="/search-result" element={<SearchResult />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
