import React from 'react';
import { Cpu, Hammer, Wrench, Shield } from 'lucide-react';
import { translations, PageType } from '../../types';

interface FeaturesProps {
  lang: 'es' | 'en';
  darkMode: boolean;
  onNavigate?: (page: PageType, sectionId?: string) => void;
}

export function Features({ lang, darkMode, onNavigate }: FeaturesProps) {
  const t = translations[lang];

  return (
    <section className="relative py-20 overflow-hidden bg-zinc-950 lg:h-screen lg:overflow-hidden min-h-screen snap-start scroll-mt-20 flex items-center" id="features">

      {/* Grayscale factory parallax layer */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1400&q=80')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'grayscale(100%) contrast(1.15) brightness(0.3)'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-zinc-950/90 z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full lg:-translate-y-12">

        <div className="text-center max-w-3xl mx-auto mb-25">
          <span className="font-display text-brand-red text-xs sm:text-sm font-extrabold tracking-[6px] uppercase block mb-3">
            {lang === 'es' ? 'NUESTRAS ÁREAS' : 'OUR DEPARTMENTS'}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight mb-4 uppercase text-white">
            {lang === 'es' ? 'LÍNEAS DE SERVICIO' : 'SERVICE LINES'}
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
          {t.featuresList.map((feat, idx) => {
            const sectionIds = ['services-engineering', 'services-fabrication', 'services-electromechanical', 'services-services'];
            const targetSection = sectionIds[idx];

            return (
              <div 
                key={idx} 
                onClick={() => onNavigate?.('services', targetSection)}
                className={`group py-12 lg:py-4 lg:px-10 text-center flex flex-col items-center cursor-pointer transition-all duration-300 rounded-sm ${
                  darkMode ? 'hover:bg-zinc-900/20' : 'hover:bg-zinc-850/20'
                }`}
              >
                <div className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center bg-brand-lead-mid mb-6 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-brand-red group-hover:shadow-lg group-hover:shadow-brand-red/10">
                  {idx === 0 && <Cpu className="text-brand-red" size={24} />}
                  {idx === 1 && <Hammer className="text-brand-red" size={24} />}
                  {idx === 2 && <Wrench className="text-brand-red" size={24} />}
                  {idx === 3 && <Shield className="text-brand-red" size={24} />}
                </div>
                <div className="h-24 flex items-center justify-center w-full mb-2">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-widest uppercase group-hover:text-brand-red transition-colors duration-300">
                    {feat.title}
                  </h3>
                </div>
                <div className="w-8 h-[2px] bg-brand-red mb-4 group-hover:w-20 transition-all duration-300"></div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-xs font-light">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
