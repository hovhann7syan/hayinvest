"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-20 overflow-hidden">
      
      {/* ФОНОВЫЕ ЭФФЕКТЫ (НЕОН) */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl z-10">
        {/* БЕЙДЖИК */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-sm font-medium text-indigo-400">
            🇦🇲 No.1 Crypto Community in Armenia
          </span>
        </motion.div>

        {/* ЗАГОЛОВОК */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] text-white mb-6"
        >
          Hunt Airdrops. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Earn Together.
          </span>
        </motion.h1>

        {/* ТЕКСТ */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-10"
        >
          Мы находим лучшие Web3 проекты, участвуем в тестнетах и забираем профит. 
          Присоединяйся к команде энтузиастов HayInvest.
        </motion.p>

        {/* КНОПКИ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://t.me/hay_invest"
            target="_blank"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)]"
          >
            Join Telegram
          </a>

          <a
            href="#airdrops"
            className="px-8 py-4 border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
          >
            Active Drops
          </a>
        </motion.div>
      </div>

      {/* ЛИНИЯ ВНИЗУ */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}