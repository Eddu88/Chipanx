import React from 'react';
import { translations } from '../../types';

interface WelcomeProps {
  lang: 'es' | 'en';
  darkMode: boolean;
}

export function Welcome({ lang, darkMode }: WelcomeProps) {
  const t = translations[lang];

  return (
    <section className="py-24 transition-theme lg:h-screen lg:overflow-hidden min-h-screen snap-start scroll-mt-20 flex items-center" id="welcome">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Visual banner column */}
          <div className="lg:col-span-5 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-red translate-x-4 translate-y-4 rounded-sm -z-10 opacity-80"></div>
            <div className="bg-brand-lead-mid p-8 sm:p-12 border border-zinc-800 text-white rounded-sm shadow-xl">
              <span className="block font-display text-brand-red text-6xl sm:text-7xl font-extrabold tracking-tighter leading-none mb-3">
                10+
              </span>
              <p className="font-display text-sm tracking-[4px] uppercase text-zinc-400 font-bold mb-8">
                {lang === 'es' ? 'AÑOS DE MAQUILA ININTERRUMPIDA' : 'YEARS OF CONTINUOUS PROCESSING'}
              </p>
              <div className="w-16 h-1 bg-brand-red mb-8"></div>
              <p className="font-display font-bold text-2xl tracking-wider uppercase mb-2">
                PRODIEM
              </p>
              <p className="text-zinc-400 text-xs tracking-widest font-mono">
                TOLL METALLURGIC CORP.
              </p>
            </div>

            {/* Decorative block */}
            <div className="mt-8 border-l-4 border-brand-red pl-4">
              <p className="text-xs italic text-zinc-500">
                "Precision is not just a standard of error; it represents PRODIEM's dedication to building steel components that shield structural operations worldwide."
              </p>
            </div>
          </div>

          {/* Translation Text column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-display text-brand-red text-xs sm:text-sm font-extrabold tracking-[6px] uppercase block">
              {t.welcomeLabel} {t.welcomeSub}
            </span>

            <h2 className={`font-display font-bold text-3xl sm:text-5xl tracking-tight leading-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-900'
              }`}>
              {t.welcomeTitle}
            </h2>

            <div className="w-16 h-1 bg-brand-red"></div>

            <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400 font-light' : 'text-zinc-650'
              }`}>
              <p>{t.welcomeText1}</p>
              <p>{t.welcomeText2}</p>
            </div>

            {/* Quick stats elements */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className={`p-4 border rounded ${darkMode ? 'border-zinc-800 bg-zinc-900/40' : 'border-zinc-200 bg-zinc-100/60'
                }`}>
                <span className="block font-display font-bold text-xl sm:text-2xl text-brand-red">300+</span>
                <span className="text-[10px] sm:text-xs text-zinc-400 tracking-wider font-semibold uppercase font-display block mt-1">
                  {lang === 'es' ? 'Clientes Fortune 500' : 'Fortune 500 Clients'}
                </span>
              </div>
              <div className={`p-4 border rounded ${darkMode ? 'border-zinc-800 bg-zinc-900/40' : 'border-zinc-200 bg-zinc-100/60'
                }`}>
                <span className="block font-display font-bold text-xl sm:text-2xl text-brand-red">1.5M+</span>
                <span className="text-[10px] sm:text-xs text-zinc-400 tracking-wider font-semibold uppercase font-display block mt-1">
                  {lang === 'es' ? 'Tons Anuales Costo-Eficaces' : 'Annual Cost-Effective Tons'}
                </span>
              </div>
              <div className={`p-4 border rounded ${darkMode ? 'border-zinc-800 bg-zinc-900/40' : 'border-zinc-200 bg-zinc-100/60'
                }`}>
                <span className="block font-display font-bold text-xl sm:text-2xl text-brand-red">0.2mm</span>
                <span className="text-[10px] sm:text-xs text-zinc-400 tracking-wider font-semibold uppercase font-display block mt-1">
                  {lang === 'es' ? 'Tolerancia Extrema Slit' : 'Slit Sharp Tolerance'}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
