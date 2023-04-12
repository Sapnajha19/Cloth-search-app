import React, { useState } from 'react'
import "./SearchClothGrid.sass"
import ReactSimpleStarRating from "react-rating-stars-component";
import Heart from "react-heart"
export default function SearchClothGrid({ clothItems }) {
  // const [active, setActive] = useState(false)
  const [activeHearts, setActiveHearts] = useState(new Array(clothItems.length).fill(false));
  const handleHeartClick = (index) => {
    const newActiveHearts = [...activeHearts]
    newActiveHearts[index] = !newActiveHearts[index]
    setActiveHearts(newActiveHearts)
  }
  return (
    <div className='clothing-grid'>
      {clothItems.map((cloth, index) => (
        <div key={index} className="clothing-item">
          <img src={cloth.imageUrl} alt={cloth.clothname} className="cloth-image" />
          <button className='hover-button'><p className='button-text'>View Product</p></button>
          <Heart className="wishlist-heart" isActive={activeHearts[index]} onClick={() => handleHeartClick(index)} activeColor="red" inactiveColor="white" />
          <p className='cloth-name'>{cloth.clothName}</p>
          <div className="price-tags">
            <div className='price-1'>{`Rs. ${cloth.price1}`}</div>
            <div className='price-2'>{`Rs. ${cloth.price2}`}</div>
          </div>
          <div className='rate'>
            <div className="cloth-name"><ReactSimpleStarRating className="star" emptyColor='#ffffff' size={20} value={cloth.number1} edit={false} /></div>
            <div className="review-no">{`(${cloth.number2})`}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
