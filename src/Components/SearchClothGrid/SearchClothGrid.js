import React, { useState } from 'react'
import "./SearchClothGrid.sass"
import ReactSimpleStarRating from "react-rating-stars-component";
import Heart from "react-heart"
export default function SearchClothGrid({ clothItems }) {
  const [active, setActive] = useState(false)
  return (
    <div className='clothing-grid'>
      {clothItems.map((cloth, index) => (
        <div key={index} className="clothing-item">
          <img src={cloth.imageUrl} alt={cloth.clothname} className="cloth-image" />
          <button className='hover-button'>View Product</button>
          <Heart className="wishlist-heart" isActive={active} onClick={() => setActive(!active)} activeColor="red" inactiveColor="white" />
          <p className='cloth-name'>{cloth.clothName}</p>
          <div className="price-tags">
            <div className='price-1'>{`Rs. ${cloth.price1}`}</div>
            <div className='price-2'>{`Rs. ${cloth.price2}`}</div>
          </div>
          <div className='rate'>
            <div className="cloth-name"><ReactSimpleStarRating emptyColor='#ffffff' size={20} value={cloth.number1} edit={false} /></div>
            <div className="review-no">{`(${cloth.number2})`}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
