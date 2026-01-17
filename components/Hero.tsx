"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    // Убрал bg-white, оставил прозрачность, чтобы видеть глобальный фон
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-20 overflow-hidden">
      
      {/* Элемент в стиле BUCK: Абстрактное фиолетовое свечение на фоне */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#6366f1] opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#4f46e5] opacity-10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-sm font-medium text-[#8b5cf6]">
            🇦🇲 No.1 Crypto Community in Armenia
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white"
        >
          Hunt Airdrops. <br />
          {/* Градиентный текст для заголовка */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Earn Together.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed"
        >
          Мы находим лучшие Web3 проекты, участвуем в тестнетах и забираем профит. 
          Присоединяйся к команде энтузиастов HayInvest.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          {/* ВОТ ОНА - МАГИЧЕСКАЯ КНОПКА */}
          <a
            href="https://t.me/hay_invest"
            target="_blank"
            className="btn-primary text-lg" 
          >
            Join Telegram
          </a>

          {/* Вторая кнопка - стиль Glassmorphism */}
          <a
            href="#airdrops"
            className="px-8 py-3 flex items-center justify-center border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Active Drops
          </a>
        </motion.div>
      </div>

      {/* Тонкая линия в стиле Coinbase внизу секции */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}