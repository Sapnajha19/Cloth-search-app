import React from 'react'
import "./Suggestion.sass"
import ClothesGrid from "../../Components/ClothesGrid/ClothesGrid"
import { faker } from '@faker-js/faker';
export default function RecommendedPage() {
  const clothesData = [];

  for (let i = 0; i < 5; i++) {
    // const seed = Math.floor(Math.random() * 100000);
    // faker.seed(seed);
    faker.seed(i);
    const image = faker.image.imageUrl();
    const name = faker.commerce.productName();
    clothesData.push({ image, name });
  }
  return (
    <div className="recommended-container">
      <p className="top-heading">Latest Trends</p>
      <div>
      <ClothesGrid clothesData={clothesData} />
      </div>
      <p className="sub-heading">Popular Suggestions</p>

    </div>
  )
}
