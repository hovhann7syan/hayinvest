"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const t = useTranslations('Newsletter');

  return (
    <section className="relative py-32 px-4 bg-[#050505] overflow-hidden">
      
      {/* Фоновый шум (едва заметный) */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto max-w-3xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Изменил фон карточки на более глубокий темный
          className="relative bg-[#080812] rounded-3xl overflow-hidden shadow-2xl"
        >
          
          {/* 🔥 ТЕМНЫЙ ФИОЛЕТОВЫЙ ГОРИЗОНТ 🔥 */}
          {/* Используем более темные цвета (purple-700) для линии и тени */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-700 to-transparent shadow-[0_0_60px_rgba(126,34,206,0.8)] z-20"></div>
          
          {/* Дополнительное мягкое свечение сверху (Темный фиолетовый) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-800/10 blur-[100px] pointer-events-none z-0"></div>


          <div className="relative z-10 p-10 md:p-16 text-center">
            
            {/* Статус системы (Темный фиолетовый) */}
            <div className="inline-flex items-center gap-3 mb-8">
               <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-700/50"></div>
               {/* Используем purple-400 для текста, чтобы он оставался читаемым на темном фоне */}
               <span className="font-mono text-[10px] text-purple-400 uppercase tracking-[0.3em]">
                  {t('system_status')}
               </span>
               <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-700/50"></div>
            </div>

            {/* Заголовок и подзаголовок */}
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              {t('title')}
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed font-light">
              {t('subtitle')}
            </p>

            {/* ФОРМА */}
            <form 
              action="https://formspree.io/f/mgoabebe" 
              method="POST"
              className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto"
            >
              <input 
                name="email"
                type="email" 
                placeholder={t('placeholder')}
                // Изменил цвет фокуса на темный фиолетовый
                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-700/50 focus:bg-purple-900/10 transition-all font-mono text-sm text-center sm:text-left"
                required
              />
              <button 
                type="submit"
                // Изменил цвет кнопки на более темный фиолетовый (purple-700 -> purple-600 при наведении)
                className="px-8 py-4 bg-purple-700 text-white font-bold rounded-full hover:bg-purple-600 hover:shadow-[0_0_25px_rgba(126,34,206,0.4)] transition-all uppercase tracking-widest text-xs"
              >
                {t('button')}
              </button>
            </form>

            {/* Подвал */}
            <p className="mt-10 text-[10px] font-mono text-gray-600 uppercase tracking-widest opacity-70">
              {t('disclaimer')}
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}