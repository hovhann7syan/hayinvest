"use client";

import { motion } from "framer-motion";

// Данные для карточек (потом поменяешь на свои)
const projects = [
  {
    title: "Gradient AI",
    status: "Active Farming",
    potential: "$$$$",
    description: "Աշխարհի առաջին դեցենտրալիզացված AI միջավայրը։ Միացրու համակարգիչը, հավաքիր point-եր և ստացիր token-ներ։",
    color: "from-orange-400 to-pink-600", // Яркий градиент под их стиль
    link: "https://app.gradient.network/signup?code=5N0GTU" // Твоя рефка
  },
  {
    title: "LayerZero",
    status: "Confirmed",
    potential: "$$$",
    description: "Омничейн протокол для передачи сообщений между блокчейнами.",
    color: "from-gray-700 to-gray-900",
    link: "#"
  },
  {
    title: "ZkSync Era",
    status: "Mainnet",
    potential: "$$$$$",
    description: "L2 решение на базе ZK-Rollups для масштабирования Ethereum.",
    color: "from-blue-500 to-cyan-500",
    link: "#"
  },
];

export default function Airdrops() {
  return (
    <section id="airdrops" className="py-20 px-6 md:px-20 relative">
      
      {/* Заголовок секции */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Active <span className="text-indigo-500">Airdrops</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Актуальные проекты, в которых мы активничаем прямо сейчас.
        </p>
      </motion.div>

      {/* Сетка карточек */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-6 rounded-2xl bg-[#12141a] border border-white/5 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Неоновое свечение при наведении */}
            <div className="absolute inset-0 bg-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

            {/* Контент карточки */}
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                {/* Иконка-заглушка с градиентом */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} shadow-lg`} />
                
                {/* Бейдж статуса */}
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-sm text-gray-500">Potential:</span>
                <span className="text-green-400 font-bold tracking-widest">{project.potential}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}