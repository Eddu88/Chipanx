import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download } from 'lucide-react';
import { translations, PageType } from '../../types';

interface ProductModalProps {
  selectedProduct: number | null;
  setSelectedProduct: (index: number | null) => void;
  darkMode: boolean;
  lang: 'es' | 'en';
  setActivePage: (page: PageType) => void;
}

export function ProductModal({
  selectedProduct,
  setSelectedProduct,
  darkMode,
  lang,
  setActivePage
}: ProductModalProps) {
  const t = translations[lang];
  const product = selectedProduct !== null ? t.productsList[selectedProduct] : null;

  if (product === null) return null;

  return (
    <AnimatePresence>
      {selectedProduct !== null && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 bg-black"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className={`w-full max-w-lg p-6 sm:p-8 rounded shadow-2xl relative z-10 border transition-theme ${
              darkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
            }`}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-brand-red transition-colors"
              title="Close Modal"
            >
              <X size={20} />
            </button>

            <div className="space-y-4">
              <span className="inline-block bg-brand-red text-white font-display text-[9px] font-bold tracking-widest uppercase py-0.5 px-2 rounded-sm">
                {product.cat}
              </span>

              <h3 className="font-display font-extrabold text-2xl uppercase tracking-wider text-brand-red">
                {product.name}
              </h3>

              <div className="w-12 h-[2px] bg-brand-red"></div>

              <p className="text-sm leading-relaxed text-zinc-400">
                {product.desc}
              </p>

              {/* Specs List Block */}
              <div className={`p-5 rounded border space-y-3 ${
                darkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-zinc-100 border-zinc-250 text-zinc-900'
              }`}>
                <span className="block font-display font-extrabold text-xs tracking-wider uppercase text-brand-red">
                  {lang === 'es' ? 'REGISTRO DE CONTROL DE CALIDAD' : 'QUALITY TOLERANCE INDEXES'}
                </span>
                <ul className="space-y-1.5 text-xs font-mono">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-brand-red">•</span> {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">

                {/* Mock Mill test download */}
                <button
                  onClick={() => alert(lang === 'es' ? 'Ficha técnica / Certificado de Molino descargado exitosamente.' : 'Mill Test Certificate PDF reference has been downloaded to resources.')}
                  className="border border-zinc-700 hover:border-zinc-500 text-xxs font-mono tracking-wider font-semibold py-2 px-3 rounded uppercase transition-colors inline-flex items-center gap-1.5 text-zinc-400 hover:text-white"
                >
                  <Download size={13} />
                  {lang === 'es' ? 'DESCARGAR CERTIFICADO' : 'DOWNLOAD MILL REPORT'}
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className={`font-display text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded ${
                      darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-650 hover:text-black'
                    }`}
                  >
                    {t.closeBtn}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      setActivePage('contact');
                    }}
                    className="bg-brand-red hover:bg-brand-red-dark text-white font-display text-xs tracking-wider font-bold py-2 px-5 rounded-sm uppercase transition-colors"
                  >
                    {lang === 'es' ? 'SOLICITAR LOTE' : 'APPLY TO BATCH'}
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
