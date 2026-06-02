import React from 'react';
import { Flame } from 'lucide-react';
import { translations, PageType } from '../../types';

interface HeroProps {
  lang: 'es' | 'en';
  activeSlide: number;
  setActiveSlide: (index: number) => void;
  setActivePage: (page: PageType) => void;
}

export function Hero({ lang, activeSlide, setActiveSlide, setActivePage }: HeroProps) {
  const t = translations[lang];

  return (
    <section className="relative h-screen overflow-hidden flex items-center bg-brand-lead-mid snap-start scroll-mt-20" id="hero-slider">

      {/* Background Slide Elements */}
      {t.heroSlides.map((slide, idx) => {
        let bgUrl = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1400&q=80'; // molten steel / iron furnace
        if (idx === 1) {
          bgUrl = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1400&q=80'; // modern robotic steel factory line
        } else if (idx === 2) {
          bgUrl = 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=1400&q=80'; // shimmering raw steel/metal sheets
        }

        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeSlide === idx ? 'opacity-40 z-10 scale-100' : 'opacity-0 z-0 scale-105'
              } transform duration-1000`}
            style={{
              backgroundImage: `url('${bgUrl}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              filter: 'contrast(1.15) brightness(0.55) saturate(0.85)'
            }}
          />
        );
      })}

      {/* Ambient Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-lead-mid via-transparent to-brand-lead-mid/70 z-20"></div>
      <div className="absolute inset-0 bg-brand-lead-dark/40 z-20"></div>

      {/* Responsive Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-30">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 mb-4 text-brand-red font-display text-xs sm:text-sm font-bold tracking-[6px] uppercase animate-pulse">
            <Flame size={14} />
            {t.heroEst}
          </span>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-7xl text-white tracking-wider leading-none mb-6">
            {t.heroSlides[activeSlide].title}
          </h1>

          <p className="text-zinc-300 font-display font-semibold text-sm sm:text-lg tracking-widest text-brand-red mb-4 uppercase">
            {t.heroSlides[activeSlide].sub}
          </p>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed mb-8 font-light">
            {t.heroSlides[activeSlide].description}
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setActivePage('services')}
              className="bg-brand-red hover:bg-brand-red-dark text-white font-display text-sm tracking-widest font-bold py-3.5 px-8 rounded-sm shrink-0 uppercase transition-colors"
            >
              {lang === 'es' ? 'EXPLORAR SERVICIOS' : 'EXPLORE SERVICES'}
            </button>
            <button
              onClick={() => setActivePage('calculator')}
              className="border border-zinc-500 hover:border-white text-white hover:bg-white/10 font-display text-sm tracking-widest font-bold py-3.5 px-8 rounded-sm shrink-0 uppercase transition-colors"
            >
              {lang === 'es' ? 'CALCULANTE' : 'CALCULATOR'}
            </button>
          </div>

        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 right-4 sm:right-8 lg:right-12 z-30 flex items-center gap-3">
        {t.heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${activeSlide === idx ? 'w-12 bg-brand-red' : 'w-2 bg-zinc-600 hover:bg-zinc-400'
              }`}
            title={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll down mouse/arrow indicator */}
      <div
        onClick={() => setActivePage('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors cursor-pointer"
      >
        <span className="font-display text-[9px] tracking-[4px] uppercase font-bold text-center">
          {t.heroScroll}
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-zinc-600 relative">
          <div className="w-1 h-2 bg-brand-red rounded-full absolute top-1.5 left-1/2 -translate-x-1/2 animate-bounce"></div>
        </div>
      </div>

    </section>
  );
}
