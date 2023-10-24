import React, { useState } from 'react';

const DescriptionSlider = ({ description, onSliderChange }) => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSliderValue(value);
    onSliderChange(value); // Pass only the value to the parent component
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-md mb-4 p-4">
      <p className="text-lg font-semibold">{description}</p>
      <input
        type="range"
        min={0}
        max={5}
        step={1}
        value={sliderValue}
        onChange={handleSliderChange}
        className="mt-2"
      />
      <p className="mt-2 text-gray-600">Rating: {sliderValue}</p>
    </div>
  );
};

export default DescriptionSlider;
