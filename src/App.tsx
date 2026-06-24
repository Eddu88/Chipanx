import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language, PageType } from './types';

// Layout
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// UI
import { ServiceModal } from './components/ui/ServiceModal';
import { ProductModal } from './components/ui/ProductModal';

// Sections
import { Hero } from './components/sections/Hero';
import { Welcome } from './components/sections/Welcome';
import { Services } from './components/sections/Services';
import { Features } from './components/sections/Features';
import { Products } from './components/sections/Products';
import { Clients } from './components/sections/Clients';
import { Contact } from './components/sections/Contact';
import { ClientLogos } from './components/sections/ClientLogos';



interface DashPaginationProps {
  activeSection: string;
  sectionIds: string[];
  lang: 'es' | 'en';
  onSelectSection: (id: string) => void;
}

function DashPagination({ activeSection, sectionIds, lang, onSelectSection }: DashPaginationProps) {
  const SECTION_LABELS: Record<string, Record<'es' | 'en', string>> = {
    hero: { es: 'Inicio', en: 'Home' },
    welcome: { es: 'Nosotros', en: 'About' },
    features: { es: 'Servicios', en: 'Features' },
    'client-logos': { es: 'Clientes', en: 'Clients' },
    'services-engineering': { es: 'Ingeniería', en: 'Engineering' },
    'services-fabrication': { es: 'Fabricación', en: 'Fabrication' },
    'services-electromechanical': { es: 'Electromecánica', en: 'Electromechanical' },
    'services-services': { es: 'Área de Servicios', en: 'Service Area' }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-3">
      {sectionIds.map((id) => {
        const isActive = activeSection === id;
        const label = SECTION_LABELS[id]?.[lang] || id;
        return (
          <button
            key={id}
            onClick={() => onSelectSection(id)}
            className="group flex items-center justify-end gap-3 relative focus:outline-none cursor-pointer py-1"
            aria-label={`Go to ${label}`}
          >
            {/* Tooltip label */}
            <span className="opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 absolute right-12 bg-zinc-950/90 text-white border border-zinc-800/80 text-[10px] tracking-widest uppercase font-semibold py-1.5 px-3 rounded shadow-md font-display whitespace-nowrap backdrop-blur-sm">
              {label}
            </span>

            {/* Horizontal Dash Line */}
            <span
              className={`h-1.5 rounded-sm transition-all duration-500 ease-out
                ${isActive
                  ? 'w-10 bg-brand-red shadow-lg shadow-brand-red/40'
                  : 'w-4 bg-zinc-400/40 dark:bg-zinc-800/80 group-hover:bg-zinc-550 dark:group-hover:bg-zinc-300 group-hover:w-6'
                }`}
            />
          </button>
        );
      })}
    </div>
  );
}

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isSnapping = useRef(false); // prevents loops
  // Lang state (ES default, persistent in localStorage)
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('prodiem_lang');
    if (saved === 'es' || saved === 'en') return saved;
    return 'es';
  });

  // Dark Mode state (persistent in localStorage)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('prodiem_dark');
    return saved === 'true';
  });

  const [activePage, setActivePage] = useState<PageType>('home');
  const [targetSection, setTargetSection] = useState<string | null>(null);

  const navigateTo = (page: PageType, sectionId?: string) => {
    setActivePage(page);
    if (sectionId) {
      setTargetSection(sectionId);
    }
  };
  const [activeSlide, setActiveSlide] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  // Custom quotation request form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Fabricación Metálica',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Modal quick quote states
  const [modalFormSubmitted, setModalFormSubmitted] = useState(false);
  const [modalFormData, setModalFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const t = translations[lang];

  // Persist preferences
  useEffect(() => {
    localStorage.setItem('prodiem_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('prodiem_dark', String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Autoplay hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % t.heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [t.heroSlides.length]);

  // Scroll to top on page change
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [activePage]);

  // Cross-page scroll to target section
  useEffect(() => {
    if (!targetSection) return;

    let attempts = 0;
    const scrollInterval = setInterval(() => {
      const el = document.getElementById(targetSection);
      const container = scrollContainerRef.current;
      attempts++;

      if (el && container) {
        container.scrollTo({
          top: el.offsetTop - 80, // offset for navbar
          behavior: 'smooth'
        });
        clearInterval(scrollInterval);
        setTargetSection(null);
      } else if (attempts > 10) {
        clearInterval(scrollInterval);
        setTargetSection(null);
      }
    }, 100);

    return () => clearInterval(scrollInterval);
  }, [activePage, targetSection]);

  const [activeSection, setActiveSection] = useState('hero');

  // Sync activeSection with activePage
  useEffect(() => {
    if (activePage === 'home') {
      setActiveSection('hero');
    } else if (activePage === 'services') {
      setActiveSection('services-engineering');
    }
  }, [activePage]);

  // Track scroll position to update active section in pagination
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sectionIds = activePage === 'home'
        ? ['hero', 'welcome', 'features', 'client-logos']
        : activePage === 'services'
          ? ['services-engineering', 'services-fabrication', 'services-electromechanical', 'services-services']
          : [];

      if (sectionIds.length === 0) return;

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      const containerTop = container.scrollTop;

      let closestId = sectionIds[0];
      let closestDist = Infinity;

      sections.forEach((el) => {
        // Snap alignment position is offsetTop - 80
        const dist = Math.abs((el.offsetTop - 80) - containerTop);
        if (dist < closestDist) {
          closestDist = dist;
          closestId = el.id;
        }
      });

      setActiveSection(closestId);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const container = scrollContainerRef.current;
    if (el && container) {
      container.scrollTo({
        top: el.offsetTop - 80, // offset for navbar
        behavior: 'smooth'
      });
    }
  };

  // Listen for ESC key to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
        setSelectedProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'SCS Coil Line',
        message: ''
      });
    }, 5000);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero
              lang={lang}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
              setActivePage={setActivePage}
            />
            <Welcome lang={lang} darkMode={darkMode} />
            <Features 
              lang={lang} 
              darkMode={darkMode}
              onNavigate={navigateTo} 
            />
            <ClientLogos lang={lang} darkMode={darkMode} />
          </>
        );
      case 'about':
        return <Welcome lang={lang} darkMode={darkMode} />;
      case 'services':
        return (
          <Services
            lang={lang}
            darkMode={darkMode}
            setSelectedService={setSelectedService}
          />
        );

      case 'products':
        return (
          <Products
            lang={lang}
            darkMode={darkMode}
            setSelectedProduct={setSelectedProduct}
            setActivePage={setActivePage}
          />
        );
      case 'clients':
        return (
          <Clients
            lang={lang}
            darkMode={darkMode}
            setActivePage={setActivePage}
          />
        );
      case 'contact':
        return (
          <Contact
            lang={lang}
            darkMode={darkMode}
            formData={formData}
            setFormData={setFormData}
            formSubmitted={formSubmitted}
            handleFormSubmit={handleFormSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      className={`h-screen overflow-y-scroll no-scrollbar scroll-smooth snap-y snap-mandatory flex flex-col transition-theme ${darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'
        } font-sans antialiased`}
    >

      {/* ── FIXED NAVIGATION HEADER (Glassmorphism) ── */}
      <Navbar
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activePage={activePage}
        setActivePage={setActivePage}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />

      {/* Hero section padding compensator */}
      <div className="h-20"></div>

      {/* ── DYNAMIC CONTENT AREA (Body Router with Framer Motion Fade-in) ── */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── FOOTER ── */}
      <Footer 
        lang={lang} 
        darkMode={darkMode}
        setActivePage={(page) => navigateTo(page)} 
        onNavigate={navigateTo} 
      />

      {/* ── INTERACTIVE DRAWER MODAL FOR SERVICES ── */}
      <ServiceModal
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        darkMode={darkMode}
        lang={lang}
        modalFormData={modalFormData}
        setModalFormData={setModalFormData}
        modalFormSubmitted={modalFormSubmitted}
        setModalFormSubmitted={setModalFormSubmitted}
      />

      {/* ── INTERACTIVE PRODUCT DETAIL MODAL ── */}
      <ProductModal
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        darkMode={darkMode}
        lang={lang}
        setActivePage={setActivePage}
      />

      {/* ── DASH PAGINATION ── */}
      {(activePage === 'home' || activePage === 'services') && (
        <DashPagination
          activeSection={activeSection}
          sectionIds={
            activePage === 'home'
              ? ['hero', 'welcome', 'features', 'client-logos']
              : ['services-engineering', 'services-fabrication', 'services-electromechanical', 'services-services']
          }
          lang={lang}
          onSelectSection={scrollToSection}
        />
      )}

    </div>
  );
}
