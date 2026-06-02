import React, { useState, useEffect, FormEvent } from 'react';
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
import { Calculator } from './components/sections/Calculator';
import { Clients } from './components/sections/Clients';
import { Contact } from './components/sections/Contact';

export default function App() {
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
    window.scrollTo(0, 0);
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
            <Features lang={lang} />
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
      case 'calculator':
        return (
          <Calculator
            lang={lang}
            darkMode={darkMode}
            setActivePage={setActivePage}
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
    <div className={`h-screen overflow-y-scroll snap-y snap-mandatory flex flex-col transition-theme ${darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'
      } font-sans antialiased`}>

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
      <Footer lang={lang} />

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

    </div>
  );
}
