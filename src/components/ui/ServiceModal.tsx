import React, { useRef, useEffect, FormEvent, Dispatch, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle } from 'lucide-react';
import { translations } from '../../types';

interface ServiceModalProps {
  selectedService: string | null;
  setSelectedService: (id: string | null) => void;
  darkMode: boolean;
  lang: 'es' | 'en';
  modalFormData: {
    name: string;
    email: string;
    message: string;
  };
  setModalFormData: Dispatch<SetStateAction<{
    name: string;
    email: string;
    message: string;
  }>>;
  modalFormSubmitted: boolean;
  setModalFormSubmitted: Dispatch<SetStateAction<boolean>>;
}

export function ServiceModal({
  selectedService,
  setSelectedService,
  darkMode,
  lang,
  modalFormData,
  setModalFormData,
  modalFormSubmitted,
  setModalFormSubmitted
}: ServiceModalProps) {
  const t = translations[lang];
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus modal container when it opens for accessibility
  useEffect(() => {
    if (selectedService && modalRef.current) {
      modalRef.current.focus();
    }
  }, [selectedService]);

  const service = t.servicesList.find((s) => s.id === selectedService);
  if (!service) return null;

  const handleModalFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!modalFormData.name || !modalFormData.email) return;
    setModalFormSubmitted(true);
    setTimeout(() => {
      setModalFormSubmitted(false);
      setModalFormData({ name: '', email: '', message: '' });
      setSelectedService(null);
    }, 4000);
  };

  return (
    <AnimatePresence>
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black"
          />

          {/* Modal Body */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`w-full max-w-4xl p-6 sm:p-8 rounded shadow-2xl relative z-10 border transition-theme focus:outline-none ${darkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
              }`}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-brand-red transition-colors z-20"
              title="Cerrar Ventana"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-2">

              {/* Left Column: Service Details & Secondary Image */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <span className="inline-block font-display text-xs tracking-widest font-semibold text-brand-red uppercase mb-1">
                    {lang === 'es' ? 'ESPECIFICACIONES DE SERVICIO' : 'SERVICE SPECIFICATIONS'}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl uppercase tracking-wider text-brand-red mb-3">
                    {service.name}
                  </h3>
                  {/* Turquoise line separator */}
                  <div className="w-16 h-[2px] bg-cyan-400 mb-4" />

                  <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {service.desc}
                  </p>

                  <p className={`text-xs sm:text-sm leading-relaxed font-light ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                    {service.moreDetails}
                  </p>
                </div>

                {/* Secondary Image related to Lab / Inspection */}
                <div className="h-44 sm:h-52 rounded overflow-hidden border border-zinc-800 relative bg-brand-lead-dark mt-auto">
                  <div className="absolute inset-0 bg-brand-lead-dark/10 z-10" />
                  <img
                    src={service.modalImage}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Short Integrated Form */}
              <div className={`p-6 rounded border flex flex-col justify-between ${darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-100 border-zinc-250'
                }`}>
                <AnimatePresence mode="wait">
                  {modalFormSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8"
                    >
                      <div className="w-16 h-16 bg-green-500/10 border border-green-500 text-green-500 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle size={32} />
                      </div>
                      <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                        {lang === 'es' ? '¡Mensaje Enviado!' : 'Request Sent!'}
                      </h4>
                      <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                        {lang === 'es'
                          ? 'Un ingeniero técnico de PRODIEM se contactará de inmediato con una cotización preliminar.'
                          : 'A PRODIEM specialized commercial engineer will contact you shortly with a preliminary quote.'
                        }
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleModalFormSubmit}
                      className="space-y-4 flex flex-col h-full justify-between"
                    >
                      <div>
                        <span className="block font-display font-bold text-xs tracking-wider text-brand-red uppercase border-b border-zinc-800 pb-2 mb-4">
                          {lang === 'es' ? 'SOLICITAR COTIZACIÓN RÁPIDA' : 'QUICK ESTIMATE REQUEST'}
                        </span>

                        <div className="space-y-3">
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                              {lang === 'es' ? 'Nombre y Apellido' : 'Your Name'}
                            </label>
                            <input
                              type="text"
                              required
                              value={modalFormData.name}
                              onChange={(e) => setModalFormData({ ...modalFormData, name: e.target.value })}
                              className="w-full bg-zinc-900 border border-zinc-800 focus:outline-none focus:border-brand-red p-2.5 rounded text-xs text-zinc-100 transition-colors"
                              placeholder={lang === 'es' ? 'Ej. Ing. Juan Pérez' : 'E.g., John Doe'}
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                              {lang === 'es' ? 'Correo Corporativo' : 'Business Email'}
                            </label>
                            <input
                              type="email"
                              required
                              value={modalFormData.email}
                              onChange={(e) => setModalFormData({ ...modalFormData, email: e.target.value })}
                              className="w-full bg-zinc-900 border border-zinc-800 focus:outline-none focus:border-brand-red p-2.5 rounded text-xs text-zinc-100 transition-colors"
                              placeholder="name@company.com"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                              {lang === 'es' ? 'Detalles de la Muestra o Carga' : 'Material Specs / Cargo Volume'}
                            </label>
                            <textarea
                              rows={3}
                              value={modalFormData.message}
                              onChange={(e) => setModalFormData({ ...modalFormData, message: e.target.value })}
                              className="w-full bg-zinc-900 border border-zinc-800 focus:outline-none focus:border-brand-red p-2.5 rounded text-xs text-zinc-100 transition-colors placeholder:text-zinc-650"
                              placeholder={lang === 'es' ? 'Especifique tipo de metal, volumen (tons) y origen...' : 'E.g., 2,500 tons of copper concentrates at port...'}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-3">
                        <button
                          type="submit"
                          className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-display text-xs tracking-widest font-extrabold py-3 px-4 rounded-sm uppercase transition-all duration-200 cursor-pointer shadow-lg active:translate-y-0.5"
                        >
                          {lang === 'es' ? 'ENVIAR SOLICITUD' : 'SUBMIT REQUEST'}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
