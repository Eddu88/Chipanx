import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Hammer, Wrench, Shield } from 'lucide-react';
import { translations } from '../../types';

interface ServicesProps {
  lang: 'es' | 'en';
  darkMode: boolean;
  setSelectedService: (id: string | null) => void;
}

export function Services({ lang, darkMode, setSelectedService }: ServicesProps) {
  const t = translations[lang];

  const departments = [
    {
      id: 'engineering',
      title: lang === 'es' ? 'Ingeniería' : 'Engineering',
      desc: lang === 'es' 
        ? 'Desarrollo de proyectos de ingeniería, modelado 3D, calibraciones certificadas y ensayos no destructivos para garantizar la precisión y viabilidad de cada componente.'
        : 'Development of engineering projects, 3D modeling, certified calibrations, and non-destructive testing to ensure precision and feasibility of every component.',
      icon: Cpu,
      serviceIds: ['06', '07', '03']
    },
    {
      id: 'fabrication',
      title: lang === 'es' ? 'Fabricaciones de Placas y Medios Filtrantes' : 'Fabrication of Plates & Filtration Media',
      desc: lang === 'es'
        ? 'Manufactura de estructuras metálicas de gran envergadura, spools de tuberías, corte CNC y sistemas de filtración de alta resistencia mecánica.'
        : 'Manufacturing of large-scale metallic structures, piping spools, CNC cutting, and high mechanical resistance filtration systems.',
      icon: Hammer,
      serviceIds: ['01', '09', '11']
    },
    {
      id: 'electromechanical',
      title: lang === 'es' ? 'Servicios Electromecánicos' : 'Electromechanical Services',
      desc: lang === 'es'
        ? 'Mantenimiento preventivo, reparación y montaje integral de componentes mecánicos, hidráulicos y eléctricos en planta concentradora y campo.'
        : 'Preventive maintenance, repair, and comprehensive assembly of mechanical, hydraulic, and electrical components in concentrator plants and field.',
      icon: Wrench,
      serviceIds: ['02', '08', '12']
    },
    {
      id: 'services',
      title: lang === 'es' ? 'Área de Servicios' : 'Service Area',
      desc: lang === 'es'
        ? 'Soporte técnico especializado directo, soldadura homologada AWS, recubrimientos protectores y mecanizado de precisión in-situ.'
        : 'Direct specialized technical support, AWS certified welding, protective coatings, and on-site precision machining.',
      icon: Shield,
      serviceIds: ['04', '05', '10']
    }
  ];

  return (
    <>
      {departments.map((dept, index) => {
        const Icon = dept.icon;
        const deptServices = dept.serviceIds
          .map((id) => t.servicesList.find((s) => s.id === id))
          .filter(Boolean);

        return (
          <section 
            key={dept.id} 
            id={`services-${dept.id}`}
            className={`py-24 lg:py-0 transition-theme lg:h-screen lg:overflow-hidden min-h-screen snap-start scroll-mt-20 flex items-center relative ${
              darkMode 
                ? 'bg-zinc-950 text-white' 
                : 'bg-zinc-50 text-zinc-900'
            } ${
              index > 0 ? 'border-t border-zinc-200/50 dark:border-zinc-800/40' : ''
            }`}
          >
            {/* Ambient blur circle decor background */}
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-red/[0.03] rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center gap-10 lg:gap-16 relative z-10">
              
              {/* If it is the first section, render the page main title header */}
              {index === 0 && (
                <div className="text-center md:text-left mb-2">
                  <span className="font-display text-brand-red text-xs sm:text-sm font-extrabold tracking-[6px] uppercase block mb-2">
                    {t.servicesLabel}
                  </span>
                  <h2 className={`font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-3 uppercase ${
                    darkMode ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {lang === 'es' ? 'Nuestras Especialidades' : 'Our Specialties'}
                  </h2>
                  <div className="w-16 h-1 bg-brand-red mb-3 md:mx-0 mx-auto"></div>
                  <p className="font-display text-xs sm:text-sm font-semibold tracking-widest text-brand-red uppercase">
                    {t.servicesSubheading}
                  </p>
                </div>
              )}

              {/* Department Split Grid (Enlarged) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                
                {/* Left: Department description block (Scaled up) */}
                <div className="lg:col-span-4 space-y-5">
                  <div className="inline-flex p-3.5 bg-brand-red/10 text-brand-red rounded-full">
                    <Icon size={28} />
                  </div>
                  <h3 className={`font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-wide leading-tight ${
                    darkMode ? 'text-zinc-100' : 'text-zinc-900'
                  }`}>
                    {dept.title}
                  </h3>
                  <div className="w-16 h-[3px] bg-brand-red" />
                  <p className={`text-sm sm:text-base lg:text-lg leading-relaxed font-light ${
                    darkMode ? 'text-zinc-400 font-light' : 'text-zinc-655'
                  }`}>
                    {dept.desc}
                  </p>
                </div>

                {/* Right: Sub-services 3 cards (Taller & Larger) */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                  {deptServices.map((service) => {
                    if (!service) return null;
                    return (
                      <motion.div
                        key={service.id}
                        whileHover={{ y: -8 }}
                        onClick={() => setSelectedService(service.id)}
                        className={`relative h-[380px] sm:h-[420px] lg:h-[460px] overflow-hidden group rounded-sm border transition-all duration-300 cursor-pointer flex flex-col justify-between p-8 sm:p-10 ${
                          darkMode ? 'border-zinc-800/80 bg-zinc-900/10' : 'border-zinc-200 bg-white shadow-md shadow-zinc-200/20'
                        }`}
                      >
                        {/* Background Image with filter overlay */}
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                          style={{
                            backgroundImage: `url('${service.image}')`,
                            filter: 'grayscale(60%) brightness(0.35)'
                          }}
                        />

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-colors duration-500 z-10" />

                        {/* Card Content (Scaled up text and margins) */}
                        <div className="relative z-20 h-full flex flex-col justify-between">
                          <div className="flex flex-col items-center text-center">
                            <span className="block font-mono text-[10px] tracking-widest font-bold text-brand-red uppercase mb-3">
                              {lang === 'es' ? 'Código' : 'Code'} {service.id}
                            </span>
                            <h4 className="font-display font-black text-sm sm:text-base lg:text-lg text-white tracking-wider uppercase mb-4 line-clamp-3 px-1">
                              {service.name}
                            </h4>

                            {/* Red line accent */}
                            <div className="w-8 h-[2px] bg-brand-red group-hover:w-20 transition-all duration-300 mb-4" />

                            <p className="text-xs sm:text-sm text-zinc-350 font-light leading-relaxed select-none line-clamp-6">
                              {service.desc}
                            </p>
                          </div>

                          <div className="flex justify-end w-full mt-auto">
                            <span className="font-display text-xs tracking-wider font-extrabold text-white group-hover:text-brand-red transition-colors uppercase inline-flex items-center gap-1.5">
                              {t.btnMore} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

              </div>

            </div>
          </section>
        );
      })}
    </>
  );
}
