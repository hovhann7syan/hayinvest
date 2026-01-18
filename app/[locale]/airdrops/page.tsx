"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import Link from 'next/link';

// --- ДАННЫЕ ПРОЕКТОВ ---
const projects = [
  {
    id: "gradient",
    title: "Gradient AI",
    descKey: "gradient_desc",
    status: "Active Farming",
    network: "Solana",
    cost: "Free",
    potential: "$$$$",
    color: "from-orange-400 to-pink-500",
    link: "https://gradient.network/",         // Рефералка
    tgLink: "https://t.me/hay_invest/780"      // Пост в TG
  },
  {
    id: "nexus",
    title: "Nexus",
    descKey: "nexus_desc",
    status: "Beta Node",
    network: "Nexus Chain",
    cost: "Free (VPS optional)",
    potential: "$$$$$",
    color: "from-cyan-500 to-blue-600",
    link: "https://app.nexus.xyz/",
    tgLink: "https://t.me/hay_invest/781"
  },
  {
    id: "hot",
    title: "Hot Wallet",
    descKey: "hot_desc",
    status: "Mining",
    network: "NEAR",
    cost: "Free (Gas)",
    potential: "$$$",
    color: "from-yellow-400 to-red-500",
    link: "https://t.me/herewalletbot/app?startapp=2099669-village-200969",
    tgLink: "https://t.me/hay_invest/785"
  }
];

// --- АНИМАЦИИ ---
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function AirdropsPage() {
  const t = useTranslations('Airdrops');      // Описания проектов
  const tPage = useTranslations('AirdropsPage'); // Тексты страницы (кнопки, заголовки)

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative">
      
      {/* Фоновый свет */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto relative z-10 max-w-5xl">
        
        {/* ЗАГОЛОВОК СТРАНИЦЫ */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-4 tracking-tighter"
          >
            {tPage('title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-mono"
          >
            {tPage('subtitle')}
          </motion.p>
        </div>

        {/* СПИСОК ПРОЕКТОВ */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-6"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              className="group relative bg-[#0a0b0d] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
            >
              
              {/* Цветная полоска слева */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${project.color}`} />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* ЛЕВАЯ ЧАСТЬ: Информация */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-mono tracking-wider text-gray-400 border border-white/5">
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Описание */}
                  <p className="text-gray-400 text-sm max-w-2xl leading-relaxed mb-6">
                    {t(project.descKey)}
                  </p>

                  {/* Мета-данные (Сеть, Затраты, Потенциал) */}
                  <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono text-gray-500">
                    <div className="flex items-center gap-2">
                       <span className="text-indigo-400">{tPage('chain')}:</span> 
                       <span className="text-gray-300">{project.network}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="text-indigo-400">{tPage('cost')}:</span> 
                       <span className="text-gray-300">{project.cost}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="text-indigo-400">{tPage('potential')}:</span> 
                       <span className="text-green-400 font-bold">{project.potential}</span>
                    </div>
                  </div>
                </div>

                {/* ПРАВАЯ ЧАСТЬ: Кнопки */}
                <div className="flex flex-col gap-3 shrink-0 min-w-[200px]">
                  
                  {/* 1. Главная кнопка: Начать Фармить */}
                  <Link 
                    href={project.link}
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-black font-bold font-mono text-xs uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all rounded-lg group-hover:scale-105 active:scale-95 text-center shadow-lg"
                  >
                    {tPage('action')}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  {/* 2. Вторая кнопка: Инструкция (TG Post) */}
                  <Link 
                    href={project.tgLink}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-gray-600 hover:text-gray-300 transition-colors"
                  >
                    {/* Иконка "INFO" (буква i в круге) */}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tPage('learnMore')}
                  </Link>

                </div>

              </div>

              {/* Эффект свечения при наведении */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500 pointer-events-none`} />

            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}