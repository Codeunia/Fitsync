import React from "react";

const MealsList = ({ meals }) => (
  <ul className="space-y-2 text-gray-700">
    {meals.map((meal, idx) => (
      <li key={idx}>{meal}</li>
    ))}
  </ul>
);

export default MealsList;
