"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl"; 

export default function AdBanner() {
  const locale = useLocale(); // Получаем текущий язык ('en', 'ru', 'hy')
  const [currentIndex, setCurrentIndex] = useState(0);

  // Настройки ссылок для каждого баннера
  const ads = [
    {
      id: 1, // Файлы: banner1en.png, banner1ru.png, banner1hy.png
      link: "https://t.me/hayinvest", 
      alt: "HayInvest Ecosystem"
    },
    {
      id: 2, // Файлы: banner2en.png, banner2ru.png, banner2hy.png
      link: "https://instagram.com/profit_triumph", 
      alt: "Profit Triumph"
    },
    {
      id: 3, // Файлы: banner3en.png, banner3ru.png, banner3hy.png
      link: "https://t.me/hovhann7syan", // Твой контакт
      alt: "Partnership"
    }
  ];

  // Слайдер: переключение каждые 5 секунд
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, [ads.length]);

  return (
    <section className="container mx-auto px-4 mt-12 mb-12">
      
      {/* Контейнер баннера */}
      <div className="relative w-full h-[120px] md:h-[160px] rounded-xl overflow-hidden border border-white/10 shadow-2xl group bg-[#050505]">
        
        {ads.map((ad, index) => (
          <a
            key={ad.id}
            href={ad.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* 👇 ИСПРАВЛЕНИЕ: Убрал 'md:object-fill', оставил только 'object-cover' */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={`/ads/banner${ad.id}${locale}.png`} 
              alt={ad.alt}
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" 
            />
          </a>
        ))}

        {/* Прогресс бар снизу */}
        <div className="absolute bottom-0 left-0 h-1 bg-green-500/50 z-20 transition-all duration-500"
             style={{ width: `${((currentIndex + 1) / ads.length) * 100}%` }}>
        </div>

      </div>
    </section>
  );
}