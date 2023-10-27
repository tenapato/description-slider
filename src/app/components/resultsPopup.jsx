import React from 'react';

const ResultsPopup = ({ categoryTotalRatings, onClose }) => {
  const customOrder = [
    "Con propósito",
    "Tengo dominio personal",
    "Agilidad interior",
    "Catalizador de equipos ágiles",
    "¿Qué es Empoderamiento?",
    "¿Qué es Colaboración?",
    "¿Qué es Innovación?",
  ];

  const displayNames = [
    "Lidero con propósito",
    "Dominio personal",
    "Tengo agilidad interior",
    "Soy catalizador de equipos ágiles",
    "Empodero a mi equipo",
    "Genero colaboración",
    "Promuevo la innovación",
  ];

  return (
    <div className="w-96 p-4 border border-gray-300 rounded-lg shadow-md bg-white text-black">
      <div className="flex justify-between items-center pb-2">
        <h2 className="text-xl font-bold">Resultados:</h2>
        <button onClick={onClose} className="text-red-500 cursor-pointer">
          Close
        </button>
      </div>
      <ul>
        {customOrder.map((category, index) => (
          <li key={category} className="mb-4">
            <strong>* {displayNames[index]}:</strong> {categoryTotalRatings[category] || 0}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsPopup;
