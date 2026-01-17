"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-20 bg-white dark:bg-[#0a0b0d] overflow-hidden">
      {/* Элемент в стиле BUCK: Абстрактное фиолетовое свечение на фоне */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#6366f1] opacity-10 blur-[120px] rounded-full" />
      
      <div className="max-w-5xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gray-100 dark:bg-[#1e2025] border border-gray-200 dark:border-gray-800"
        >
          <span className="text-sm font-medium text-[#6366f1]">
            🇦🇲 No.1 Crypto Community in Armenia
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-gray-900 dark:text-white"
        >
          Hunt Airdrops. <br />
          <span className="text-[#6366f1]">Earn Together.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed"
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
          <a
            href="https://t.me/hay_invest"
            target="_blank"
            className="px-8 py-4 bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/20"
          >
            Join Telegram
          </a>
          <a
            href="#airdrops"
            className="px-8 py-4 bg-transparent border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-2xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-[#1e2025] transition-all"
          >
            Active Drops
          </a>
        </motion.div>
      </div>

      {/* Тонкая линия в стиле Coinbase внизу секции */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
    </section>
  );
}