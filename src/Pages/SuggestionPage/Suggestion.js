import React from 'react'
import "./Suggestion.sass"
import ClothesGrid from "../../Components/ClothesGrid/ClothesGrid"
import { faker } from '@faker-js/faker';
import SuggestionFilter from '../../Components/SuggestionFilter/SuggestionFilter';
export default function RecommendedPage() {

  const clothesData = [];
  for (let i = 0; i < 5; i++) {
    faker.seed(i);
    const image = faker.image.image();
    const name = faker.commerce.productName();
    clothesData.push({ image, name });
  }

  const filters = [];
  for (let i = 0; i < 5; i++) {
    const filter = faker.commerce.productAdjective();
    filters.push(filter);
  }

  return (
    <div className="recommended-container">
      <p className="top-heading">Latest Trends</p>
      <div className="cloth-grid">
        <ClothesGrid clothesData={clothesData} />
      </div>
      <p className="sub-heading">Popular Suggestions</p>
      <div className='filter-grid'>
        <SuggestionFilter filters={filters} className="filter-names" />
      </div>

    </div>
  )
}
