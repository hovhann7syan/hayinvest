"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher'; 
import { useState, useEffect } from 'react';

export default function Header() {
  const t = useTranslations('Navigation');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'airdrops', href: '/airdrops' },
    { key: 'events', href: '/events' },
    { key: 'academy', href: '/academy' },
    { key: 'careers', href: '/careers' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-obsidian-900/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-tighter text-white group-hover:text-primary-glow transition-colors">
            HAY<span className="text-gray-400 group-hover:text-white transition-colors">INVEST</span>
          </span>
        </Link>

        {/* DESKTOP NAV (MONOSPACE FONT) */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.key} 
              href={link.href}
              // ИЗМЕНЕНИЯ ЗДЕСЬ: font-mono, text-xs (чуть мельче для стиля), tracking-[0.2em]
              className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all relative group"
            >
              <span className="group-hover:text-primary-glow transition-colors">
                {/* Добавляем символы // для стиля кода при наведении */}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-1 text-primary-glow">//</span>
                {t(link.key)}
              </span>
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a 
            href="https://t.me/hayinvest" 
            target="_blank" 
            className="hidden md:flex items-center gap-2 px-5 py-2 bg-white text-black text-xs font-mono font-bold uppercase tracking-wider rounded-lg hover:bg-primary-glow hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Telegram
          </a>
        </div>
      </div>
    </header>
  );
}