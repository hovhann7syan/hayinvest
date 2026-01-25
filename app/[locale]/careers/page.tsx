"use client";

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

export default function CareersPage() {
  const t = useTranslations('Careers');

  // 👇 ТВОЙ ID УЖЕ ВСТАВЛЕН СЮДА:
  const [state, handleSubmit] = useForm("mgoabvgd");

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative bg-obsidian-900 overflow-x-hidden text-white">
      
      {/* ФОНЫ */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-900/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* ЛЕВАЯ КОЛОНКА */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] text-green-400 mb-6">
            Hiring Now
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">
            {t('title')}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 font-light mb-10 border-l-4 border-green-500 pl-6">
            {t('subtitle')}
          </h2>
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>{t('intro')}</p>
            <p>{t('culture')}</p>
          </div>
        </motion.div>


        {/* ПРАВАЯ КОЛОНКА */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-[#0a0b0d] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group min-h-[600px] flex flex-col justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <AnimatePresence mode="wait">
            {state.succeeded ? (
              // ✅ ОКНО УСПЕХА
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Application Initialized</h3>
                <p className="text-gray-400 max-w-sm mx-auto mb-8">
                  Your data has been sent to our secure terminal. We will review your profile shortly.
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  New Application
                </button>
              </motion.div>
            ) : (
              // 📝 ФОРМА
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                 <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-green-500 rounded-full" />
                  {t('form_title')}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-gray-500">{t('name')}</label>
                    <input required id="fullName" name="fullName" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-gray-500">{t('email')}</label>
                    <input required id="email" name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-gray-500">{t('phone')}</label>
                    <input id="phone" name="phone" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-gray-500">{t('linkedin')}</label>
                    <input id="portfolio" name="portfolio" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-mono uppercase text-gray-500">{t('resume')}</label>
                   <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" className="w-full bg-white/5 border border-dashed border-white/20 rounded-xl px-4 py-3 text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-green-500 file:text-black hover:file:bg-green-400 cursor-pointer" />
                   <ValidationError prefix="Resume" field="resume" errors={state.errors} className="text-red-500 text-xs" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-gray-500">{t('cover_letter')}</label>
                  <textarea id="message" name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors resize-none" />
                </div>

                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-green-400 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {state.submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    t('submit')
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </div>
  );
}