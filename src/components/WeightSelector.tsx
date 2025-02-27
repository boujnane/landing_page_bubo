// src/components/WeightSelector.jsx
import { useState } from 'react';

export default function WeightSelector({ productName }) {
  const weights = ["50g", "100g", "250g", "500g"];
  const [selectedWeight, setSelectedWeight] = useState("50g");

  return (
    <div className="flex items-center justify-center mt-2">
      <label htmlFor={`${productName}-weight`} className="text-sm text-gray-700 dark:text-gray-300">
        Poids:
      </label>
      <select
        id={`${productName}-weight`}
        value={selectedWeight}
        onChange={(e) => setSelectedWeight(e.target.value)}
        className="ml-2 border rounded px-2 py-1 bg-white dark:bg-gray-700 dark:text-gray-100"
      >
        {weights.map(weight => (
          <option key={weight} value={weight}>
            {weight}
          </option>
        ))}
      </select>
    </div>
  );
}
