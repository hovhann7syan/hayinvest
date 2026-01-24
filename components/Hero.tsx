"use client";
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('Index'); // Убедись, что в en.json есть ключи

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-obsidian-900 text-white pt-20">
      
      {/* 1. ФОНОВЫЕ ЭФФЕКТЫ (AURORA) - Легкие div-ы вместо Canvas */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Фиолетовое пятно */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-70"></div>
        {/* Синее пятно */}
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 opacity-60"></div>
        {/* Розовое пятно снизу */}
        <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-pink-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000 opacity-50"></div>
      </div>

      {/* 2. КОНТЕНТ (Поверх фона) */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        
        {/* Бейдж сверху */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">
            The #1 Crypto Hub in Armenia
          </span>
        </motion.div>

        {/* Заголовок */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight mb-6 font-sans bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
        >
          THE FUTURE OF <br className="hidden md:block" />
          <span className="text-white drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            WEB3 INVESTING
          </span>
        </motion.h1>

        {/* Описание */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
        >
          Join the most influential crypto community. Access exclusive airdrops, local events, and premium education.
        </motion.p>

        {/* Кнопки */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          {/* Главная кнопка */}
          <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Start Exploring
          </button>
          
          {/* Вторичная кнопка */}
          <button className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-medium rounded-xl hover:bg-white/10 transition-colors">
            View Events
          </button>
        </motion.div>
      </div>
      
      {/* 3. Декоративная сетка внизу (Bento намек) */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-obsidian-900 to-transparent z-20 pointer-events-none"></div>
      
    </section>
  );
}