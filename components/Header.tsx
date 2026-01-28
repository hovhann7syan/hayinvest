"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "../navigation"; // Используем нашу навигацию
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const t = useTranslations('Index'); // Или 'Navigation', зависит от твоего словаря
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Блокируем прокрутку сайта, когда меню открыто
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Закрываем меню при переходе на другую страницу
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Airdrops', href: '/airdrops' },
    { name: 'Events', href: '/events' },
    { name: 'Academy', href: '/academy' },
    { name: 'Careers', href: '/careers' }, // Если карьеры пока нет, убери
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-all duration-300 py-6 px-6 md:px-12 flex justify-between items-center backdrop-blur-sm bg-black/10 border-b border-white/5">
        
        {/* 1. ЛОГОТИП */}
        <Link href="/" className="relative z-50 font-black text-2xl tracking-tighter text-white hover:text-purple-400 transition-colors">
          HAY<span className="text-gray-500">INVEST</span>
        </Link>

        {/* 2. ДЕСКТОПНОЕ МЕНЮ (Скрыто на мобильных md:hidden) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. КНОПКА ЯЗЫКА И TELEGRAM (Десктоп) */}
        <div className="hidden md:flex items-center gap-6">
           <span className="text-xs font-bold text-gray-500">EN ▼</span>
           <a 
             href="https://t.me/hayinvest" 
             target="_blank"
             className="px-6 py-2 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-purple-500 hover:text-white transition-all"
           >
             Telegram
           </a>
        </div>

        {/* 4. МОБИЛЬНАЯ КНОПКА (БУРГЕР) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="relative z-50 md:hidden w-10 h-10 flex flex-col justify-center items-end gap-1.5 group"
        >
          {/* Верхняя палочка */}
          <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-8 rotate-45 translate-y-2" : "w-8 group-hover:w-10"}`}></span>
          {/* Средняя палочка */}
          <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-8 opacity-0" : "w-6 group-hover:w-10"}`}></span>
          {/* Нижняя палочка */}
          <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-8 -rotate-45 -translate-y-2.5" : "w-4 group-hover:w-10"}`}></span>
        </button>

      </header>

      {/* 5. МОБИЛЬНОЕ МЕНЮ (ПОЛНОЭКРАННОЕ) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#020202]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {/* Фоновый эффект для красоты */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>

            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Link 
                  href={link.href} 
                  className="text-3xl font-black tracking-tighter text-white hover:text-purple-500 transition-colors uppercase"
                  onClick={() => setIsOpen(false)} // Закрываем при клике
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Мобильная кнопка Telegram */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="mt-8"
            >
               <a 
                 href="https://t.me/hayinvest" 
                 target="_blank"
                 className="px-10 py-4 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all"
               >
                 Join Telegram
               </a>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}