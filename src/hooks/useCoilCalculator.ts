import React, { useState, useEffect } from 'react';

export function useCoilCalculator() {
  const [calcOD, setCalcOD] = useState<number>(1500);
  const [calcID, setCalcID] = useState<number>(508);
  const [calcWidth, setCalcWidth] = useState<number>(1219);
  const [calcThickness, setCalcThickness] = useState<number>(2.0);
  const [calcDensity, setCalcDensity] = useState<number>(7.85);

  const [calcResults, setCalcResults] = useState({
    weight: 0,
    length: 0,
    cost: 0
  });

  const calculateCoil = () => {
    if (calcOD <= calcID) return;

    // Area = PI/4 * (OD^2 - ID^2) in mm2
    const area = (Math.PI / 4) * (Math.pow(calcOD, 2) - Math.pow(calcID, 2));

    // Volume = Area * Width in mm3
    const volume = area * calcWidth;

    // Weight = Volume * Density * 1e-6 in kg
    const weightKg = volume * calcDensity * 1e-6;

    // Geometric Sheet Length = (PI * (OD^2 - ID^2)) / (4 * Thickness * 1000) inside coil (meters)
    const lengthMeters = (Math.PI * (Math.pow(calcOD, 2) - Math.pow(calcID, 2))) / (4 * calcThickness * 1000);

    // Estimate price processing: 0.06 USD per kg processing tariff + $150 Base Set-up fee
    const processingCost = weightKg * 0.06 + 150;

    setCalcResults({
      weight: Math.round(weightKg),
      length: Math.round(lengthMeters),
      cost: Math.round(processingCost)
    });
  };

  // Run initial calculator logic
  useEffect(() => {
    calculateCoil();
  }, []);

  return {
    calcOD,
    setCalcOD,
    calcID,
    setCalcID,
    calcWidth,
    setCalcWidth,
    calcThickness,
    setCalcThickness,
    calcDensity,
    setCalcDensity,
    calcResults,
    calculateCoil
  };
}
