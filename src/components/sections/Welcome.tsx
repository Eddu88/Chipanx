import React, { useState } from 'react';
import { Download, Target, Eye, Award } from 'lucide-react';
import { translations } from '../../types';
import { motion, AnimatePresence } from 'motion/react';

interface WelcomeProps {
  lang: 'es' | 'en';
  darkMode: boolean;
}

export function Welcome({ lang, darkMode }: WelcomeProps) {
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  const tabs = [
    { id: 'mission', label: lang === 'es' ? 'Misión' : 'Mission', icon: Target },
    { id: 'vision', label: lang === 'es' ? 'Visión' : 'Vision', icon: Eye },
    { id: 'values', label: lang === 'es' ? 'Valores' : 'Values', icon: Award },
  ] as const;

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
                {lang === 'es' ? 'AÑOS DE EXPERIENCIA ININTERRUMPIDA' : 'YEARS OF CONTINUOUS PROCESSING'}
              </p>
              <div className="w-16 h-1 bg-brand-red mb-8"></div>
              <p className="font-display font-bold text-2xl tracking-wider uppercase mb-2">
                PRODIEM
              </p>
              <p className="text-zinc-400 text-xs tracking-widest font-mono">
                PROYECTOS, DISEÑO E INGENIERIA ELECTROMECANICA
              </p>
              <p className="text-zinc-400 text-xs tracking-widest font-mono">
                INTEGRAL SOLUTIONS FOR MINING AND INDUSTRY
              </p>
            </div>

            {/* Download Brochure Button */}
            <div className="mt-8 text-center sm:text-left">
              <a
                href="/assets/brochure-prodiem.pdf"
                download
                className={`inline-flex items-center gap-2.5 font-display text-xs tracking-widest font-bold py-3.5 px-6 rounded-sm uppercase transition-all border cursor-pointer ${
                  darkMode
                    ? 'border-zinc-800 hover:border-white text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800'
                    : 'border-zinc-300 hover:border-zinc-900 text-zinc-650 hover:text-zinc-900 bg-white hover:bg-zinc-100'
                }`}
              >
                <Download size={14} />
                {lang === 'es' ? 'Descargar Brochure' : 'Download Brochure'}
              </a>
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
            </div>

            {/* Mission, Vision & Values Section */}
            <div className="pt-8 space-y-6">
              <div className="flex border-b border-zinc-200 dark:border-zinc-800 gap-4 sm:gap-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="group flex items-center gap-2 pb-4 font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all relative cursor-pointer focus:outline-none"
                    >
                      <Icon size={16} className={`transition-colors ${isActive ? 'text-brand-red' : 'text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300'}`} />
                      <span className={isActive ? (darkMode ? 'text-zinc-100' : 'text-zinc-900') : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}>
                        {tab.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="min-h-[180px] sm:min-h-[140px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`w-full p-6 sm:p-8 border rounded-sm ${
                      darkMode
                        ? 'border-zinc-800/85 bg-zinc-900/10 shadow-inner'
                        : 'border-zinc-200 bg-white shadow-sm'
                    }`}
                  >
                    {activeTab === 'mission' && (
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="p-3 rounded-full bg-brand-red/10 text-brand-red shrink-0">
                          <Target size={24} />
                        </div>
                        <div>
                          <h4 className={`font-display font-bold text-sm uppercase tracking-wider mb-2 ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                            {lang === 'es' ? 'Nuestra Misión' : 'Our Mission'}
                          </h4>
                          <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-400 font-light' : 'text-zinc-650'}`}>
                            {lang === 'es'
                              ? 'Proveer a nuestros clientes un servicio diferenciado con soluciones en primer contacto altamente apoyados por un equipo capacitado, humano, motivado, y orientado a la excelencia operacional.'
                              : 'To provide our clients with a differentiated service with solutions at first contact, highly supported by a trained, humane, motivated team oriented to operational excellence.'}
                          </p>
                        </div>
                      </div>
                    )}

                    {activeTab === 'vision' && (
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="p-3 rounded-full bg-brand-red/10 text-brand-red shrink-0">
                          <Eye size={24} />
                        </div>
                        <div>
                          <h4 className={`font-display font-bold text-sm uppercase tracking-wider mb-2 ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                            {lang === 'es' ? 'Nuestra Visión' : 'Our Vision'}
                          </h4>
                          <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-400 font-light' : 'text-zinc-650'}`}>
                            {lang === 'es'
                              ? 'Ser la mejor opción en el mercado como una empresa líder en ingeniería y servicios con procesos y soluciones que garanticen relaciones a largo plazo con nuestros clientes.'
                              : 'To be the best choice in the market as a leading company in engineering and services with processes and solutions that guarantee long-term relationships with our clients.'}
                          </p>
                        </div>
                      </div>
                    )}

                    {activeTab === 'values' && (
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="p-3 rounded-full bg-brand-red/10 text-brand-red shrink-0">
                          <Award size={24} />
                        </div>
                        <div className="w-full">
                          <h4 className={`font-display font-bold text-sm uppercase tracking-wider mb-3 ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                            {lang === 'es' ? 'Nuestros Valores' : 'Our Values'}
                          </h4>
                          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                            {[
                              { es: 'Integridad', en: 'Integrity' },
                              { es: 'Lealtad', en: 'Loyalty' },
                              { es: 'Innovación', en: 'Innovation' },
                              { es: 'Trabajo en equipo', en: 'Teamwork' },
                              { es: 'Vocación de servicio', en: 'Service Vocation' },
                              { es: 'Responsabilidad', en: 'Responsibility' }
                            ].map((val, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                                <span className={`text-sm ${darkMode ? 'text-zinc-300 font-light' : 'text-zinc-700'}`}>
                                  {lang === 'es' ? val.es : val.en}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
