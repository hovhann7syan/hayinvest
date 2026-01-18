"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "./LanguageSwitcher"; 

export default function Header() {
  const t = useTranslations('Header');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ zIndex: 9999 }} className="fixed top-0 left-0 right-0 h-20 bg-black border-b border-white/10 flex items-center">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* ЛОГО */}
        <Link href="/" className="block w-32 md:w-40">
            <Image 
              src="/logo-text.png" 
              alt="HAYINVEST" 
              width={200} 
              height={50} 
              className="w-full h-auto"
              priority 
            />
        </Link>

        {/* МЕНЮ */}
        <nav className="hidden md:flex items-center gap-8 text-white text-xs font-sans uppercase tracking-widest">
           <Link href="/airdrops" className="hover:text-indigo-400 transition-colors">{t('airdrops')}</Link>
           <Link href="/fundraising" className="hover:text-indigo-400 transition-colors">{t('investments')}</Link>
           <Link href="/academy" className="hover:text-indigo-400 transition-colors">{t('academy')}</Link>
           <div className="h-4 w-px bg-white/20"></div>
           <LanguageSwitcher />
           <a href="https://t.me/hay_invest" target="_blank" className="border border-white/20 px-4 py-2 hover:bg-white/10">TELEGRAM</a>
        </nav>

        {/* МОБИЛКА */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ВЫПАДАЙКА ДЛЯ МОБИЛКИ */}
      {isOpen && (
        <div className="fixed inset-0 top-20 bg-black p-6 flex flex-col gap-6 text-xl font-sans text-white">
           <Link href="/airdrops" onClick={() => setIsOpen(false)}>AIRDROPS</Link>
           <Link href="/fundraising" onClick={() => setIsOpen(false)}>INVESTMENTS</Link>
           <Link href="/academy" onClick={() => setIsOpen(false)}>ACADEMY</Link>
        </div>
      )}
    </header>
  );
}