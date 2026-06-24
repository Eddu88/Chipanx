import React, { useState, useEffect } from 'react';
import {
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ChevronUp
} from 'lucide-react';
import { PageType } from '../../types';

interface FooterProps {
  lang: 'es' | 'en';
  darkMode?: boolean;
  setActivePage?: (page: PageType) => void;
  onNavigate?: (page: PageType, sectionId?: string) => void;
}

export function Footer({ lang, darkMode, setActivePage, onNavigate }: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.overflow-y-scroll');
      if (container) {
        setShowScrollTop(container.scrollTop > 350);
      }
    };

    const container = document.querySelector('.overflow-y-scroll');
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    const container = document.querySelector('.overflow-y-scroll');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className={`border-t transition-theme relative z-30 snap-start snap-always ${darkMode
      ? 'bg-zinc-950 border-zinc-900 text-zinc-400'
      : 'bg-zinc-100 border-zinc-200 text-zinc-650'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main 3-Column Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-b ${darkMode ? 'border-zinc-900' : 'border-zinc-200'
          }`}>

          {/* Column 1: About Brand */}
          <div className="flex flex-col gap-4">
            <h3 className={`font-display font-black text-xl tracking-[3px] uppercase ${darkMode ? 'text-white' : 'text-zinc-900'
              }`}>
              PRODIEM
            </h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              {lang === 'es'
                ? 'Empresa de ingeniería y construcción líder en proyectos y contratos EPC. 25 años de excelencia al servicio del Perú.'
                : 'Leading engineering and construction company in EPC projects and contracts. 25 years of excellence serving Peru.'
              }
            </p>
            {/* Social Media Links (Only YouTube & LinkedIn) */}
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${darkMode
                ? 'border-zinc-800 text-zinc-400 hover:text-white hover:border-white hover:bg-white/5'
                : 'border-zinc-300 text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 hover:bg-zinc-200/50'
                }`}>
                <Youtube size={16} />
              </a>
              <a href="#" className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${darkMode
                ? 'border-zinc-800 text-zinc-400 hover:text-white hover:border-white hover:bg-white/5'
                : 'border-zinc-300 text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 hover:bg-zinc-200/50'
                }`}>
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-[3px] text-brand-red">
              {lang === 'es' ? 'SERVICIOS' : 'SERVICES'}
            </h4>
            <ul className={`flex flex-col gap-2.5 text-sm font-medium ${darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              <li>
                <button
                  onClick={() => onNavigate ? onNavigate('services', 'services-engineering') : setActivePage?.('services')}
                  className={`hover:text-brand-red hover:underline transition-all cursor-pointer text-left ${darkMode ? 'hover:text-white' : 'hover:text-zinc-900'
                    }`}
                >
                  {lang === 'es' ? 'Ingeniería' : 'Engineering'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate ? onNavigate('services', 'services-fabrication') : setActivePage?.('services')}
                  className={`hover:text-brand-red hover:underline transition-all cursor-pointer text-left ${darkMode ? 'hover:text-white' : 'hover:text-zinc-900'
                    }`}
                >
                  {lang === 'es' ? 'Fabricación' : 'Fabrication'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate ? onNavigate('services', 'services-electromechanical') : setActivePage?.('services')}
                  className={`hover:text-brand-red hover:underline transition-all cursor-pointer text-left ${darkMode ? 'hover:text-white' : 'hover:text-zinc-900'
                    }`}
                >
                  {lang === 'es' ? 'Servicios Electromecánicos' : 'Electromechanical Services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate ? onNavigate('services', 'services-services') : setActivePage?.('services')}
                  className={`hover:text-brand-red hover:underline transition-all cursor-pointer text-left ${darkMode ? 'hover:text-white' : 'hover:text-zinc-900'
                    }`}
                >
                  {lang === 'es' ? 'Área de Servicios' : 'Service Area'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage?.('contact')}
                  className={`hover:text-brand-red hover:underline transition-all cursor-pointer text-left ${darkMode ? 'hover:text-white' : 'hover:text-zinc-900'
                    }`}
                >
                  {lang === 'es' ? 'Trabaja con nosotros' : 'Work with us'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-5">
            <h4 className="font-display font-bold text-xs uppercase tracking-[3px] text-brand-red">
              {lang === 'es' ? 'CONTACTO' : 'CONTACT'}
            </h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-brand-red shrink-0 mt-0.5" size={17} />
                <div className="flex flex-col">
                  <span className={`text-xs font-bold tracking-wider ${darkMode ? 'text-zinc-300' : 'text-zinc-700'
                    }`}>
                    {lang === 'es' ? 'OFICINA PRINCIPAL' : 'MAIN OFFICE'}
                  </span>
                  <span className={`text-xs mt-1 leading-normal ${darkMode ? 'text-zinc-400' : 'text-zinc-650'
                    }`}>
                    Av. Circunvalación golf los incas 206-208 torre 3 of. 602-B Santiago de Surco Lima-Perú
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-brand-red shrink-0" size={16} />
                <span className={`text-xs font-semibold ${darkMode ? 'text-zinc-300' : 'text-zinc-700'
                  }`}>+51 922 488 668<br />
                  +51 956 063 749</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-brand-red shrink-0" size={16} />
                <a
                  href="mailto:ventas@prodiemsac.com"
                  className={`text-xs font-semibold hover:underline ${darkMode ? 'text-zinc-300' : 'text-zinc-700'
                    }`}
                >
                  ventas@prodiemsac.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-500">
          <div>
            <span>
              {lang === 'es'
                ? '© 2026 PRODIEM S.A.C. Todos los derechos reservados.'
                : '© 2026 PRODIEM S.A.C. All rights reserved.'
              }
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-red transition-colors">
              {lang === 'es' ? 'Política de privacidad' : 'Privacy Policy'}
            </a>
            <a href="#" className="hover:text-brand-red transition-colors">
              {lang === 'es' ? 'Términos de uso' : 'Terms of Use'}
            </a>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top button (styled exactly with brand-red for cohesive visual style) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-brand-red hover:bg-brand-red-dark text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          title={lang === 'es' ? 'Subir al inicio' : 'Scroll to top'}
        >
          <ChevronUp size={24} strokeWidth={2.5} />
        </button>
      )}
    </footer>
  );
}
