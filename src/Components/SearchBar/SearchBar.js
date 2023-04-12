import React,{useState} from 'react'
import "./SearchBar.sass"
import { useNavigate } from "react-router-dom";
import SearchLens from "../SearchBar/SearchLens.png"
import Suggestion from '../../Pages/SuggestionPage/Suggestion';
export default function SearchBar() {
  const [placeholder, setPlaceholder] = useState('Search');
    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    const handleBlur = () => {
      setShowSuggestions(false);
      setPlaceholder('Search');
    }

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate("/search-result");
  };

  const handleSearchClick = () => {
    // navigate("/suggestions");
    setShowSuggestions(true);
    setPlaceholder('');
    
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate("/search-result");
    }
  };

    return (
        <div className='search-bar'>
            <input type="text" placeholder={placeholder} className='search-bar-text' value={searchQuery} onBlur={handleBlur} onChange={handleInputChange} onClick={handleSearchClick} onKeyPress={handleKeyPress}/>
                {/* <div className='search-text'>Search</div> */}
                <img src={SearchLens} alt="search-lens" className='search-lens'/>
                {showSuggestions && <Suggestion />}
        </div>
    )
}
