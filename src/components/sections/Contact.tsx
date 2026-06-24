import React, { FormEvent, Dispatch, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { translations } from '../../types';

interface ContactProps {
  lang: 'es' | 'en';
  darkMode: boolean;
  formData: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  };
  setFormData: Dispatch<SetStateAction<{
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  }>>;
  formSubmitted: boolean;
  handleFormSubmit: (e: FormEvent) => void;
}

export function Contact({
  lang,
  darkMode,
  formData,
  setFormData,
  formSubmitted,
  handleFormSubmit
}: ContactProps) {
  const t = translations[lang];

  return (
    <section className="relative py-24 transition-theme bg-brand-lead-dark text-white lg:h-screen lg:overflow-hidden min-h-screen snap-start scroll-mt-20 flex items-center" id="contact">

      {/* Subtle background stripes pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5 scroll-smooth"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 8px, #FFFFFF 8px, #FFFFFF 9px)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Information Column */}
          <div className="lg:col-span-5 space-y-6">

            <span className="font-display text-brand-red text-xs sm:text-sm font-extrabold tracking-[6px] uppercase block">
              {t.contactTitle}
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-wider leading-none">
              {lang === 'es' ? 'HABLEMOS DE SU PROYECTO' : 'READY TO TALK TO ENGINEERS?'}
            </h2>

            <div className="w-16 h-[2px] bg-brand-red"></div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              {t.contactText}
            </p>

            {/* Physical details block */}
            <div className="space-y-4 pt-4 text-zinc-300">

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-brand-lead-mid rounded text-brand-red">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest font-display text-zinc-500">
                    {lang === 'es' ? 'OFICINA PRINCIPAL PRODIEM' : 'PRODIEM HEAD OFFICE'}
                  </h4>
                  <p className="text-sm font-mono mt-0.5">
                    Av. Circunvalación golf los incas 206-208 torre 3 of. 602-B Santiago de Surco Lima-Perú
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-brand-lead-mid rounded text-brand-red">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest font-display text-zinc-500">
                    {lang === 'es' ? 'LÍNEA DE ATENCIÓN' : 'ATTENTION LINE'}
                  </h4>
                  <p className="text-sm font-mono mt-0.5">
                    +51 922 488 668
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-brand-lead-mid rounded text-brand-red">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest font-display text-zinc-500">
                    {lang === 'es' ? 'CORREO DE CONTACTO' : 'CONTACT EMAIL'}
                  </h4>
                  <p className="text-sm font-mono mt-0.5 ">
                    contacto@prodiem.pe
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Quotation Request Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-brand-lead-mid p-6 sm:p-10 border border-zinc-800 rounded-sm shadow-xl">

              <span className="block font-display text-xs tracking-wider uppercase font-extrabold text-brand-red border-b border-zinc-800 pb-2 mb-6">
                {lang === 'es' ? 'FORMULARIO DE SOLICITUD DE COTIZACIÓN DE MAQUILA' : 'COMMERCIAL TOLL QUOTE BUILDER'}
              </span>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 bg-green-500/10 border border-green-500 text-green-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="font-display font-semibold text-2xl uppercase tracking-wide text-white">
                      {lang === 'es' ? 'CONEXIÓN ESTABLECIDA' : 'REQUEST LOGGED SECURELY'}
                    </h3>
                    <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
                      {t.formSuccess}
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setFormData({ ...formData, message: '' })}
                        className="font-display font-bold text-xs tracking-wider text-brand-red hover:text-white uppercase transition-colors"
                      >
                        {lang === 'es' ? 'Enviar otro mensaje' : 'Submit another inquiry'}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-5"
                  >

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                      {/* Name field */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                          {t.formName} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-zinc-950 border border-zinc-800 focus:outline-none focus:border-brand-red p-3 rounded text-sm text-zinc-100 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email field */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                          {t.formEmail} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-zinc-950 border border-zinc-800 focus:outline-none focus:border-brand-red p-3 rounded text-sm text-zinc-100 transition-colors"
                          placeholder="jdoe@corporation.com"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                      {/* Phone Field */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                          {t.formPhone} *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-zinc-950 border border-zinc-800 focus:outline-none focus:border-brand-red p-3 rounded text-sm text-zinc-100 transition-colors"
                          placeholder="+51 999 999 999"
                        />
                      </div>

                      {/* Dropdown service selector */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                          {t.formService}
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-zinc-950 border border-zinc-800 focus:outline-none focus:border-brand-red p-3 rounded text-sm text-zinc-100 transition-colors"
                        >
                          <option value="Fabricación Metálica">{lang === 'es' ? 'Fabricación Metálica' : 'Metal Fabrication'}</option>
                          <option value="Mantenimiento Minero">{lang === 'es' ? 'Mantenimiento de Equipos Mineros' : 'Mining Equipment Maintenance'}</option>
                          <option value="Calibración Metrológica">{lang === 'es' ? 'Calibración e Instrumentación' : 'Calibration & Instrumentation'}</option>
                          <option value="Mecanizado in-situ">{lang === 'es' ? 'Mecanizado de Precisión' : 'Precision Machining'}</option>
                          <option value="Soldadura Especializada">{lang === 'es' ? 'Soldadura Homologada' : 'Specialized Welding'}</option>
                          <option value="Otro">{lang === 'es' ? 'Otro Servicio' : 'Other Service'}</option>
                        </select>
                      </div>

                    </div>

                    {/* Msg Field */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                        {t.formMsg} *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:outline-none focus:border-brand-red p-3 rounded text-sm text-zinc-100 transition-colors placeholder:text-zinc-650"
                        placeholder={lang === 'es' ? 'Especifique espesores, ancho de entrada, ancho de salida y número de cortes previstos...' : 'E.g., Coil outer diameter 1450mm, slitted into 4 streams of equal widths...'}
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-display text-xs tracking-widest font-extrabold py-4 px-6 rounded-sm uppercase transition-all duration-200 cursor-pointer shadow-lg active:translate-y-0.5"
                      >
                        {t.formSubmit}
                      </button>
                    </div>

                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
