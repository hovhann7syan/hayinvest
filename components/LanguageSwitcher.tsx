"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  // Список языков
  const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "hy", label: "HY" },
  ];

  // Определяем текущий язык из URL (например, /en/...)
  const currentLang = languages.find((lang) => pathname.startsWith(`/${lang.code}`)) || languages[0];

  // Функция смены языка
  const switchLanguage = (locale: string) => {
    // Заменяем текущую локаль в пути на новую
    // Было: /en/about -> Стало: /ru/about
    const newPath = pathname.replace(/^\/(en|ru|hy)/, `/${locale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  // Закрываем меню, если кликнули мимо
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-50" ref={containerRef}>
      
      {/* Кнопка (Текущий язык) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold tracking-widest text-gray-400 hover:text-white border border-transparent hover:border-white/10 transition-all uppercase"
      >
        <span>{currentLang.label}</span>
        {/* Стрелочка */}
        <svg 
            className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Выпадающий список */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-24 bg-[#0a0b0d] border border-white/10 rounded-xl shadow-xl overflow-hidden backdrop-blur-xl"
          >
            <div className="flex flex-col p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLanguage(lang.code)}
                  className={`px-4 py-2 text-xs font-bold tracking-widest text-left rounded-lg transition-colors uppercase ${
                    currentLang.code === lang.code
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}