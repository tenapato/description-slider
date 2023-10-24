"use client";
import React, { useState } from 'react';
import DescriptionSlider from './components/slider';
import ResultsPopup from './components/resultsPopup';

// Read the descriptions from descriptions.json
import descriptions from './descriptions.json';

const Index = () => {
  const [answers, setAnswers] = useState({});
  const [categoryTotalRatings, setCategoryTotalRatings] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleSliderChange = (category, description, value) => {
    const updatedAnswers = { ...answers, [description]: value };
    setAnswers(updatedAnswers);

    // Calculate the total rating for the category
    const categoryRatings = descriptions
      .filter((desc) => desc.Category === category)
      .map((desc) => updatedAnswers[desc.Description] || 0);

    const categoryTotalRating = categoryRatings.reduce((acc, curr) => acc + curr, 0);

    // Update the category total rating in state
    setCategoryTotalRatings((prevCategoryTotalRatings) => ({
      ...prevCategoryTotalRatings,
      [category]: categoryTotalRating,
    }));
  };

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Rate Each Description</h1>
      {descriptions.map((item, index) => (
        <div key={index} className="mb-4 p-4">
          <DescriptionSlider
            category={item.Category}
            description={item.Description}
            onSliderChange={(value) => handleSliderChange(item.Category, item.Description, value)}
          />
        </div>
      ))}

      <div className="mt-4">
        <button
          onClick={handleShowPopup}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Show Results
        </button>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-30">
          <ResultsPopup
            categoryTotalRatings={categoryTotalRatings}
            onClose={handleClosePopup}
          />
        </div>
      )}
    </div>
  );
};

export default Index;