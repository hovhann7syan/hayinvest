"use client";

import { useTranslations } from 'next-intl';
import { motion, Variants } from "framer-motion";
import Link from 'next/link';
import { useState } from 'react'; // Добавили для копирования
import AdBanner from '../../../components/AdBanner';

// --- ДАННЫЕ ПРОЕКТОВ ---
const projects = [
  {
    id: "gradient",
    title: "Gradient AI",
    mod_id: "MOD_01",
    descKey: "gradient_desc",
    status: "Active Farming",
    network: "Solana",
    cost: "Free",
    potential: "$$$$",
    color: "from-purple-500 to-indigo-600",
    accent: "border-purple-500/30 text-purple-400",
    link: "https://gradient.network/",
    tgLink: "https://t.me/hay_invest/780"
  },
  {
    id: "nexus",
    title: "Nexus",
    mod_id: "MOD_02",
    descKey: "nexus_desc",
    status: "Beta Node",
    network: "Nexus Chain",
    cost: "Free (VPS optional)",
    potential: "$$$$$",
    color: "from-cyan-500 to-blue-600",
    accent: "border-cyan-500/30 text-cyan-400",
    link: "https://app.nexus.xyz/",
    tgLink: "https://t.me/hay_invest/781"
  },
  {
    id: "hot",
    title: "Hot Wallet",
    mod_id: "MOD_03",
    descKey: "hot_desc",
    status: "Mining",
    network: "NEAR",
    cost: "Free (Gas)",
    potential: "$$$",
    color: "from-orange-500 to-red-600",
    accent: "border-orange-500/30 text-orange-400",
    link: "https://t.me/herewalletbot/app?startapp=2099669-village-200969",
    tgLink: "https://t.me/hay_invest/785"
  },
  // 👇 НОВЫЙ ПРОЕКТ: GRASS
  {
    id: "grass",
    title: "Grass AI",
    mod_id: "MOD_04",
    descKey: "grass_desc",
    status: "DePIN Mining",
    network: "Solana",
    cost: "Free",
    potential: "$$$$",
    color: "from-green-500 to-emerald-600", // Зеленый стиль
    accent: "border-green-500/30 text-green-400",
    link: "https://app.grass.io/register/?referralCode=8zVh0F9eGX2kxDv",
    tgLink: "https://t.me/MiningArmenia/21" // Ссылка на гайд
  },
  // 👇 НОВЫЙ ПРОЕКТ: DAWN (С реф кодом)
  {
    id: "dawn",
    title: "Dawn Internet",
    mod_id: "MOD_05",
    descKey: "dawn_desc",
    status: "Extension Node",
    network: "Solana",
    cost: "Free",
    potential: "$$$$$",
    color: "from-amber-400 to-orange-600", // Оранжевый стиль
    accent: "border-amber-500/30 text-amber-400",
    link: "https://chromewebstore.google.com/detail/dawn-validator-chrome-ext/fpdkjdnhkakefebpekbdhillbhonfjjp?authuser=0&hl=en",
    tgLink: "https://t.me/hay_invest", 
    referralCode: "r1mmjqln" // 👈 ВАЖНО: Реферальный код
  }
];

// --- АНИМАЦИИ ---
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function AirdropsPage() {
  const t = useTranslations('Airdrops');
  const tPage = useTranslations('AirdropsPage');

  // Логика копирования кода
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Можно добавить уведомление (toast), но пока просто скопируем
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative bg-[#050505] overflow-x-hidden text-white selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Глобальная сетка */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.1]" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>

      <div className="container mx-auto relative z-10 max-w-5xl">
        
        {/* ЗАГОЛОВОК СТРАНИЦЫ */}
        <div className="mb-16 border-b border-white/10 pb-8">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex items-center gap-4 text-[10px] font-mono tracking-[0.3em] text-gray-500 mb-6 uppercase"
           >
             <span>SECURE DATABASE</span>
             <span className="text-purple-500">//</span>
             <span>ACCESS: GRANTED</span>
           </motion.div>

           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-white uppercase"
           >
             {tPage('title')}
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-gray-400 text-lg md:text-xl font-light max-w-2xl"
           >
             {tPage('subtitle')}
           </motion.p>
        </div>

        {/* БАННЕР */}
        <div className="mb-20">
          <AdBanner />
        </div>

        {/* СПИСОК ПРОЕКТОВ */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-4"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              className="group relative bg-[#0a0b0d] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* Линия статуса слева */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${project.color}`} />
              
              <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 relative z-10">
                
                {/* ЛЕВАЯ КОЛОНКА: ИНФО */}
                <div className="flex-1">
                  
                  {/* Технический хедер */}
                  <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                     <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-mono uppercase px-2 py-1 border rounded ${project.accent} bg-white/5`}>
                           {project.status}
                        </span>
                     </div>
                     <span className="text-[10px] font-mono text-gray-600 tracking-widest uppercase hidden sm:block">
                        ID: {project.mod_id}
                     </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h2>
                  
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-2xl font-light">
                    {t(project.descKey)}
                  </p>

                  {/* Метрики */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-xs font-mono border-t border-white/5 pt-6">
                    <div>
                       <div className="text-gray-600 uppercase mb-1">{tPage('chain')}</div>
                       <div className="text-white">{project.network}</div>
                    </div>
                    <div>
                       <div className="text-gray-600 uppercase mb-1">{tPage('cost')}</div>
                       <div className="text-white">{project.cost}</div>
                    </div>
                    <div>
                       <div className="text-gray-600 uppercase mb-1">{tPage('potential')}</div>
                       <div className="text-green-400 font-bold text-sm tracking-widest">{project.potential}</div>
                    </div>
                  </div>
                </div>

                {/* ПРАВАЯ КОЛОНКА: КНОПКИ И КОД */}
                <div className="flex flex-col justify-end gap-3 md:w-56 shrink-0">
                   
                   {/* ⚠️ СПЕЦИАЛЬНЫЙ БЛОК ДЛЯ РЕФ. КОДА (Только для Dawn) */}
                   {project.referralCode && (
                     <div 
                        onClick={() => copyToClipboard(project.referralCode!)}
                        className="mb-2 p-3 border border-dashed border-white/20 rounded bg-white/5 hover:bg-white/10 hover:border-white/40 cursor-pointer transition-all flex flex-col items-center gap-1 group/code"
                     >
                        <span className="text-[9px] text-gray-500 uppercase font-mono">Referral Code</span>
                        <div className="flex items-center gap-2">
                           <code className="text-lg font-mono font-bold text-amber-400 tracking-wider">{project.referralCode}</code>
                           {/* Иконка копирования */}
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500 group-hover/code:text-white transition-colors">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5" />
                           </svg>
                        </div>
                        <span className="text-[8px] text-green-400 opacity-0 group-active/code:opacity-100 transition-opacity absolute top-1 right-2">COPIED!</span>
                     </div>
                   )}

                   {/* КНОПКА 1: INITIATE */}
                   <Link 
                     href={project.link}
                     target="_blank"
                     className="group/btn relative w-full px-6 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest text-center hover:bg-purple-500 hover:text-white transition-all overflow-hidden"
                   >
                     <span className="relative z-10 flex items-center justify-center gap-2">
                       {tPage('action')} 
                       <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                     </span>
                   </Link>

                   {/* КНОПКА 2: MANUAL */}
                   <Link 
                     href={project.tgLink}
                     target="_blank"
                     className="w-full px-4 py-3 border border-white/10 text-[10px] font-mono uppercase text-gray-500 text-center hover:border-white/30 hover:text-white transition-colors flex items-center justify-center gap-2"
                   >
                     <span className="w-3 h-3 border border-current rounded-full flex items-center justify-center text-[8px]">i</span>
                     {tPage('learnMore')}
                   </Link>

                </div>

              </div>

              {/* Фоновое свечение */}
              <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${project.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />

            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}