"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Список монет для тикера
const COINS = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum' },
  { id: 'solana', symbol: 'SOL', name: 'Solana' },
  { id: 'near', symbol: 'NEAR', name: 'NEAR Protocol' },
  { id: 'toncoin', symbol: 'TON', name: 'Toncoin' },
  { id: 'cardano', symbol: 'ADA', name: 'Cardano' },
  { id: 'ripple', symbol: 'XRP', name: 'XRP' },
  { id: 'dogecoin', symbol: 'DOGE', name: 'Dogecoin' },
];

// Запасные цены (если API заблокирует нас)
const FALLBACK_PRICES: Record<string, { usd: number; usd_24h_change: number }> = {
  bitcoin: { usd: 64200, usd_24h_change: 2.5 },
  ethereum: { usd: 3450, usd_24h_change: 1.2 },
  solana: { usd: 145, usd_24h_change: 5.4 },
  near: { usd: 7.2, usd_24h_change: -1.5 },
  toncoin: { usd: 6.8, usd_24h_change: 3.1 },
  cardano: { usd: 0.45, usd_24h_change: 0.5 },
  ripple: { usd: 0.61, usd_24h_change: -0.2 },
  dogecoin: { usd: 0.16, usd_24h_change: 4.0 },
};

export default function CryptoTicker() {
  const [prices, setPrices] = useState<Record<string, { usd: number; usd_24h_change: number }>>(FALLBACK_PRICES);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const ids = COINS.map(c => c.id).join(',');
        
        // Пытаемся получить реальные цены
        const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`);
        
        if (!res.ok) {
          throw new Error('API Rate Limit or Error');
        }

        const data = await res.json();
        setPrices(data);
        
      } catch (error) {
        // Если ошибка — просто используем запасные данные и не ломаем сайт
        console.warn("⚠️ CryptoTicker: API недоступен, используем резервные данные.");
        setPrices(FALLBACK_PRICES); 
      }
    };

    fetchPrices();
    
    // Обновляем раз в 60 секунд, чтобы не спамить API
    const interval = setInterval(fetchPrices, 60000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-3 flex items-center">
      {/* Бегущая строка (дублируем контент для бесконечности) */}
      <motion.div 
        className="flex gap-12 items-center"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Скорость бегущей строки
        }}
      >
        {/* Рендерим 3 раза, чтобы заполнить широкий экран без дырок */}
        {[...COINS, ...COINS, ...COINS].map((coin, i) => {
          const priceData = prices[coin.id] || { usd: 0, usd_24h_change: 0 };
          const isPositive = priceData.usd_24h_change >= 0;

          return (
            <div key={`${coin.id}-${i}`} className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider">
              <span className="text-gray-400 font-bold">{coin.symbol}</span>
              <span className="text-white">${priceData.usd.toLocaleString()}</span>
              <span className={`flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? '▲' : '▼'} {Math.abs(priceData.usd_24h_change).toFixed(2)}%
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}