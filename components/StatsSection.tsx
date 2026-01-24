"use client";

import { useTranslations } from 'next-intl';

export default function StatsSection() {
  const t = useTranslations('Index');

  // 👇 ТЕПЕРЬ ТУТ КАРТИНКИ (PNG), А НЕ ВЕКТОРЫ
  const chains = [
    { name: "Ethereum", img: "/chains/ethereum.png" },
    { name: "Solana",   img: "/chains/solana.png" },
    { name: "Aptos",    img: "/chains/aptos.png" },
    { name: "NEAR",     img: "/chains/near.png" },
    { name: "TON",      img: "/chains/ton.png" }
  ];

  return (
    <section className="relative border-t border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        
        {/* ЗАГОЛОВОК */}
        <div className="text-center mb-12">
           <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
             Researching Ecosystems
           </span>
        </div>

        {/* ЛОГОТИПЫ */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20">
          {chains.map((chain, index) => (
            <div 
              key={index} 
              className="group flex items-center justify-center transition-all duration-500"
              title={chain.name}
            >
              <img 
                src={chain.img} 
                alt={chain.name}
                // grayscale = черно-белый
                // hover:grayscale-0 = цветной при наведении
                className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* СТАТИСТИКА */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-white/5 pt-10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Projects Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">$0</div>
            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Entry Cost</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Alpha Alerts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Community Driven</div>
          </div>
        </div>

      </div>
    </section>
  );
}