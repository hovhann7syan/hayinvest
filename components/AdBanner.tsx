"use client";

import { useState, useEffect } from "react";

export default function AdBanner() {
  // 👇 НАСТРОЙКИ БАННЕРОВ
  const ads = [
    {
      id: 1,
      image: "/ads/banner.png", // Первый баннер
      link: "https://partner.bitget.com/bg/YOUR_LINK", // ⚠️ Твоя рефералка
      alt: "Bitget Partner"
    },
    {
      id: 2,
      image: "/ads/banner1.png", // Второй баннер
      link: "https://t.me/MiningArmenia", // ✅ Ссылка Mining Armenia
      alt: "Mining Armenia"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Слайдер: переключение каждые 5 секунд
  useEffect(() => {
    if (ads.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, [ads.length]);

  if (ads.length === 0) return null;

  return (
    <section className="container mx-auto px-4 mt-10 mb-10">
      
      {/* Контейнер баннера */}
      <div className="relative w-full h-[100px] md:h-[120px] rounded-2xl overflow-hidden border border-white/10 shadow-lg group bg-obsidian-800">
        
        {ads.map((ad, index) => (
          <a
            key={ad.id}
            href={ad.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Картинка */}
            <img 
              src={ad.image} 
              alt={ad.alt}
              className="w-full h-full object-cover md:object-fill" 
            />
          </a>
        ))}

        {/* Плашка "Partner" */}
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-gray-400 uppercase tracking-widest z-20 pointer-events-none border border-white/5">
          Partner
        </div>

      </div>
    </section>
  );
}