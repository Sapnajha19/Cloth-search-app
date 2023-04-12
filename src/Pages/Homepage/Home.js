import React, { useState } from 'react'
import "./Home.sass"
import ZeviLogo from "../../Assets/ZeviLogo.png"
import SearchBar from '../../Components/SearchBar/SearchBar'
import Suggestion from "../SuggestionPage/Suggestion"
export default function HomePage() {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const handleSearchClick = () => {
    setIsSearchClicked(true);
    console.log('Search bar clicked!');
  };
  return (
    <div className='bg-image'>

      <img className='zevi-logo' src={ZeviLogo} alt="logo" />
      <SearchBar className="search-bar" onClick={handleSearchClick} />
      {isSearchClicked && <Suggestion />}
    </div>
  )
}
