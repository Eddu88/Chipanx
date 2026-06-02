import React from 'react';
import { Scale, Calculator as CalcIcon } from 'lucide-react';
import { translations, PageType } from '../../types';
import { useCoilCalculator } from '../../hooks/useCoilCalculator';

interface CalculatorProps {
  lang: 'es' | 'en';
  darkMode: boolean;
  setActivePage: (page: PageType) => void;
}

export function Calculator({ lang, darkMode, setActivePage }: CalculatorProps) {
  const {
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
  } = useCoilCalculator();

  const t = translations[lang];

  return (
    <section className={`py-24 border-y transition-theme min-h-screen overflow-y-auto snap-start scroll-mt-20 ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
      }`} id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-brand-red font-display text-xs sm:text-sm font-extrabold tracking-[6px] uppercase mb-3">
            <CalcIcon size={14} className="text-brand-red" />
            {lang === 'es' ? 'SOPORTE DE DISEÑO DE BOBINA' : 'COIL METRIC DESIGN COMPANION'}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-100 tracking-tight text-brand-red mb-3 uppercase">
            {t.calcTitle}
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-650'
            }`}>
            {t.calcSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Input fields panel */}
          <div className={`lg:col-span-7 p-6 sm:p-8 border rounded-lg shadow-sm transition-theme flex flex-col justify-between ${darkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
            }`}>
            <div className="space-y-6">
              <span className="font-display text-xs tracking-wider uppercase font-extrabold text-brand-red block border-b border-zinc-800 pb-2 mb-4">
                {lang === 'es' ? 'PARÁMETROS FÍSICOS DE ENTRADA' : 'PHYSICAL ESTIMATION INPUT VALUES'}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* OD Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-zinc-400">
                    {t.calcOuterD}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={calcOD}
                      onChange={(e) => setCalcOD(parseFloat(e.target.value) || 0)}
                      className={`w-full p-3 text-sm rounded border focus:outline-none focus:ring-1 focus:ring-brand-red transition-theme font-semibold ${darkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-300 text-zinc-900'
                        }`}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-500">mm</span>
                  </div>
                </div>

                {/* ID Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-zinc-400">
                    {t.calcInnerD}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={calcID}
                      onChange={(e) => setCalcID(parseFloat(e.target.value) || 0)}
                      className={`w-full p-3 text-sm rounded border focus:outline-none focus:ring-1 focus:ring-brand-red transition-theme font-semibold ${darkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-300 text-zinc-900'
                        }`}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-500">mm</span>
                  </div>
                </div>

                {/* Width Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-zinc-400">
                    {t.calcWidth}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={calcWidth}
                      onChange={(e) => setCalcWidth(parseFloat(e.target.value) || 0)}
                      className={`w-full p-3 text-sm rounded border focus:outline-none focus:ring-1 focus:ring-brand-red transition-theme font-semibold ${darkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-300 text-zinc-900'
                        }`}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-500">mm</span>
                  </div>
                </div>

                {/* Thickness Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-zinc-400">
                    {t.calcThick}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      value={calcThickness}
                      onChange={(e) => setCalcThickness(parseFloat(e.target.value) || 0.1)}
                      className={`w-full p-3 text-sm rounded border focus:outline-none focus:ring-1 focus:ring-brand-red transition-theme font-semibold ${darkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-300 text-zinc-900'
                        }`}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-500">mm</span>
                  </div>
                </div>

                {/* Density (Carbon/Stainless select or range input) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-zinc-400">
                    {t.calcDensity}
                  </label>
                  <select
                    value={calcDensity}
                    onChange={(e) => setCalcDensity(parseFloat(e.target.value))}
                    className={`w-full p-3 text-sm rounded border focus:outline-none focus:ring-1 focus:ring-brand-red transition-theme font-semibold ${darkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-300 text-zinc-900'
                      }`}
                  >
                    <option value={7.85}>7.85 (Carbon Steel / Hierro)</option>
                    <option value={7.93}>7.93 (Stainless Steel 304/316)</option>
                    <option value={2.70}>2.70 (Aluminum Alloy)</option>
                  </select>
                </div>

                {/* Pricing per Kg preset */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-zinc-400">
                    Preset Standards
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => { setCalcOD(1500); setCalcID(508); setCalcWidth(1219); setCalcThickness(2.0); }}
                      className="flex-1 py-2 px-3 text-center text-xs bg-brand-red text-white hover:bg-brand-red-dark font-display font-semibold uppercase rounded transition-colors"
                    >
                      Medium Coils
                    </button>
                    <button
                      type="button"
                      onClick={() => { setCalcOD(1800); setCalcID(610); setCalcWidth(1524); setCalcThickness(5.0); }}
                      className="flex-1 py-2 px-3 text-center text-xs bg-zinc-700 text-white hover:bg-zinc-600 font-display font-semibold uppercase rounded transition-colors"
                    >
                      Heavy Duty
                    </button>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800">
              <button
                onClick={calculateCoil}
                className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-display text-sm tracking-widest font-extrabold py-4 px-6 rounded-sm uppercase transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Scale size={16} />
                {t.calcCalculate}
              </button>
            </div>

          </div>

          {/* Results visually compelling panel */}
          <div className={`lg:col-span-5 p-6 sm:p-8 rounded-lg flex flex-col justify-between transition-theme ${darkMode ? 'bg-zinc-900/80 border border-zinc-800 text-zinc-100' : 'bg-zinc-200 border border-zinc-350 text-zinc-900'
            }`}>
            <div>
              <span className="block font-display text-xs tracking-wider uppercase font-extrabold text-brand-red border-b border-zinc-800 pb-2 mb-6">
                {lang === 'es' ? 'INDICADORES INDUSTRIALES ESTIMADOS' : 'ESTIMATED METALLURGICAL OUTPUTS'}
              </span>

              <div className="space-y-6">

                {/* Estimated Coil Weight */}
                <div>
                  <span className="text-xs text-zinc-400 uppercase tracking-widest block font-display">
                    {t.calcResultWeight}
                  </span>
                  <span className="font-display font-extrabold text-4xl sm:text-5xl text-brand-red tracking-tight block mt-1">
                    {calcResults.weight.toLocaleString()} <span className="text-xl">Kg</span>
                  </span>
                  <span className="text-xs text-zinc-500 font-mono italic block mt-0.5">
                    ≈ {(calcResults.weight / 1000).toFixed(2)} {lang === 'es' ? 'Toneladas Métricas' : 'Metric Tons'}
                  </span>
                </div>

                {/* Estimated Sheet Length */}
                <div>
                  <span className="text-xs text-zinc-400 uppercase tracking-widest block font-display">
                    {t.calcResultLength}
                  </span>
                  <span className={`font-display font-bold text-3xl sm:text-4xl tracking-tight block mt-1 ${darkMode ? 'text-zinc-100' : 'text-zinc-900'
                    }`}>
                    {calcResults.length.toLocaleString()} <span className="text-lg">Meters</span>
                  </span>
                  <span className="text-xs text-zinc-500 font-mono block mt-0.5">
                    ≈ {(calcResults.length * 3.2808).toFixed(1)} Feet of linear steel sheet
                  </span>
                </div>

                {/* Estimated processed base cost */}
                <div>
                  <span className="text-xs text-zinc-400 uppercase tracking-widest block font-display">
                    {t.calcResultPricing}
                  </span>
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-brand-red tracking-wider block mt-1">
                    ${calcResults.cost.toLocaleString()} <span className="text-sm text-zinc-500 font-sans font-light">USD</span>
                  </span>
                  <span className="text-xs text-zinc-500 font-mono block mt-0.5">
                    Includes standard setup fee & edge-slit correction
                  </span>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/60">
              <p className="text-xs text-zinc-500 leading-normal italic">
                🛡️ {t.calcEstimationDisclaimer}
              </p>
              <div className="mt-4">
                <button
                  onClick={() => setActivePage('contact')}
                  className="inline-flex items-center gap-2 font-display text-xs tracking-wider text-brand-red hover:text-brand-red-dark font-bold uppercase transition-colors"
                >
                  {lang === 'es' ? 'CONFIRMAR CARACTERÍSTICAS DE BOBINA →' : 'CONFIRM COIL SPECIFICATIONS WITH CLIENT SERVICES →'}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
