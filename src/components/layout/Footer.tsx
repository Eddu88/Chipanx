import React from 'react';
import { translations } from '../../types';

interface FooterProps {
  lang: 'es' | 'en';
}

export function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  return (
    <footer className="bg-brand-lead-dark text-zinc-500 border-t border-zinc-900 transition-theme snap-start scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logo Brands Carousel (Clean and static rendering avoiding flickering loops) */}
        <div className="py-12 border-b border-zinc-900/80 flex flex-wrap items-center justify-center md:justify-between gap-8 sm:gap-12 text-center">
          <span className="font-display font-black text-lg tracking-[5px] uppercase hover:text-zinc-400 transition-colors cursor-default">GABRO</span>
          <span className="font-display font-black text-lg tracking-[5px] uppercase hover:text-zinc-400 transition-colors cursor-default">INDUSTRIX</span>
          <span className="font-display font-black text-lg tracking-[5px] uppercase hover:text-zinc-400 transition-colors cursor-default">RAPID</span>
          <span className="font-display font-black text-lg tracking-[5px] uppercase hover:text-zinc-400 transition-colors cursor-default">DIPLOMAT</span>
          <span className="font-display font-black text-lg tracking-[5px] uppercase hover:text-zinc-400 transition-colors cursor-default">GREEN</span>
          <span className="font-display font-black text-lg tracking-[5px] uppercase hover:text-zinc-400 transition-colors cursor-default">FOOWER</span>
        </div>

        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-red flex items-center justify-center text-white font-display font-extrabold text-sm rounded-sm">P</div>
            <p className="font-display text-xs tracking-wider uppercase font-semibold text-zinc-400">
              PRODIEM <span className="font-mono text-zinc-650">| {lang === 'es' ? 'DESDE 2015' : 'SINCE 2015'}</span>
            </p>
          </div>

          <div className="text-center md:text-right font-display text-[10px] tracking-[2px] uppercase">
            <p className="text-zinc-400">
              {t.footerCopyright}
            </p>
            <p className="text-zinc-650 mt-1">
              {t.footerPrivacy}
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
