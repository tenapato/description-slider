"use client";
import React, { useState } from 'react';
import DescriptionSlider from './components/slider';
import ResultsPopup from './components/resultsPopup';
import WarningPopup from './components/WarningPopup';

// Read the descriptions from descriptions.json
import descriptions from './descriptions.json';

const Index = () => {
  const [answers, setAnswers] = useState({});
  const [categoryTotalRatings, setCategoryTotalRatings] = useState({});
  const [showResultsPopup, setShowResultsPopup] = useState(false);
  const [showWarningPopup, setShowWarningPopup] = useState(false);

  const handleSliderChange = (category, description, value) => {
    const updatedAnswers = { ...answers, [description]: value };
    setAnswers(updatedAnswers);

    const categoryRatings = descriptions
      .filter((desc) => desc.Category === category)
      .map((desc) => updatedAnswers[desc.Description] || 0);

    const categoryTotalRating = categoryRatings.reduce((acc, curr) => acc + curr, 0);

    setCategoryTotalRatings((prevCategoryTotalRatings) => ({
      ...prevCategoryTotalRatings,
      [category]: categoryTotalRating,
    }));
  };

  const handleShowResultsPopup = () => {
    const isAllAnswered = descriptions.every((item) => answers[item.Description] !== undefined);

    if (isAllAnswered) {
      setShowResultsPopup(true);
      setShowWarningPopup(false); // Close the warning popup if it's open
    } else {
      setShowWarningPopup(true);
    }
  };

  const handleCloseResultsPopup = () => {
    setShowResultsPopup(false);
  };

  const handleCloseWarningPopup = () => {
    setShowWarningPopup(false);
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
          onClick={handleShowResultsPopup}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Show Results
        </button>
      </div>

      {showResultsPopup && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-30">
          <ResultsPopup
            categoryTotalRatings={categoryTotalRatings}
            onClose={handleCloseResultsPopup}
          />
        </div>
      )}

      {showWarningPopup && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-30">
          <WarningPopup onClose={handleCloseWarningPopup} />
        </div>
      )}
    </div>
  );
};

export default Index;