import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { translations, PageType } from '../../types';

interface NavbarProps {
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activePage: PageType;
  setActivePage: (page: PageType) => void;
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
}

export function Navbar({
  lang,
  setLang,
  darkMode,
  setDarkMode,
  activePage,
  setActivePage,
  navOpen,
  setNavOpen
}: NavbarProps) {
  const t = translations[lang];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-theme border-b ${
      darkMode ? 'bg-zinc-950/90 border-zinc-800' : 'bg-white/90 border-zinc-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo area */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setActivePage('home'); }}
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-brand-logo"
          >
            <div className="w-12 h-12 bg-brand-red flex items-center justify-center text-white font-display font-extrabold text-2xl transition-transform duration-300 group-hover:scale-105 rounded-sm shadow-md shadow-brand-red/10">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-brand-red uppercase">
                PRODIEM
              </span>
              <span className={`text-[9px] tracking-[4px] uppercase font-light transition-theme ${
                darkMode ? 'text-zinc-400' : 'text-zinc-650'
              }`}>
                {lang === 'es' ? 'Metalmecánica' : 'Metal-Mechanics'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => setActivePage('home')}
              className={`px-3 py-2 font-display text-xs tracking-wider font-semibold uppercase hover:text-brand-red transition-all cursor-pointer ${
                activePage === 'home' ? 'text-brand-red border-b-2 border-brand-red' : darkMode ? 'text-zinc-350' : 'text-zinc-700'
              }`}
            >
              {lang === 'es' ? 'INICIO' : 'HOME'}
            </button>
            <button
              onClick={() => setActivePage('about')}
              className={`px-3 py-2 font-display text-xs tracking-wider font-semibold uppercase hover:text-brand-red transition-all cursor-pointer ${
                activePage === 'about' ? 'text-brand-red border-b-2 border-brand-red' : darkMode ? 'text-zinc-350' : 'text-zinc-700'
              }`}
            >
              {t.navAbout}
            </button>
            <button
              onClick={() => setActivePage('services')}
              className={`px-3 py-2 font-display text-xs tracking-wider font-semibold uppercase hover:text-brand-red transition-all cursor-pointer ${
                activePage === 'services' ? 'text-brand-red border-b-2 border-brand-red' : darkMode ? 'text-zinc-350' : 'text-zinc-700'
              }`}
            >
              {t.navServices}
            </button>
            <button
              onClick={() => setActivePage('calculator')}
              className={`px-3 py-2 font-display text-xs tracking-wider font-semibold uppercase hover:text-brand-red transition-all cursor-pointer ${
                activePage === 'calculator' ? 'text-brand-red border-b-2 border-brand-red' : darkMode ? 'text-zinc-350' : 'text-zinc-700'
              }`}
            >
              {t.navCalculator}
            </button>
            <button
              onClick={() => setActivePage('products')}
              className={`px-3 py-2 font-display text-xs tracking-wider font-semibold uppercase hover:text-brand-red transition-all cursor-pointer ${
                activePage === 'products' ? 'text-brand-red border-b-2 border-brand-red' : darkMode ? 'text-zinc-350' : 'text-zinc-700'
              }`}
            >
              {t.navProducts}
            </button>
            <button
              onClick={() => setActivePage('clients')}
              className={`px-3 py-2 font-display text-xs tracking-wider font-semibold uppercase hover:text-brand-red transition-all cursor-pointer ${
                activePage === 'clients' ? 'text-brand-red border-b-2 border-brand-red' : darkMode ? 'text-zinc-350' : 'text-zinc-700'
              }`}
            >
              {lang === 'es' ? 'Clientes' : 'Clients'}
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className={`px-3 py-2 font-display text-xs tracking-wider font-semibold uppercase hover:text-brand-red transition-all cursor-pointer ${
                activePage === 'contact' ? 'text-brand-red border-b-2 border-brand-red' : darkMode ? 'text-zinc-350' : 'text-zinc-700'
              }`}
            >
              {t.navContact}
            </button>
          </nav>

          {/* Control Panel: Language, Theme & Action */}
          <div className="hidden sm:flex items-center gap-4">

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold font-display rounded border uppercase tracking-wider transition-theme transition-transform active:scale-95 ${
                darkMode
                  ? 'border-zinc-800 text-zinc-300 hover:border-zinc-700 bg-zinc-900/60'
                  : 'border-zinc-300 text-zinc-700 hover:border-zinc-400 bg-zinc-100'
              }`}
              title="Cambiar Idioma / Change Language"
              aria-label="Language Selector"
            >
              <span>🌐 {lang === 'es' ? 'ES' : 'EN'}</span>
            </button>

            {/* Dark Mode Toggler */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full border transition-theme ${
                darkMode
                  ? 'border-zinc-800 text-yellow-500 bg-zinc-900/60 hover:bg-zinc-800'
                  : 'border-zinc-200 text-zinc-650 bg-zinc-100 hover:bg-zinc-200'
              }`}
              title={darkMode ? 'Modo Claro' : 'Modo Oscuro'}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Instant Quote Shortcut */}
            <button
              onClick={() => setActivePage('contact')}
              className="bg-brand-red hover:bg-brand-red-dark text-white font-display text-xs tracking-wider font-bold py-2.5 px-5 rounded-sm shadow-md hover:shadow-brand-red/20 uppercase transition-colors"
            >
              {lang === 'es' ? 'Presupuesto' : 'Quote'}
            </button>

          </div>

          {/* Mobile Nav Button */}
          <div className="flex sm:hidden items-center gap-3">
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className={`px-2 py-1 text-xs font-bold font-display rounded border uppercase tracking-wider transition-theme ${
                darkMode ? 'border-zinc-800 text-zinc-300 bg-zinc-900' : 'border-zinc-300 text-zinc-700 bg-zinc-100'
              }`}
            >
              {lang === 'es' ? 'ES' : 'EN'}
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded border transition-theme ${
                darkMode ? 'border-zinc-800 text-yellow-500 bg-zinc-900' : 'border-zinc-200 text-zinc-650 bg-zinc-100'
              }`}
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button
              onClick={() => setNavOpen(!navOpen)}
              className={`p-2 rounded-md transition-colors ${
                darkMode ? 'hover:bg-zinc-950 text-white' : 'hover:bg-zinc-100 text-zinc-900'
              }`}
              aria-label="Toggle menu"
            >
              {navOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`sm:hidden border-t transition-theme ${
              darkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200'
            }`}
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col font-display font-semibold uppercase tracking-wider text-sm">
              <button
                onClick={() => { setActivePage('home'); setNavOpen(false); }}
                className={`py-3 text-left border-b border-dashed ${darkMode ? 'border-zinc-900' : 'border-zinc-100'} ${activePage === 'home' ? 'text-brand-red font-bold' : ''}`}
              >
                {lang === 'es' ? 'INICIO' : 'HOME'}
              </button>
              <button
                onClick={() => { setActivePage('about'); setNavOpen(false); }}
                className={`py-3 text-left border-b border-dashed ${darkMode ? 'border-zinc-900' : 'border-zinc-100'} ${activePage === 'about' ? 'text-brand-red font-bold' : ''}`}
              >
                {t.navAbout}
              </button>
              <button
                onClick={() => { setActivePage('services'); setNavOpen(false); }}
                className={`py-3 text-left border-b border-dashed ${darkMode ? 'border-zinc-900' : 'border-zinc-100'} ${activePage === 'services' ? 'text-brand-red font-bold' : ''}`}
              >
                {t.navServices}
              </button>
              <button
                onClick={() => { setActivePage('calculator'); setNavOpen(false); }}
                className={`py-3 text-left border-b border-dashed ${darkMode ? 'border-zinc-900' : 'border-zinc-100'} ${activePage === 'calculator' ? 'text-brand-red font-bold' : ''}`}
              >
                {t.navCalculator}
              </button>
              <button
                onClick={() => { setActivePage('products'); setNavOpen(false); }}
                className={`py-3 text-left border-b border-dashed ${darkMode ? 'border-zinc-900' : 'border-zinc-100'} ${activePage === 'products' ? 'text-brand-red font-bold' : ''}`}
              >
                {t.navProducts}
              </button>
              <button
                onClick={() => { setActivePage('clients'); setNavOpen(false); }}
                className={`py-3 text-left border-b border-dashed ${darkMode ? 'border-zinc-900' : 'border-zinc-100'} ${activePage === 'clients' ? 'text-brand-red font-bold' : ''}`}
              >
                {lang === 'es' ? 'CLIENTES' : 'CLIENTS'}
              </button>
              <button
                onClick={() => { setActivePage('contact'); setNavOpen(false); }}
                className={`py-3 text-left text-brand-red ${activePage === 'contact' ? 'font-bold' : ''}`}
              >
                {t.navContact}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
