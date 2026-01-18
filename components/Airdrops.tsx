import { useTranslations } from 'next-intl';
import Link from 'next/link';

// Обновленный список проектов: Gradient, Nexus, Hot Wallet
const airdrops = [
  {
    title: "Gradient AI",
    descKey: "gradient_desc", 
    status: "Active Farming",
    color: "from-orange-400 to-pink-500", // Оранжево-розовый
    potential: "$$$$"
  },
  {
    title: "Nexus",
    descKey: "nexus_desc",
    status: "Beta Node",
    color: "from-cyan-500 to-blue-600", // Технологичный синий/циан
    potential: "$$$$$"
  },
  {
    title: "Hot Wallet",
    descKey: "hot_desc",
    status: "Mining",
    color: "from-yellow-400 to-red-500", // Огненный (HOT)
    potential: "$$$"
  }
];

export default function Airdrops() {
  const t = useTranslations('Airdrops');

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        
        {/* Шапка с кнопкой справа */}
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
            
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    {t('title').split(' ')[0]} <span className="text-indigo-400">{t('title').split(' ').slice(1).join(' ')}</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    {t('subtitle')}
                </p>
            </div>

            <Link 
                href="/airdrops" 
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300"
            >
                <span className="text-sm font-mono font-bold uppercase tracking-widest text-gray-300 group-hover:text-white">
                    {t('viewAll')}
                </span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </Link>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {airdrops.map((drop, index) => (
            <div 
                key={index} 
                className="group relative p-8 rounded-2xl bg-[#0a0b0d] border border-white/5 hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
            >
                {/* Фоновый градиент при наведении */}
                <div className={`absolute inset-0 bg-gradient-to-br ${drop.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div>
                    {/* Иконка и статус */}
                    <div className="flex justify-between items-start mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${drop.color} shadow-lg shadow-${drop.color.split('-')[1]}-500/20`} />
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono border border-white/10 bg-white/5 text-gray-400 uppercase tracking-wider">
                            {drop.status}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{drop.title}</h3>
                    
                    {/* Описание подтягивается из JSON */}
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                       {t(drop.descKey)}
                    </p>
                </div>

                {/* Потенциал */}
                <div className="flex justify-between items-center pt-6 border-t border-white/5 mt-auto">
                    <span className="text-xs text-gray-500 font-mono">Potential:</span>
                    <span className="text-green-400 font-mono font-bold tracking-widest text-sm drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">
                        {drop.potential}
                    </span>
                </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}