import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, PageType } from '../../types';
import { CLIENT_LOGOS } from './ClientLogos';
import { ShieldCheck, Quote, Users, ArrowRight } from 'lucide-react';

// Custom SVG logos for the testimonial companies to match the style
const AntaminaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M15,70 L35,40 L55,60 L75,30 L90,70 Z" fill="none" stroke="#27272a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M35,40 L55,60 L75,30" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="75" cy="30" r="4.5" fill="#ef4444" />
    <text x="50%" y="90%" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fontWeight="black" fill="#27272a">ANTAMINA</text>
  </svg>
);

const CerroVerdeLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M20,70 Q50,30 80,70" fill="none" stroke="#27272a" strokeWidth="4" />
    <path d="M35,70 Q50,45 65,70" fill="none" stroke="#ef4444" strokeWidth="3" />
    <text x="50%" y="90%" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fontWeight="black" fill="#27272a">CERRO VERDE</text>
  </svg>
);

const CajamarquillaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="25" y="30" width="12" height="40" fill="none" stroke="#27272a" strokeWidth="3" />
    <rect x="44" y="20" width="12" height="50" fill="none" stroke="#ef4444" strokeWidth="3" />
    <rect x="63" y="35" width="12" height="35" fill="none" stroke="#27272a" strokeWidth="3" />
    <text x="50%" y="90%" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fontWeight="black" fill="#27272a">TRES SOLES</text>
  </svg>
);

interface ClientsProps {
  lang: 'es' | 'en';
  darkMode: boolean;
  setActivePage: (page: PageType) => void;
}

export function Clients({ lang, darkMode, setActivePage }: ClientsProps) {
  const t = translations[lang];
  const [activeClientId, setActiveClientId] = useState('antamina');

  // Unified list of clients containing both testimonials and project cases mapped to SVG logos
  const ALL_CLIENTS = [
    {
      id: 'antamina',
      name: 'Compañía Minera Antamina',
      industry: { es: 'Minería de Cobre y Zinc', en: 'Copper & Zinc Mining' },
      logo: AntaminaLogo,
      type: 'testimonial',
      quote: {
        es: 'El servicio de reconstrucción de tolvas y soldadura especializada de PRODIEM ha duplicado la vida útil de nuestros componentes de acarreo en el tajo abierto.',
        en: 'PRODIEM\'s hopper rebuilding and specialized welding services have doubled the lifespan of our hauling components in the open pit.'
      },
      author: {
        es: 'Ing. Roberto Quispe, Superintendente de Mantenimiento',
        en: 'Roberto Quispe, Maintenance Superintendent'
      }
    },
    {
      id: 'cerroverde',
      name: 'Sociedad Minera Cerro Verde',
      industry: { es: 'Minería de Cobre', en: 'Copper Mining' },
      logo: CerroVerdeLogo,
      type: 'testimonial',
      quote: {
        es: 'La calibración metrológica y mantenimiento preventivo de nuestras balanzas industriales garantiza la precisión de nuestros despachos de concentrado. Excelente soporte.',
        en: 'The metrological calibration and preventive maintenance of our industrial scales ensure the precision of our concentrate shipments. Excellent support.'
      },
      author: {
        es: 'Ing. Miguel Valdivia, Jefe de Instrumentación',
        en: 'Miguel Valdivia, Instrumentation Lead'
      }
    },
    {
      id: 'cajamarquilla',
      name: 'Refinería de Cajamarquilla',
      industry: { es: 'Metalurgia del Zinc', en: 'Zinc Metallurgy' },
      logo: CajamarquillaLogo,
      type: 'testimonial',
      quote: {
        es: 'Confiamos en PRODIEM para la fabricación de spools y el montaje de estructuras en nuestras paradas de planta. Su compromiso con la seguridad es de clase mundial.',
        en: 'We rely on PRODIEM for spool fabrication and structural assembly during our plant shutdowns. Their safety commitment is world-class.'
      },
      author: {
        es: 'Ing. Sandra Beltrán, Gerente de Proyectos',
        en: 'Sandra Beltrán, Projects Manager'
      }
    },
    {
      id: 'volcan',
      name: 'Volcan Compañía Minera',
      industry: { es: 'Minería de Zinc, Plomo y Plata', en: 'Zinc, Lead & Silver Mining' },
      logo: CLIENT_LOGOS[0].component,
      type: 'project',
      projectDesc: {
        es: 'Desarrollo de servicios metalmecánicos especializados, overhaul de chutes y plataformas de acceso para la planta concentradora, garantizando continuidad operacional.',
        en: 'Development of specialized metal-mechanic services, chute overhauls, and access platforms for the concentrator plant, ensuring operational continuity.'
      },
      services: {
        es: ['Overhaul de Chutes', 'Plataformas de Acceso', 'Soldadura Estructural AWS'],
        en: ['Chute Overhaul', 'Access Platforms', 'AWS Structural Welding']
      }
    },
    {
      id: 'paltarumi',
      name: 'Consorcio Minero Paltarumi',
      industry: { es: 'Minería Aurífera', en: 'Gold Mining' },
      logo: CLIENT_LOGOS[1].component,
      type: 'project',
      projectDesc: {
        es: 'Mantenimiento mecánico preventivo e inspección de soldaduras mediante ensayos no destructivos (NDT) en las líneas de molienda y chancado primario.',
        en: 'Preventive mechanical maintenance and weld inspection using non-destructive testing (NDT) in the grinding and primary crushing lines.'
      },
      services: {
        es: ['Ensayos No Destructivos (PND)', 'Soporte de Parada de Planta', 'Alineamiento Mecánico'],
        en: ['Non-Destructive Testing (NDT)', 'Plant Shutdown Support', 'Mechanical Alignment']
      }
    },
    {
      id: 'tomalamano',
      name: 'Minera Toma La Mano',
      industry: { es: 'Extracción de Minerales Metálicos', en: 'Metallic Minerals Mining' },
      logo: CLIENT_LOGOS[2].component,
      type: 'project',
      projectDesc: {
        es: 'Fabricación integral de spools de tuberías de alta presión en acero al carbono e instalación in-situ de sistemas hidráulicos de control.',
        en: 'Comprehensive fabrication of carbon steel high-pressure pipe spools and on-site installation of hydraulic control systems.'
      },
      services: {
        es: ['Fabricación de Spools', 'Tuberías de Alta Presión', 'Sistemas Hidráulicos'],
        en: ['Spool Fabrication', 'High-Pressure Piping', 'Hydraulic Systems']
      }
    },
    {
      id: 'angloamerican',
      name: 'Anglo American Quellaveco',
      industry: { es: 'Minería de Cobre', en: 'Copper Mining' },
      logo: CLIENT_LOGOS[3].component,
      type: 'project',
      projectDesc: {
        es: 'Inspecciones periódicas de calibración de balanzas de faja y soporte electromecánico auxiliar en el área de filtrado y despacho de concentrados.',
        en: 'Periodic calibration inspections of belt scales and auxiliary electromechanical support in the filtering and concentrate shipment area.'
      },
      services: {
        es: ['Calibración de Balanzas', 'Soporte Electromecánico', 'Área de Filtrado'],
        en: ['Scale Calibration', 'Electromechanical Support', 'Filter Area Support']
      }
    },
    {
      id: 'punamining',
      name: 'Puna Mining',
      industry: { es: 'Procesamiento de Litio', en: 'Lithium Processing' },
      logo: CLIENT_LOGOS[4].component,
      type: 'project',
      projectDesc: {
        es: 'Diseño estructural y fabricación de reactores químicos y tanques de almacenamiento en acero inoxidable para la planta de carbonato de litio.',
        en: 'Structural design and fabrication of chemical reactors and stainless steel storage tanks for the lithium carbonate plant.'
      },
      services: {
        es: ['Reactores de Acero Inoxidable', 'Diseño Estructural CAD', 'Tanques de Proceso'],
        en: ['Stainless Steel Reactors', 'CAD Structural Design', 'Process Tanks']
      }
    },
    {
      id: 'simbiosis',
      name: 'Simbiosis S.A.C.',
      industry: { es: 'Servicios Industriales y Ambientales', en: 'Industrial & Environmental Services' },
      logo: CLIENT_LOGOS[8].component,
      type: 'project',
      projectDesc: {
        es: 'Corte CNC de planchas de desgaste y fabricación de liners metálicos personalizados para tolvas y chutes receptores sometidos a alta abrasión.',
        en: 'CNC cutting of wear plates and fabrication of custom metallic liners for hoppers and receiving chutes subjected to high abrasion.'
      },
      services: {
        es: ['Corte CNC por Plasma', 'Fabricación de Liners', 'Sistemas Antiabrasivos'],
        en: ['CNC Plasma Cutting', 'Liner Fabrication', 'Anti-Abrasive Systems']
      }
    }
  ];

  return (
    <section className={`py-24 border-t transition-theme lg:h-screen lg:overflow-hidden min-h-screen snap-start scroll-mt-20 flex items-center ${
      darkMode ? 'bg-brand-lead-mid/50 border-brand-lead-dark text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900'
    }`} id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center gap-8 lg:gap-12 h-full">

        {/* Header Block */}
        <div className="text-center md:text-left">
          <span className="font-display text-brand-red text-xs sm:text-sm font-extrabold tracking-[6px] uppercase block mb-3">
            {t.clientsTitle}
          </span>
          <h2 className={`font-display font-extrabold text-3xl sm:text-5xl tracking-tight mb-4 uppercase ${
            darkMode ? 'text-zinc-100' : 'text-zinc-900'
          }`}>
            {t.clientsSubheading}
          </h2>
          <div className="w-16 h-1 bg-brand-red mb-4 md:mx-0 mx-auto"></div>
          <p className={`text-sm sm:text-base lg:text-lg max-w-4xl leading-relaxed ${
            darkMode ? 'text-zinc-400 font-light' : 'text-zinc-650'
          }`}>
            {t.clientsDesc}
          </p>
        </div>

        {/* Enlarged Main Display Area (50/50 Split Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Enlarged Organic Bubble Constellation of Logos */}
          <div className="lg:col-span-6 flex flex-wrap justify-center lg:grid lg:grid-cols-3 gap-6 sm:gap-8 py-4 max-w-2xl mx-auto w-full order-2 lg:order-1">
            {ALL_CLIENTS.map((client) => {
              const Logo = client.logo;
              const isActive = activeClientId === client.id;
              return (
                <button
                  key={client.id}
                  onClick={() => setActiveClientId(client.id)}
                  className={`
                    relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center p-4 sm:p-5 transition-all duration-300 cursor-pointer select-none focus:outline-none outline-none border
                    ${
                      isActive
                        ? 'border-brand-red bg-white dark:bg-white scale-110 shadow-xl shadow-brand-red/15 z-10'
                        : darkMode
                          ? 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:scale-105 hover:bg-zinc-900/80 opacity-70 hover:opacity-100'
                          : 'border-zinc-200 bg-white/70 hover:border-zinc-350 hover:scale-105 hover:bg-white opacity-70 hover:opacity-100'
                    }
                  `}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-brand-red/5 rounded-full scale-125 -z-10 animate-pulse" />
                  )}
                  <div className="w-full h-full flex items-center justify-center overflow-hidden">
                    <Logo />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Showcase Card (Enlarged and Tall) */}
          <div className="lg:col-span-6 w-full min-h-[440px] flex items-stretch order-1 lg:order-2">
            <AnimatePresence mode="wait">
              {(() => {
                const client = ALL_CLIENTS.find((c) => c.id === activeClientId) || ALL_CLIENTS[0];
                const authorText = client.type === 'testimonial' ? (lang === 'es' ? client.author?.es : client.author?.en) : '';
                const commaIdx = authorText ? authorText.indexOf(',') : -1;
                const authorName = commaIdx !== -1 ? authorText?.substring(0, commaIdx) : authorText;
                const authorRole = commaIdx !== -1 ? authorText?.substring(commaIdx + 1).trim() : '';

                return (
                  <motion.div
                    key={client.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className={`w-full p-8 sm:p-12 border rounded-sm flex flex-col justify-between relative overflow-hidden ${
                      darkMode
                        ? 'bg-zinc-900/20 border-zinc-800 text-zinc-100 shadow-inner'
                        : 'bg-white border-zinc-200 text-zinc-900 shadow-md shadow-zinc-250/20'
                    }`}
                  >
                    {/* Left Brand Red border strip */}
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red" />
                    
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div>
                          <span className="text-[11px] tracking-[4px] uppercase font-bold text-brand-red font-mono">
                            {lang === 'es' ? client.industry.es : client.industry.en}
                          </span>
                          <h3 className={`font-display font-extrabold text-2xl sm:text-3xl uppercase mt-1.5 tracking-wide ${
                            darkMode ? 'text-zinc-100' : 'text-zinc-900'
                          }`}>
                            {client.name}
                          </h3>
                        </div>
                        
                        <div className="inline-flex items-center gap-1.5 shrink-0 px-3.5 py-2 rounded-full bg-brand-red/10 text-brand-red font-mono text-[9px] uppercase tracking-wider font-extrabold self-start sm:self-center">
                          <ShieldCheck size={12} />
                          {lang === 'es' ? 'Socio Activo' : 'Active Partner'}
                        </div>
                      </div>

                      {client.type === 'testimonial' ? (
                        <div className="relative">
                          <Quote size={48} className="text-brand-red/15 absolute -left-2 -top-6 -z-10" />
                          <p className={`text-base sm:text-lg lg:text-xl italic leading-relaxed font-light mb-8 relative z-10 ${
                            darkMode ? 'text-zinc-200' : 'text-zinc-750'
                          }`}>
                            "{lang === 'es' ? client.quote?.es : client.quote?.en}"
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className={`text-sm sm:text-base lg:text-lg leading-relaxed mb-6 font-light ${
                            darkMode ? 'text-zinc-300' : 'text-zinc-655'
                          }`}>
                            {lang === 'es' ? client.projectDesc?.es : client.projectDesc?.en}
                          </p>
                          
                          <div className="mb-8">
                            <span className={`text-[10px] font-mono tracking-wider uppercase block mb-3 ${
                              darkMode ? 'text-zinc-500' : 'text-zinc-400'
                            }`}>
                              {lang === 'es' ? 'Servicios Provistos:' : 'Services Rendered:'}
                            </span>
                            <div className="flex flex-wrap gap-2.5">
                              {(lang === 'es' ? client.services?.es : client.services?.en)?.map((serv, index) => (
                                <span
                                  key={index}
                                  className={`text-[11px] px-3.5 py-1.5 border rounded-full font-medium tracking-wide uppercase ${
                                    darkMode
                                      ? 'bg-zinc-950/60 border-zinc-800 text-zinc-300'
                                      : 'bg-zinc-50 border-zinc-200 text-zinc-600'
                                  }`}
                                >
                                  {serv}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-6 border-t border-zinc-200/50 dark:border-zinc-800/80 flex items-center justify-between">
                      {client.type === 'testimonial' ? (
                        <div>
                          <h5 className={`text-sm sm:text-base font-bold uppercase tracking-wider ${
                            darkMode ? 'text-zinc-300' : 'text-zinc-800'
                          }`}>
                            {authorName}
                          </h5>
                          <span className="text-xs text-zinc-500 block mt-0.5">
                            {authorRole}
                          </span>
                        </div>
                      ) : (
                        <div>
                          <h5 className={`text-sm sm:text-base font-bold uppercase tracking-wider ${
                            darkMode ? 'text-zinc-300' : 'text-zinc-800'
                          }`}>
                            PRODIEM PERÚ
                          </h5>
                          <span className="text-xs text-zinc-500 block mt-0.5">
                            {lang === 'es' ? 'Ingeniería y Mantenimiento' : 'Engineering & Maintenance'}
                          </span>
                        </div>
                      )}
                      
                      <div className="flex gap-1 text-brand-red text-sm">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
