import React from 'react';

const WarningPopup = ({ onClose }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 p-4 bg-white border border-gray-300 rounded-lg shadow-md text-black">
      <button
        className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800 cursor-pointer"
        onClick={onClose}
      >
        Close
      </button>
      <p className="text-lg font-semibold">Warning:</p>
      <p className="mt-2">Please answer all sliders to see the results.</p>
    </div>
  );
};

export default WarningPopup;