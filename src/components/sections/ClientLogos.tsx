import React, { useState, useEffect } from 'react';

// Detailed SVG Logos for the Clients (using w-full h-full so they scale to container)
const VolcanLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M15,75 L38,30 L52,55 L70,25 L85,75 Z" fill="none" stroke="#27272a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38,30 L52,55 L70,25" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <text x="50%" y="92%" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fontWeight="extrabold" fill="#27272a">VOLCAN</text>
  </svg>
);

const PaltarumiLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <polygon points="50,15 82,48 50,81 18,48" fill="#f59e0b" />
    <polygon points="50,28 68,48 50,68 32,48" fill="#fbbf24" />
    <text x="50%" y="93%" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fontWeight="extrabold" fill="#27272a">PALTARUMI</text>
  </svg>
);

const TomaLaManoLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="40" r="26" fill="none" stroke="#1d4ed8" strokeWidth="3" />
    <path d="M35,40 Q50,30 65,40 Q50,50 35,40" fill="none" stroke="#ef4444" strokeWidth="3" />
    <text x="50%" y="82%" textAnchor="middle" fontSize="7" fontFamily="sans-serif" fontWeight="extrabold" fill="#27272a">TOMA LA MANO</text>
    <text x="50%" y="93%" textAnchor="middle" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold" fill="#71717a">MINERA</text>
  </svg>
);

const AngloAmericanLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M22,48 L42,25 L62,48 L42,71 Z" fill="#0f172a" />
    <path d="M42,48 L62,25 L82,48 L62,71 Z" fill="#3b82f6" opacity="0.85" />
    <text x="50%" y="87%" textAnchor="middle" fontSize="7" fontFamily="sans-serif" fontWeight="extrabold" fill="#27272a">ANGLO</text>
    <text x="50%" y="96%" textAnchor="middle" fontSize="6.5" fontFamily="sans-serif" fontWeight="extrabold" fill="#3b82f6">AMERICAN</text>
  </svg>
);

const PunaMiningLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M22,70 L50,28 L78,70" fill="none" stroke="#0f172a" strokeWidth="5.5" strokeLinejoin="round" />
    <path d="M38,50 Q50,35 62,50" fill="none" stroke="#f97316" strokeWidth="5.5" strokeLinecap="round" />
    <text x="50%" y="84%" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" fontWeight="extrabold" fill="#27272a">PUNA MINING</text>
    <text x="50%" y="94%" textAnchor="middle" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold" fill="#f97316">L I T H I U M</text>
  </svg>
);

const CopperfieldLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <polygon points="50,18 80,72 20,72" fill="#b45309" />
    <polygon points="50,33 70,67 30,67" fill="#d97706" />
    <text x="50%" y="87%" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" fontWeight="extrabold" fill="#27272a">COPPERFIELD</text>
  </svg>
);

const AndritzLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <text x="50%" y="50%" textAnchor="middle" fontSize="16" fontFamily="sans-serif" fontWeight="black" fill="#1e40af" letterSpacing="-0.5">ANDRITZ</text>
    <rect x="18" y="60" width="64" height="4" fill="#3b82f6" />
  </svg>
);

const MineraTresSolesLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="36" cy="42" r="14" fill="#f59e0b" opacity="0.8" />
    <circle cx="64" cy="42" r="14" fill="#d97706" opacity="0.8" />
    <circle cx="50" cy="54" r="14" fill="#ef4444" opacity="0.9" />
    <text x="50%" y="85%" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" fontWeight="extrabold" fill="#27272a">TRES SOLES</text>
    <text x="50%" y="95%" textAnchor="middle" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold" fill="#71717a">MINERA</text>
  </svg>
);

const SimbiosisLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <polygon points="50,15 80,70 20,70" fill="none" stroke="#047857" strokeWidth="4" />
    <circle cx="50" cy="50" r="11" fill="#059669" />
    <text x="50%" y="87%" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" fontWeight="extrabold" fill="#27272a">SIMBIOSIS</text>
    <text x="50%" y="96%" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fontWeight="bold" fill="#71717a">S.A.C.</text>
  </svg>
);

export const CLIENT_LOGOS = [
  { name: 'Volcan', component: VolcanLogo },
  { name: 'Paltarumi', component: PaltarumiLogo },
  { name: 'Toma La Mano', component: TomaLaManoLogo },
  { name: 'Anglo American', component: AngloAmericanLogo },
  { name: 'Puna Mining', component: PunaMiningLogo },
  { name: 'Copperfield', component: CopperfieldLogo },
  { name: 'Andritz', component: AndritzLogo },
  { name: 'Tres Soles', component: MineraTresSolesLogo },
  { name: 'Simbiosis', component: SimbiosisLogo },
];

interface ClientLogosProps {
  lang: 'es' | 'en';
  darkMode: boolean;
}

export function ClientLogos({ lang, darkMode }: ClientLogosProps) {
  // Set initial active index to 4 (Puna Mining is the center logo in the reference)
  const [activeIndex, setActiveIndex] = useState(4);

  // Autoplay effect to advance slide every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CLIENT_LOGOS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Get visible slice of 9 elements centered at activeIndex (wrapping around)
  const getVisibleLogos = () => {
    const total = CLIENT_LOGOS.length;
    const indices = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
    return indices.map((offset) => {
      const idx = (activeIndex + offset + total) % total;
      return {
        ...CLIENT_LOGOS[idx],
        isCenter: offset === 0,
        offset: offset,
      };
    });
  };

  const visibleLogos = getVisibleLogos();

  return (
    <section id="client-logos" className={`transition-theme lg:h-screen lg:overflow-hidden min-h-screen snap-start scroll-mt-20 flex items-center border-b ${
      darkMode 
        ? 'bg-zinc-950 border-zinc-900 text-white' 
        : 'bg-zinc-50 border-zinc-200 text-zinc-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-20 lg:-translate-y-16">
        
        {/* Title Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className={`font-display font-extrabold text-3xl sm:text-4xl tracking-tight mb-4 uppercase ${
            darkMode ? 'text-zinc-100' : 'text-zinc-900'
          }`}>
            {lang === 'es' ? 'Nuestros Clientes' : 'Our Clients'}
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className={`text-sm sm:text-base ${
            darkMode ? 'text-zinc-400 font-light' : 'text-zinc-650'
          }`}>
            {lang === 'es' 
              ? 'Estos son algunos de las empresas que confiaron en nosotros.' 
              : 'These are some of the companies that trusted us.'
            }
          </p>
        </div>

        {/* Carousel Row (Increased height to prevent clipping of larger items) */}
        <div className="relative w-full flex items-center justify-center h-56 md:h-64 overflow-hidden">
          
          {/* Subtle horizontal track line connecting the logos visually */}
          <div className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] -z-10 w-[75%] mx-auto ${
            darkMode ? 'bg-zinc-800/60' : 'bg-zinc-300/80'
          }`}></div>

          <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-8 lg:gap-10">
            {visibleLogos.map((logo, index) => {
              const LogoComp = logo.component;
              const isMobileHidden = Math.abs(logo.offset) > 2; // Hide outer items on smaller screens
              const isTabletHidden = Math.abs(logo.offset) > 3;

              return (
                <div
                  key={`${logo.name}-${index}`}
                  onClick={() => {
                    if (logo.offset !== 0) {
                      setActiveIndex((activeIndex + logo.offset + CLIENT_LOGOS.length) % CLIENT_LOGOS.length);
                    }
                  }}
                  className={`
                    relative rounded-full flex items-center justify-center bg-white transition-all duration-500 cursor-pointer select-none
                    ${isMobileHidden ? 'hidden md:flex' : 'flex'}
                    ${isTabletHidden ? 'hidden lg:flex' : 'flex'}
                    ${
                      logo.isCenter
                        ? 'w-36 h-36 sm:w-48 sm:h-48 border-4 border-brand-red shadow-2xl scale-110 z-10 p-3 sm:p-4'
                        : 'w-24 h-24 sm:w-36 sm:h-36 border border-zinc-200/80 shadow-md opacity-50 hover:opacity-85 scale-90 p-2 sm:p-3'
                    }
                  `}
                >
                  {/* Glowing background aura for the active center logo */}
                  {logo.isCenter && (
                    <div className="absolute inset-0 bg-brand-red/10 blur-2xl rounded-full scale-125 -z-10 animate-pulse"></div>
                  )}
                  <LogoComp />
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots (Replaces the text buttons to fill space elegantly) */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {CLIENT_LOGOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                activeIndex === idx 
                  ? 'w-8 bg-brand-red' 
                  : darkMode 
                    ? 'w-2.5 bg-zinc-800 hover:bg-zinc-700' 
                    : 'w-2.5 bg-zinc-300 hover:bg-zinc-400'
              }`}
              title={`Ver cliente ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
