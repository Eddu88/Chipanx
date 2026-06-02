import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { translations } from '../../types';

interface ServicesProps {
  lang: 'es' | 'en';
  darkMode: boolean;
  setSelectedService: (id: string | null) => void;
}

export function Services({ lang, darkMode, setSelectedService }: ServicesProps) {
  const t = translations[lang];

  return (
    <section className="py-24 transition-theme min-h-screen overflow-y-auto snap-start scroll-mt-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-display text-brand-red text-xs sm:text-sm font-extrabold tracking-[6px] uppercase block mb-3">
            {t.servicesLabel}
          </span>
          <h2 className={`font-display font-extrabold text-3xl sm:text-4xl tracking-tight mb-4 uppercase ${darkMode ? 'text-white' : 'text-zinc-900'
            }`}>
            {lang === 'es' ? 'COMERCIO DE METALES Y MINERALES SERVICIOS' : 'METALS & MINERALS TRADING SERVICES'}
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="font-display text-sm sm:text-base font-semibold tracking-widest text-brand-red uppercase mb-3">
            {t.servicesSubheading}
          </p>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-650'
            }`}>
            {t.servicesDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.servicesList.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedService(service.id)}
              className="relative h-[320px] overflow-hidden group rounded-sm border border-zinc-800 transition-all duration-300 cursor-pointer flex flex-col justify-between p-6 sm:p-8"
            >
              {/* Background Image of Card with Grayscale/Dark filter overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('${service.image}')`,
                  filter: 'grayscale(30%) brightness(0.95)'
                }}
              />

              {/* Dark 60% overlay that lightens up to 45% on hover */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-colors duration-500 z-10" />

              {/* Relative Card Content */}
              <div className="relative z-20 h-full flex flex-col justify-between">
                <div className="text-center flex flex-col items-center">
                  <span className="block font-display text-xs tracking-widest font-semibold text-cyan-400 uppercase mb-2">
                    {lang === 'es' ? 'Servicio' : 'Service'} {service.id}
                  </span>
                  <h3 className="font-display font-black text-base sm:text-lg text-white tracking-wider uppercase mb-3 text-center px-1">
                    {service.name}
                  </h3>

                  {/* Delicate horizontal accent line (turquoise/azul) */}
                  <div className="w-12 h-[2px] bg-cyan-400 group-hover:w-20 transition-all duration-300 mb-4" />

                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mt-2 text-center select-none line-clamp-3">
                    {service.desc}
                  </p>
                </div>

                <div className="flex justify-end w-full mt-auto">
                  <span className="font-display text-xs tracking-wider font-extrabold text-white group-hover:text-cyan-400 transition-colors uppercase inline-flex items-center gap-1.5">
                    {t.btnMore} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
