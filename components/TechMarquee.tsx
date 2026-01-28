"use client";

import { motion } from 'framer-motion';

const ROW_1 = [
  "SMART CONTRACTS", "WEB3 INFRASTRUCTURE", "DECENTRALIZED STORAGE", 
  "ZK-ROLLUPS", "LIQUID STAKING", "GOVERNANCE", "LAYER 2 SCALING",
  "CROSS-CHAIN", "ORACLES", "VALIDATORS", "TOKENOMICS"
];

const ROW_2 = [
  "NODE RUNNING", "YIELD FARMING", "BLOCKCHAIN ARCHITECTURE", 
  "CRYPTOGRAPHY", "DIGITAL SOVEREIGNTY", "NETWORK SECURITY", "MEMPOOL",
  "ZERO KNOWLEDGE", "EVM COMPATIBILITY", "DEPIN NETWORKS", "HASH RATE"
];

export default function TechMarquee() {
  return (
    // Добавил border-y и темный фон для контраста с соседними секциями
    <section className="py-12 overflow-hidden relative z-10 bg-[#020202] border-y border-white/5">
      
      {/* Виньетка по краям (более глубокая черная) */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none"></div>

      <div className="flex flex-col gap-4">
        {/* --- РЯД 1 (ВЛЕВО) --- */}
        <div className="flex">
          <motion.div 
            className="flex gap-3 flex-nowrap"
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          >
            {[...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1].map((tag, i) => (
              <TagItem key={`r1-${i}`} text={tag} />
            ))}
          </motion.div>
        </div>

        {/* --- РЯД 2 (ВПРАВО) --- */}
        <div className="flex">
          <motion.div 
            className="flex gap-3 flex-nowrap"
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
          >
            {[...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2].map((tag, i) => (
              <TagItem key={`r2-${i}`} text={tag} />
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}

// 👇 НОВЫЙ ДИЗАЙН ТЕГА (Cyber-Minimalist)
function TagItem({ text }: { text: string }) {
  return (
    <div className="
      group
      shrink-0 px-4 py-2
      rounded-sm /* Острые углы */
      border border-white/5 bg-[#080808] /* Очень темный фон */
      text-[10px] font-mono font-medium tracking-[0.2em] text-gray-500 uppercase
      hover:border-green-500/30 hover:text-green-400 hover:bg-green-500/5 /* Зеленый акцент при наведении */
      transition-all duration-300 cursor-default select-none
      flex items-center gap-2
    ">
      {/* Добавляем декоративный слэш для техно-вида */}
      <span className="text-green-800 group-hover:text-green-500 transition-colors">//</span> 
      {text}
    </div>
  );
}