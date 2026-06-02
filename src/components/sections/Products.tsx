import React from 'react';
import { ChevronRight, FileText } from 'lucide-react';
import { translations, PageType } from '../../types';

interface ProductsProps {
  lang: 'es' | 'en';
  darkMode: boolean;
  setSelectedProduct: (index: number | null) => void;
  setActivePage: (page: PageType) => void;
}

export function Products({ lang, darkMode, setSelectedProduct, setActivePage }: ProductsProps) {
  const t = translations[lang];

  return (
    <section className="py-24 transition-theme min-h-screen overflow-y-auto snap-start scroll-mt-20" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-b pb-8 mb-12 border-zinc-800/60">
          <div>
            <span className="font-display text-brand-red text-xs sm:text-sm font-extrabold tracking-[6px] uppercase block mb-2">
              {lang === 'es' ? 'CATÁLOGO DE ACEROS PROCESADOS' : 'READY TO DISTRIBUTE PARTS'}
            </span>
            <h2 className={`font-display font-extrabold text-3xl sm:text-4xl tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-900'
              }`}>
              {t.productsTitle}
            </h2>
          </div>
          <button
            onClick={() => setActivePage('contact')}
            className="text-brand-red font-display text-xs sm:text-sm font-extrabold tracking-widest uppercase hover:text-brand-red-dark transition-colors inline-flex items-center gap-1.5 mt-4 sm:mt-0"
          >
            {t.productsViewAll} <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.productsList.map((product, idx) => (
            <div
              key={idx}
              className={`overflow-hidden border rounded group transition-theme ${darkMode ? 'bg-zinc-900/40 border-zinc-900 hover:border-zinc-800' : 'bg-white border-zinc-200 hover:shadow-lg'
                }`}
            >

              {/* Product Image Wrapper with lazy loading & grayscale fallback filter */}
              <div className="h-48 overflow-hidden bg-brand-lead-dark relative">
                <div className="absolute inset-0 bg-brand-red/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-brand-red text-white font-display text-[9px] font-bold tracking-widest uppercase py-0.5 px-2 rounded-sm z-20">
                  {product.cat}
                </div>
              </div>

              {/* Body details */}
              <div className="p-6">

                <h3 className={`font-display font-bold text-xl sm:text-2xl mb-4 transition-theme uppercase ${darkMode ? 'text-zinc-100' : 'text-zinc-900'
                  }`}>
                  {product.name}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-light ${darkMode ? 'text-zinc-400' : 'text-zinc-650'
                  }`}>
                  {product.desc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/30">
                  <button
                    onClick={() => setSelectedProduct(idx)}
                    className={`text-xs font-display font-extrabold tracking-wider uppercase transition-colors pointer flex items-center gap-1.5 ${darkMode ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-black'
                      }`}
                  >
                    <FileText size={13} className="text-brand-red" />
                    {lang === 'es' ? 'Ver Especificaciones' : 'Specs Sheet'}
                  </button>

                  <button
                    onClick={() => setActivePage('contact')}
                    className="bg-zinc-800/10 hover:bg-brand-red text-xxs tracking-widest font-display font-semibold transition-colors rounded-sm uppercase text-zinc-400 hover:text-white px-3 py-1.5"
                  >
                    {lang === 'es' ? 'Cotizar' : 'Apply Quote'}
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
