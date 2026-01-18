"use client";

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Scene3D from './Scene3D';
import { useRef } from 'react';

export default function Hero() {
  const t = useTranslations('Hero');
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // --- 🌊 НАСТРОЙКИ ФИЗИКИ ---
  const physics = { stiffness: 50, damping: 20, mass: 1 };

  // --- 1. ПАРАЛЛАКС ФОНА ---
  const sceneYRaw = useTransform(scrollY, [0, 1000], [0, 100]); 
  const sceneOpacityRaw = useTransform(scrollY, [0, 500], [1, 0]);
  const sceneY = useSpring(sceneYRaw, physics);
  const sceneOpacity = useSpring(sceneOpacityRaw, physics);

  // --- 2. ПАРАЛЛАКС КОНТЕНТА ---
  const textYRaw = useTransform(scrollY, [0, 1000], [0, 300]);
  const textOpacityRaw = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useSpring(textYRaw, physics);
  const textOpacity = useSpring(textOpacityRaw, physics);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#010003] perspective-[1200px]"
    >
      
      {/* --- СЛОЙ 1: 3D ФОН --- */}
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        style={{ y: sceneY, opacity: sceneOpacity, scale: 1.05 }}
      >
        <Scene3D />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#010003] to-transparent" />
      </motion.div>

      {/* --- СЛОЙ 2: ВИНЬЕТКА --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#010003_120%)] pointer-events-none z-[1]" />

      {/* --- СЛОЙ 3: КОНТЕНТ --- */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center justify-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        
        {/* СТАТУС */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-xl shadow-lg"
        >
           <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50 duration-1000"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-gray-400">
            {t('badge')}
          </span>
        </motion.div>

        {/* ЗАГОЛОВОК (ИСПРАВЛЕННЫЙ) */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 tracking-tighter leading-[0.95] select-none relative font-sans drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
          <motion.span
             initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
             animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
             transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
             className="block"
          >
            {/* 1. Верхняя строка: WELCOME TO */}
            {t('welcome')} <br />
            
            {/* 2. Нижняя строка: HAYINVEST (Градиент) */}
            {/* 👇 УБРАЛ СЛОВО ECOSYSTEM, теперь текст берется из JSON */}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600">
                {t('title')} 
            </span>
          </motion.span>
        </h1>

        {/* ПОДЗАГОЛОВОК */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-mono font-medium tracking-widest uppercase opacity-80"
        >
          {t('subtitle')}
        </motion.p>

        {/* КНОПКИ */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
           className="flex flex-col md:flex-row items-center justify-center gap-4 w-full"
        >
            <a href="https://t.me/hay_invest" target="_blank" className="group relative w-full md:w-auto min-w-[200px] px-6 py-4 bg-white overflow-hidden text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <div className="absolute inset-0 w-full h-full bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 text-black group-hover:text-white font-mono font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors duration-500">
                    {t('channel')}
                </span>
            </a>
            
            <a href="https://t.me/hayinvest_chat" target="_blank" className="group w-full md:w-auto min-w-[200px] px-6 py-4 border border-white/20 hover:border-white/40 bg-transparent hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
              <span className="text-gray-300 group-hover:text-white font-mono font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors duration-300">
                  {t('team')}
              </span>
              <span className="text-gray-500 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1 text-xs">
                  →
              </span>
            </a>
        </motion.div>

      </motion.div>
    </section>
  );
}