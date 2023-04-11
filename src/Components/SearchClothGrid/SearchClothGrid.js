import React from 'react'
import { faker } from '@faker-js/faker';
import "./SearchClothGrid.sass"
import ReactSimpleStarRating from "react-rating-stars-component";
export default function SearchClothGrid({clothItems}) {
    // const { imageUrl, clothName, price1, price2, number1, number2 } = props;
  return (
    <div className='clothing-grid'>
      {clothItems.map((cloth, index) => (
          <div key={index} className="clothing-item">
            <img src={cloth.imageUrl} alt={cloth.clothname} className="cloth-image"/>
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
