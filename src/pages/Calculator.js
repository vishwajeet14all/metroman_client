import React, { useState } from 'react'

export default function Calculator() {
  const [area, setArea] = useState('');
  const [thickness, setThickness] = useState('');
  const [result, setResult] = useState('');

  const calculateCement = () => {
    const areaFloat = parseFloat(area);
    const thicknessFloat = parseFloat(thickness);

    if (isNaN(areaFloat) || isNaN(thicknessFloat)) {
      alert('Please enter valid numbers for area and thickness.');
      return;
    }

    const volume = (areaFloat * thicknessFloat) / 100; // Convert thickness to meters
    const bagsOfCement = Math.ceil(volume / 0.0348); // Assume 1 bag of cement covers 0.0348 cubic meters

    setResult(`Estimated Bags of Cement Needed: ${bagsOfCement}`);
  };

  return (
    <div>
      <label htmlFor="area">Area to be Covered (in square meters):</label>
      <input
        type="number"
        id="area"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        required
      />

      <label htmlFor="thickness">Thickness of Cement Layer (in centimeters):</label>
      <input
        type="number"
        id="thickness"
        value={thickness}
        onChange={(e) => setThickness(e.target.value)}
        required
      />

      <button type="button" onClick={calculateCement}>Calculate</button>

      <p>{result}</p>
    </div>
  );
};

