"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Данные партнеров с реальными ссылками
const PARTNERS = [
  { 
    name: "OKX", 
    file: "okx.png", 
    tier: "STRATEGIC PARTNER",
    href: "https://www.okx.com/join/HAYINVEST",
    width: 140 
  },
  { 
    name: "BUTURE", 
    file: "buture.png", 
    tier: "TRUSTED EXCHANGE",
    href: "https://t.me/buture_exchange",
    width: 130
  },
  { 
    name: "PROFIT TRIUMPH", 
    file: "profit.png", 
    tier: "TRADING SCHOOL",
    href: "https://instagram.com/profit_triumph",
    width: 95
  },
  { 
    name: "VEH BRAND", 
    file: "veh.png", 
    tier: "OFFICIAL MERCH",
    href: "https://instagram.com/vehbrand",
    width: 130
  }
];

export default function Partners() {
  return (
    <section className="relative z-10 container mx-auto px-6 py-24 border-t border-white/5">
      
      {/* Заголовок секции */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">
            TRUSTED PARTNERS
          </h2>
          <div className="h-1 w-20 bg-green-500"></div>
        </div>
        <p className="text-gray-500 text-sm font-mono max-w-md text-right uppercase tracking-wider">
          Collaborating with industry leaders to build the decentralized future.
        </p>
      </div>

      {/* Сетка логотипов */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-lg">
        {PARTNERS.map((partner, i) => (
          <Link 
            key={i} 
            href={partner.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full h-full" // Делаем ссылку блочной
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-48 bg-[#020202] hover:bg-[#080808] transition-colors duration-500 flex flex-col items-center justify-center gap-6 p-8 cursor-pointer"
            >
              {/* Эффект свечения фона при наведении */}
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-500"></div>

              {/* Логотип */}
              <div className="relative z-10 w-full h-16 flex items-center justify-center">
                <Image 
                  src={`/partners/${partner.file}`}
                  alt={partner.name}
                  width={partner.width} 
                  height={60}
                  className="
                    object-contain 
                    opacity-40 grayscale transition-all duration-500 
                    group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110
                  "
                />
              </div>

              {/* Текстовая подпись (Tier) */}
              <div className="absolute bottom-6 text-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-[10px] text-green-500/80 font-mono tracking-widest uppercase">
                  {partner.tier}
                </p>
              </div>

              {/* Иконка внешней ссылки (появляется при наведении) */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-white/50">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5 19.5 4.5m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Кнопка "Стать партнером" */}
      <div className="mt-16 flex justify-center">
        <Link 
          href="https://t.me/hovhann7syan" 
          target="_blank"
          className="group flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-green-500/50 rounded bg-white/5 hover:bg-green-500/10 transition-all duration-300"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-gray-300 group-hover:text-white">BECOME A PARTNER</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500 group-hover:text-green-500 group-hover:translate-x-1 transition-all">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

    </section>
  );
}