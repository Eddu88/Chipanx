import React from 'react';
import { Layers, TrendingUp, Maximize2 } from 'lucide-react';
import { translations } from '../../types';

interface FeaturesProps {
  lang: 'es' | 'en';
}

export function Features({ lang }: FeaturesProps) {
  const t = translations[lang];

  return (
    <section className="relative py-28 overflow-hidden bg-zinc-950 lg:h-screen lg:overflow-hidden min-h-screen snap-start scroll-mt-20 flex items-center" id="features">

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
          {t.featuresList.map((feat, idx) => {
            return (
              <div key={idx} className="py-12 lg:py-4 lg:px-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center bg-brand-lead-mid mb-6 shadow-md transition-transform duration-300 hover:scale-105">
                  {idx === 0 && <Layers className="text-brand-red" size={24} />}
                  {idx === 1 && <TrendingUp className="text-brand-red" size={24} />}
                  {idx === 2 && <Maximize2 className="text-brand-red" size={24} />}
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-widest mb-4 uppercase">
                  {feat.title}
                </h3>
                <div className="w-8 h-[2px] bg-brand-red mb-4"></div>
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
