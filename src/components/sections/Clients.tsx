import React from 'react';
import { translations, PageType } from '../../types';

interface ClientsProps {
  lang: 'es' | 'en';
  darkMode: boolean;
  setActivePage: (page: PageType) => void;
}

export function Clients({ lang, darkMode, setActivePage }: ClientsProps) {
  const t = translations[lang];

  return (
    <section className={`py-24 border-t transition-theme lg:h-screen lg:overflow-hidden min-h-screen snap-start scroll-mt-20 flex items-center ${
      darkMode ? 'bg-brand-lead-mid/50 border-brand-lead-dark text-white' : 'bg-zinc-100 border-zinc-200 text-zinc-900'
    }`} id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-brand-red text-xs sm:text-sm font-extrabold tracking-[6px] uppercase block mb-3 animate-pulse">
            {t.clientsTitle}
          </span>
          <h2 className={`font-display font-extrabold text-3xl sm:text-4xl tracking-tight mb-4 uppercase ${
            darkMode ? 'text-zinc-100' : 'text-zinc-900'
          }`}>
            {t.clientsSubheading}
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className={`text-sm sm:text-base leading-relaxed ${
            darkMode ? 'text-zinc-400' : 'text-zinc-650'
          }`}>
            {t.clientsDesc}
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {t.clientsList.map((client, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-sm border transition-all duration-300 hover:shadow-md flex flex-col justify-between ${
                darkMode
                  ? 'bg-brand-lead-dark/65 border-zinc-800 hover:border-zinc-700 text-zinc-100'
                  : 'bg-white border-zinc-200 hover:border-zinc-350 text-zinc-900'
              }`}
            >
              <div>
                <div className="flex items-center gap-1 text-brand-red mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>
                <p className={`text-sm italic leading-relaxed mb-6 font-light ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-650'
                }`}>
                  "{client.quote}"
                </p>
              </div>
              <div>
                <div className="w-8 h-[2px] bg-brand-red mb-3"></div>
                <h4 className="font-display font-bold text-base tracking-wider uppercase text-brand-red">
                  {client.company}
                </h4>
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block mt-0.5">
                  {client.industry}
                </span>
                <span className="text-xs font-semibold text-zinc-400 block mt-2">
                  {client.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Portal Callout */}
        <div className={`p-8 sm:p-12 border rounded-sm transition-theme flex flex-col lg:flex-row items-center justify-between gap-8 ${
          darkMode
            ? 'bg-brand-lead-dark border-zinc-800 text-zinc-100'
            : 'bg-zinc-200/70 border-zinc-300 text-zinc-900'
        }`}>
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wider text-brand-red mb-3">
              {t.clientsPortalTitle}
            </h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-455 font-light' : 'text-zinc-655'}`}>
              {t.clientsPortalDesc}
            </p>
          </div>
          <button
            onClick={() => setActivePage('contact')}
            className="bg-brand-red hover:bg-brand-red-dark text-white font-display text-sm tracking-widest font-bold py-3.5 px-8 rounded-sm uppercase transition-colors shrink-0 shadow-md hover:shadow-brand-red/10"
          >
            {t.clientsPortalBtn}
          </button>
        </div>

      </div>
    </section>
  );
}
