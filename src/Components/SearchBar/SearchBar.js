import React from 'react'
import "./SearchBar.sass"
import SearchLens from "../SearchBar/SearchLens.png"
export default function SearchBar() {
    return (
        <div className='search-bar'>
            <input type="text" placeholder="Search" className='search-bar-text'/>
                {/* <div className='search-text'>Search</div> */}
                <img src={SearchLens} alt="search-lens" className='search-lens'/>
            
        </div>
    )
}
