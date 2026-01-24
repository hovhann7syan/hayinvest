"use client";

import { useEffect, useState } from 'react';

// Список ID монет
const COINS = [
  { id: "bitcoin", symbol: "BTC" },
  { id: "ethereum", symbol: "ETH" },
  { id: "solana", symbol: "SOL" },
  { id: "the-open-network", symbol: "TON" },
  { id: "arbitrum", symbol: "ARB" },
  { id: "optimism", symbol: "OP" },
  { id: "sui", symbol: "SUI" },
  { id: "aptos", symbol: "APT" },
  { id: "matic-network", symbol: "POL" },
  { id: "avalanche-2", symbol: "AVAX" },
  { id: "celestia", symbol: "TIA" }
];

type CoinData = {
  [key: string]: {
    usd: number;
    usd_24h_change: number;
  };
};

export default function CryptoTicker() {
  const [data, setData] = useState<CoinData | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const ids = COINS.map(c => c.id).join(',');
        const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`);
        
        if (!res.ok) {
           return; 
        }
        
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Ticker error:", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  const CoinItem = ({ coin }: { coin: typeof COINS[0] }) => {
    const coinInfo = data ? data[coin.id] : null;

    if (!coinInfo || typeof coinInfo.usd === 'undefined') {
      return (
        <span className="mx-4 md:mx-8 text-[10px] md:text-xs font-medium text-gray-600 animate-pulse cursor-default">
          {coin.symbol} ...
        </span>
      );
    }

    const price = coinInfo.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
    const changeVal = coinInfo.usd_24h_change || 0; 
    const change = changeVal.toFixed(1); // Сократил до 1 знака после запятой
    const isPositive = changeVal >= 0;

    return (
      <div className="mx-4 md:mx-8 flex items-center gap-1.5 text-[10px] md:text-xs font-medium tracking-wider cursor-default">
        <span className="text-gray-400">{coin.symbol}</span>
        <span className="text-white opacity-90">{price}</span>
        <span className={`${isPositive ? 'text-green-400' : 'text-red-500'} text-[9px] md:text-[10px]`}>
          {isPositive ? '↑' : '↓'} {Math.abs(Number(change))}%
        </span>
      </div>
    );
  };

  return (
    // ИЗМЕНЕНИЯ ЗДЕСЬ:
    // py-2 (было py-4) -> тоньше
    // border-white/5 -> очень тонкая граница
    // bg-obsidian-900/80 -> чуть прозрачнее
    <div className="relative w-full bg-obsidian-900/80 backdrop-blur-sm border-y border-white/5 overflow-hidden py-2 select-none z-20">
      
      {/* Маски теперь тоже тоньше */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-obsidian-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-obsidian-900 to-transparent z-10 pointer-events-none"></div>

      <div className="flex whitespace-nowrap overflow-hidden group">
        <div className="flex animate-marquee items-center group-hover:[animation-play-state:paused]">
          {COINS.map((coin) => (
            <CoinItem key={coin.id} coin={coin} />
          ))}
        </div>
        <div className="flex animate-marquee items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
          {COINS.map((coin) => (
            <CoinItem key={`dup-${coin.id}`} coin={coin} />
          ))}
        </div>
      </div>
    </div>
  );
}