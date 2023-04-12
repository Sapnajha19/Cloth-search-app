import React from "react";
import "./ClothesGrid.sass"
export default function ClothesGrid({ clothesData }) {
  return (
    <div className="clothes-grid">
      {clothesData.map((clothing, index) => (
        <div key={index} className="clothing-item">
          <img src={clothing.image} alt={clothing.name} className="cloth-image" />
          <p className="cloth-name">{clothing.name}</p>
        </div>
      ))}
    </div>
  );
}

