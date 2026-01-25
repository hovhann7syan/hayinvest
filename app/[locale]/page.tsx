"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// 👇 ИМПОРТЫ КОМПОНЕНТОВ
import CryptoTicker from '../../components/CryptoTicker';
import StatsSection from '../../components/StatsSection';
import AdBanner from '../../components/AdBanner'; 
import Newsletter from '../../components/Newsletter'; 

export default function IndexPage() {
  const t = useTranslations('Index');

  // Анимация
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <main className="relative w-full min-h-screen flex flex-col bg-[#050505] text-white overflow-x-hidden selection:bg-green-500/30 selection:text-green-200">
      
      {/* --- ГЛОБАЛЬНАЯ СЕТКА --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]" 
           style={{ 
             backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 container mx-auto px-6 pt-32 pb-24 flex flex-col justify-center min-h-[90vh]">
        
        {/* Технический статус */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 text-[10px] font-mono tracking-[0.3em] text-gray-500 mb-8 border-l border-green-500 pl-4 uppercase"
        >
          <span>{t('sys_online')}</span>
          <span className="text-green-500">//</span>
          <span>V.4.0.2</span>
          <span className="text-green-500">//</span>
          <span className="animate-pulse text-green-400">{t('conn_established')}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600"
        >
          {t('hero_title_1')} <br />
          <span className="outline-text text-white/10">{t('hero_title_2')}</span> <br />
          {t('hero_title_3')}
        </motion.h1>

        <div className="flex flex-col md:flex-row items-end justify-between gap-10 border-t border-white/10 pt-8 mt-4">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.raw('hero_desc') }} 
          />

          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.6 }}
             className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
          >
            <Link href="/airdrops" className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-green-400 transition-colors text-center">
              <span className="relative z-10">{t('btn_access')}</span>
              <div className="absolute inset-0 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
            <a href="https://t.me/hayinvest" target="_blank" className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-colors text-center">
              {t('btn_network')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- TICKER --- */}
      <div className="border-y border-white/10 bg-black/50 backdrop-blur-sm">
        <CryptoTicker />
      </div>

      <AdBanner />

      {/* --- THE GRID (BENTO) --- */}
      <section className="relative z-10 container mx-auto px-4 py-24">
        
        <div className="flex items-end justify-between mb-12">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">{t('ecosystem_title')}</h2>
             <div className="h-1 w-20 bg-green-500"></div>
          </div>
          <div className="hidden md:block text-right font-mono text-xs text-gray-500">
            <p>{t('sector_status')}</p>
          </div>
        </div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-1"
        >
          
          {/* 1. ALPHA PROTOCOLS */}
          <motion.div variants={itemVars} className="group md:col-span-2 relative h-[320px] bg-[#0f0f0f] border border-white/5 hover:border-green-500/50 transition-all duration-300 overflow-hidden">
             <div className="absolute inset-0 opacity-20 pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
             </div>
             
             <Link href="/airdrops" className="block h-full w-full p-8 flex flex-col justify-between relative z-20">
                <div className="flex justify-between items-start">
                   <div className="p-2 border border-green-500/30 text-green-500 rounded-sm bg-green-900/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" /></svg>
                   </div>
                   <span className="font-mono text-[10px] text-green-500/50 border border-green-500/20 px-2 py-1 rounded">MOD_01 // {t('mod_alpha_tag')}</span>
                </div>
                
                <div className="absolute right-8 top-20 text-right hidden md:block">
                   <div className="flex flex-col gap-1">
                      <div className="h-1 w-24 bg-white/10 rounded overflow-hidden">
                        <div className="h-full w-[70%] bg-green-500/50"></div>
                      </div>
                      <span className="text-[9px] font-mono text-gray-500">YIELD: OPTIMAL</span>
                   </div>
                </div>

                <div>
                   <h3 className="text-3xl font-bold mb-1 group-hover:text-green-400 transition-colors">{t('mod_alpha_title')}</h3>
                   <p className="text-gray-400 text-sm max-w-sm">{t('mod_alpha_desc')}</p>
                </div>
             </Link>
          </motion.div>

          {/* 2. ACADEMY */}
          <motion.div variants={itemVars} className="group relative h-[320px] bg-[#0f0f0f] border border-white/5 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none font-mono text-[8px] text-blue-300 leading-tight text-right">
                01001000 01100001<br/>01111001 01001001<br/>01101110 01110110<br/>01100101 01110011<br/>01110100 00100000<br/>PROT_SEQ_INIT...
             </div>

             <Link href="/academy" className="block h-full w-full p-8 flex flex-col justify-between relative z-20">
                <div className="flex justify-between items-start">
                   <div className="p-2 border border-blue-500/30 text-blue-500 rounded-sm bg-blue-900/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                   </div>
                   <span className="font-mono text-[10px] text-gray-600">MOD_02</span>
                </div>
                
                <div className="space-y-2 mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                      <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                      <span>DeFi_101.pdf</span>
                   </div>
                   <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                      <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                      <span>Smart_Contracts.sol</span>
                   </div>
                   <div className="w-full h-[1px] bg-white/10"></div>
                </div>

                <div>
                   <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors">{t('mod_academy_title')}</h3>
                   <p className="text-gray-400 text-xs">{t('mod_academy_desc')}</p>
                </div>
             </Link>
          </motion.div>

          {/* 3. EVENTS */}
          <motion.div variants={itemVars} className="group relative h-[320px] bg-[#0f0f0f] border border-white/5 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-purple-500/10 rounded-full flex items-center justify-center opacity-30">
                <div className="w-28 h-28 border border-purple-500/20 rounded-full"></div>
                <div className="absolute w-full h-[1px] bg-purple-500/10 rotate-45"></div>
                <div className="absolute w-full h-[1px] bg-purple-500/10 -rotate-45"></div>
             </div>

             <Link href="/events" className="block h-full w-full p-8 flex flex-col justify-between relative z-20">
                <div className="flex justify-between items-start">
                   <div className="p-2 border border-purple-500/30 text-purple-500 rounded-sm bg-purple-900/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0h18M5.25 12h13.5h-13.5Zm1.5 3.75h2.25H6.75Zm4.5 0h2.25h-2.25Zm4.5 0h2.25h-2.25Z" /></svg>
                   </div>
                   <span className="font-mono text-[10px] text-gray-600">MOD_03</span>
                </div>

                <div className="text-[10px] font-mono text-purple-400/60 text-right">
                   <p>NEXT_MEETUP: T-MINUS</p>
                   <p>LOC: 40.1792° N</p>
                </div>

                <div>
                   <h3 className="text-2xl font-bold mb-1 group-hover:text-purple-400 transition-colors">{t('mod_events_title')}</h3>
                   <p className="text-gray-400 text-xs">{t('mod_events_desc')}</p>
                </div>
             </Link>
          </motion.div>

           {/* 4. NETWORK */}
           <motion.div variants={itemVars} className="group md:col-span-2 relative h-[320px] bg-[#0f0f0f] border border-white/5 hover:border-white/50 transition-all duration-300 overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-20 opacity-20 flex items-end gap-1 px-8 pointer-events-none">
               {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-1 bg-green-500/50" style={{ height: `${Math.random() * 100}%` }}></div>
               ))}
            </div>

            <a href="https://t.me/hayinvest" target="_blank" className="block h-full w-full p-8 flex items-center justify-between relative z-20">
               <div>
                  <div className="inline-flex items-center gap-2 mb-4 px-2 py-1 bg-green-900/20 border border-green-500/20 rounded">
                     <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                     <span className="font-mono text-[9px] text-green-400 tracking-wider">{t('mod_network_signal')}</span>
                  </div>
                  <h3 className="text-4xl font-bold mb-2 text-white">{t('mod_network_title')}</h3>
                  <p className="text-gray-400 max-w-md text-sm">{t('mod_network_desc')}</p>
                  
                  <div className="mt-6 flex items-center gap-4 text-xs font-mono text-gray-500">
                     <span>NODES: 5,231</span>
                     <span className="text-green-500/50">///</span>
                     <span>LATENCY: 12ms</span>
                  </div>
               </div>
               
               <div className="w-24 h-24 border border-dashed border-white/30 rounded-full flex items-center justify-center group-hover:border-white group-hover:rotate-90 transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-green-500/5 rounded-full blur-xl group-hover:bg-green-500/10 transition-colors"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
               </div>
            </a>
          </motion.div>

        </motion.div>
      </section>

      <StatsSection />
      <Newsletter />

    </main>
  );
}