import React from 'react';

const ResultsPopup = ({ categoryTotalRatings, onClose }) => {
  return (
    <div className="w-64 p-4 border border-gray-300 rounded-lg shadow-md bg-white text-black">
      <button className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800 cursor-pointer" onClick={onClose}>
        Close
      </button>
      <h2 className="text-lg font-semibold">Category Total Ratings:</h2>
      <ul>
        {Object.entries(categoryTotalRatings).map(([category, totalRating]) => (
          <li key={category}>
            <strong>{category}:</strong> {totalRating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsPopup;
