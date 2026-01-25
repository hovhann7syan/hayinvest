"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function AcademyPage() {
  const t = useTranslations('Academy');

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-[#050505] text-white overflow-x-hidden">
      
      {/* ФОНОВАЯ СЕТКА */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.1]" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* --- ЗАГОЛОВОК --- */}
        <div className="mb-16 text-center">
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-3 px-4 py-2 bg-green-900/10 border border-green-500/20 rounded-full text-xs font-mono uppercase text-green-400 mb-6 tracking-widest"
           >
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
             {t('badge')}
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight"
           >
             <span className="text-white">HayInvest</span> <span className="text-gray-600 mx-2">X</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Profit Triumph</span>
           </motion.h1>
           
           <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
             {t('subtitle')}
           </p>
        </div>

        {/* --- СТАТИСТИКА КУРСА --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden mb-16"
        >
          <div className="p-8 text-center border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors group">
             <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 group-hover:text-green-400">Timeframe</div>
             <div className="text-2xl font-bold">{t('stat_duration')}</div>
          </div>
          <div className="p-8 text-center border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors group">
             <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 group-hover:text-green-400">Intensity</div>
             <div className="text-2xl font-bold">{t('stat_frequency')}</div>
          </div>
          <div className="p-8 text-center hover:bg-white/5 transition-colors group">
             <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 group-hover:text-green-400">Requirements</div>
             <div className="text-2xl font-bold">{t('stat_level')}</div>
          </div>
        </motion.div>

        {/* --- ОСНОВНОЙ КОНТЕНТ (GRID) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* ЛЕВАЯ КОЛОНКА: PROFIT TRIUMPH (МОДУЛИ) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0b0d] border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
             <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-white rounded-full"></span>
                {t('modules_title')}
             </h3>
             
             <ul className="space-y-4 relative z-10">
                {/* Модуль 1 */}
                <li className="flex items-start gap-4 p-5 bg-[#111] rounded-xl border border-white/5 hover:border-green-500/20 transition-all group">
                   <div className="w-10 h-10 rounded bg-green-900/20 text-green-500 flex items-center justify-center font-bold font-mono text-sm border border-green-500/20">01</div>
                   <div>
                      <h4 className="font-bold text-lg group-hover:text-green-400 transition-colors">{t('module_1')}</h4>
                      <div className="h-1 w-12 bg-gray-800 mt-3 rounded-full overflow-hidden">
                        <div className="h-full w-[60%] bg-green-500"></div>
                      </div>
                   </div>
                </li>
                {/* Модуль 2 */}
                <li className="flex items-start gap-4 p-5 bg-[#111] rounded-xl border border-white/5 hover:border-green-500/20 transition-all group">
                   <div className="w-10 h-10 rounded bg-green-900/20 text-green-500 flex items-center justify-center font-bold font-mono text-sm border border-green-500/20">02</div>
                   <div>
                      <h4 className="font-bold text-lg group-hover:text-green-400 transition-colors">{t('module_2')}</h4>
                   </div>
                </li>
                {/* Модуль 3 */}
                <li className="flex items-start gap-4 p-5 bg-[#111] rounded-xl border border-white/5 hover:border-green-500/20 transition-all group">
                   <div className="w-10 h-10 rounded bg-green-900/20 text-green-500 flex items-center justify-center font-bold font-mono text-sm border border-green-500/20">03</div>
                   <div>
                      <h4 className="font-bold text-lg group-hover:text-green-400 transition-colors">{t('module_3')}</h4>
                   </div>
                </li>
             </ul>
          </motion.div>

          {/* ПРАВАЯ КОЛОНКА: HAYINVEST EXCLUSIVE (СЕКРЕТНЫЙ БЛОК) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-900/10 to-[#0a0b0d] border border-green-500/30 rounded-3xl p-8 md:p-10 relative overflow-hidden group"
          >
             {/* Декоративный фон */}
             <div className="absolute top-0 right-0 p-4 opacity-20 font-mono text-xs text-green-500 text-right pointer-events-none">
                // CLASSIFIED<br/>// AUTHORIZED_ONLY
             </div>
             
             <h3 className="text-2xl font-bold mb-6 text-green-400 font-mono flex items-center gap-2">
                {t('exclusive_title')}
             </h3>
             
             <p className="text-xl text-white mb-8 leading-relaxed font-light">
               {t('exclusive_desc')}
             </p>

             {/* Блок с тегами */}
             <div className="p-5 bg-black/40 border border-green-500/20 rounded-xl mb-8 backdrop-blur-sm relative">
                <div className="absolute -top-3 left-4 bg-[#0a0b0d] px-2 text-[10px] text-green-500 font-mono uppercase">Topics covered</div>
                <code className="text-green-300 font-mono text-sm block leading-loose">
                   {'>'} {t('exclusive_tags')}
                </code>
             </div>

             <div className="flex items-center gap-3 text-sm text-gray-400 font-mono pt-4 border-t border-white/10">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                LIVE SESSION INCLUDED
             </div>
          </motion.div>

        </div>

        {/* --- НИЖНЯЯ СЕКЦИЯ: ЦЕНА И КНОПКА --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Свечение */}
          <div className="absolute inset-0 bg-green-500 blur-[100px] opacity-10 pointer-events-none"></div>
          
          <div className="relative bg-[#0a0b0d] border border-white/20 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
             
             {/* Левая часть (Информация о цене) */}
             <div className="p-8 md:p-12 flex-1 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight text-gray-200">{t('offer_title')}</h3>
                <div className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold uppercase rounded mb-6 self-start">
                   {t('offer_discount')}
                </div>
                
                <div className="flex items-baseline gap-4 mb-8">
                   <div className="text-gray-500 text-2xl line-through decoration-red-500 decoration-2 font-mono">{t('offer_price_old')}</div>
                   <div className="text-white text-6xl font-black tracking-tighter">{t('offer_price_new')}</div>
                </div>

                {/* Промокод */}
                <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t('promo_label')}</label>
                   <div className="flex items-center gap-4 bg-white/5 border border-dashed border-white/20 rounded-xl p-1 pr-4 w-fit">
                      <div className="px-4 py-2 bg-white/10 rounded-lg font-mono text-lg tracking-widest text-green-400 select-all">
                         hayinvest
                      </div>
                      <span className="text-[10px] text-gray-500 hidden sm:block">COPY CODE</span>
                   </div>
                </div>
             </div>

             {/* Правая часть (CTA Кнопка) */}
             <div className="bg-white text-black p-8 md:p-12 md:w-[320px] flex flex-col items-center justify-center text-center relative overflow-hidden group cursor-pointer">
                {/* Эффект наведения */}
                <div className="absolute inset-0 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500 z-0"></div>
                
                <a 
                  href="https://t.me/ProfitTriumph_Manager" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative z-10 w-full flex flex-col items-center"
                >
                <h4 className="text-xl font-black mb-4 uppercase group-hover:text-black transition-colors">{t('cta_button')}</h4>
                   <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                   </div>
                   <div className="w-full h-px bg-black/20 my-4"></div>
                   <p className="text-[10px] font-mono font-bold text-gray-600 uppercase tracking-widest group-hover:text-black/70">
                      SECURE LINK
                   </p>
                </a>
             </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}