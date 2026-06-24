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

// Section labels for tooltips
const SECTION_LABELS: Record<string, Record<'es' | 'en', string>> = {
  hero: { es: 'Inicio', en: 'Home' },
  welcome: { es: 'Nosotros', en: 'About' },
  features: { es: 'Servicios', en: 'Features' },
  'client-logos': { es: 'Clientes', en: 'Clients' }
};

interface SectionIndicatorProps {
  sectionIds: string[];
  scrollContainer: React.RefObject<HTMLDivElement | null>;
  lang: 'es' | 'en';
}

function SectionIndicator({ sectionIds, scrollContainer, lang }: SectionIndicatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const handleScroll = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      const containerTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const center = containerTop + containerHeight * 0.25; // 25% threshold

      let closestIdx = 0;
      let closestDist = Infinity;
      sections.forEach((el, i) => {
        const dist = Math.abs(el.offsetTop + el.offsetHeight / 2 - center);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });
      setActiveIndex(closestIdx);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    // Initial execution
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [sectionIds, scrollContainer]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    const container = scrollContainer.current;
    if (el && container) {
      container.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
      {sectionIds.map((id, i) => {
        const label = SECTION_LABELS[id]?.[lang] || id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group flex items-center justify-end gap-3 relative focus:outline-none cursor-pointer"
            title=""
          >
            {/* Tooltip name */}
            <span className="opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 absolute right-8 bg-zinc-950/90 text-white border border-zinc-800/80 text-[10px] tracking-widest uppercase font-semibold py-1.5 px-3 rounded shadow-md font-display whitespace-nowrap backdrop-blur-sm">
              {label}
            </span>
            {/* Dot / line */}
            <span
              className={`transition-all duration-300 rounded-full
                ${activeIndex === i
                  ? 'w-8 h-1 bg-brand-red shadow-lg shadow-brand-red/35'
                  : 'w-2.5 h-1 opacity-45 bg-zinc-500 group-hover:opacity-75 group-hover:bg-zinc-400'
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

  // Manual scroll snapping with smooth animation (only active on the home page)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || activePage !== 'home') return;

    let scrollTimer: ReturnType<typeof setTimeout>;
    let lastScrollTop = container.scrollTop;

    const handleScroll = () => {
      if (isSnapping.current) {
        lastScrollTop = container.scrollTop;
        return;
      }

      const currentScrollTop = container.scrollTop;
      const deltaY = currentScrollTop - lastScrollTop;

      // Threshold to trigger scroll snap (e.g. 40px of scrolling in either direction)
      if (Math.abs(deltaY) < 40) return;

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const sections = container.querySelectorAll('section');
        if (!sections.length) return;

        const containerHeight = container.clientHeight;
        const containerScrollHeight = container.scrollHeight;

        // Check if user is scrolled near the bottom, snap to footer
        const isNearBottom = currentScrollTop + containerHeight >= containerScrollHeight - 120;
        if (deltaY > 0 && isNearBottom) {
          isSnapping.current = true;
          container.scrollTo({
            top: containerScrollHeight - containerHeight,
            behavior: 'smooth',
          });
          setTimeout(() => {
            isSnapping.current = false;
            lastScrollTop = container.scrollTop;
          }, 600);
          return;
        }

        // If we were at the footer and scroll up, snap to the last section
        const wasAtFooter = lastScrollTop >= containerScrollHeight - containerHeight - 50;
        if (wasAtFooter && deltaY < 0) {
          const target = sections[sections.length - 1] as HTMLElement;
          isSnapping.current = true;
          container.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth',
          });
          setTimeout(() => {
            isSnapping.current = false;
            lastScrollTop = container.scrollTop;
          }, 600);
          return;
        }

        // Find the index of the section we were previously stable on
        let currentSectionIndex = 0;
        let closestDist = Infinity;
        sections.forEach((section, idx) => {
          const el = section as HTMLElement;
          const dist = Math.abs(el.offsetTop - 80 - lastScrollTop);
          if (dist < closestDist) {
            closestDist = dist;
            currentSectionIndex = idx;
          }
        });

        // Determine the target section based on scroll direction
        let targetIndex = currentSectionIndex;
        if (deltaY > 0) {
          // Scrolling down -> go to next section
          if (currentSectionIndex < sections.length - 1) {
            targetIndex = currentSectionIndex + 1;
          }
        } else {
          // Scrolling up -> go to previous section
          if (currentSectionIndex > 0) {
            targetIndex = currentSectionIndex - 1;
          }
        }

        const target = sections[targetIndex] as HTMLElement;
        isSnapping.current = true;
        container.scrollTo({
          top: target.offsetTop - 80, // offset navbar
          behavior: 'smooth',
        });

        setTimeout(() => {
          isSnapping.current = false;
          lastScrollTop = container.scrollTop;
        }, 600);
      }, 50); // very short delay for instant responsiveness
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [activePage]);

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
      className={`h-screen overflow-y-scroll scroll-smooth flex flex-col transition-theme ${darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'
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

      {/* ── SECTION INDICATOR ── */}
      {activePage === 'home' && (
        <SectionIndicator
          sectionIds={['hero', 'welcome', 'features', 'client-logos']}
          scrollContainer={scrollContainerRef}
          lang={lang}
        />
      )}

    </div>
  );
}
