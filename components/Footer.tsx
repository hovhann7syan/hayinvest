"use client";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="py-16 border-t border-white/10 bg-[#050505] relative z-10 text-white overflow-hidden">
      
      {/* Фоновая сетка */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- ОСНОВНАЯ СЕТКА --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-20">
          
          {/* 1. ЛОГОТИП */}
          <div className="flex flex-col gap-6 items-start">
            <Link href="/" className="block group">
                <div className="w-14 transition-transform group-hover:scale-105 duration-300">
                    <Image 
                        src="/icon.png" 
                        alt="HayInvest" 
                        width={60} 
                        height={60} 
                        className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    />
                </div>
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-light">
              {t('desc')}
            </p>
            
            <div className="flex items-center gap-2 mt-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">
                    ALL SYSTEMS OPERATIONAL
                </span>
            </div>
          </div>

          {/* 2. СОЦСЕТИ */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-sm font-mono uppercase tracking-widest border-l-2 border-purple-500 pl-3">
                {t('community')}
            </h4>
            
            <div className="flex flex-col gap-3">
              <a href="https://t.me/hay_invest" target="_blank" className="flex items-center gap-4 text-gray-400 hover:text-white transition-all group p-3 rounded-xl border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/10">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500 text-white transition-all">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider">Telegram Channel</span>
              </a>

              <a href="https://x.com/hayinvestt" target="_blank" className="flex items-center gap-4 text-gray-400 hover:text-white transition-all group p-3 rounded-xl border border-white/5 hover:border-white/30 hover:bg-white/10">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider">X (Twitter)</span>
              </a>

              <a href="https://instagram.com/hayinvest" target="_blank" className="flex items-center gap-4 text-gray-400 hover:text-white transition-all group p-3 rounded-xl border border-white/5 hover:border-pink-500/30 hover:bg-pink-500/10">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-pink-500 text-white transition-all">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider">Instagram</span>
              </a>
            </div>
          </div>

          {/* 3. КОНТАКТЫ */}
          <div className="flex flex-col gap-6">
             <h4 className="text-white font-bold text-sm font-mono uppercase tracking-widest border-l-2 border-green-500 pl-3">
                {t('contact')}
             </h4>
             
             <div className="flex flex-col gap-4">
                <a href="https://t.me/hayinvest_admin" target="_blank" className="bg-[#0a0b0d] hover:bg-green-900/10 p-5 rounded-xl border border-white/5 hover:border-green-500/50 transition-all group flex items-center gap-4">
                   <div className="p-3 bg-white/5 rounded-lg text-green-400 group-hover:bg-green-500 group-hover:text-black transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                   </div>
                   <div>
                      <span className="block font-bold text-white font-mono uppercase tracking-wider text-xs mb-1 group-hover:text-green-400 transition-colors">{t('support')}</span>
                      <span className="text-[10px] text-gray-500 font-mono">{t('support_desc')}</span>
                   </div>
                </a>

                <a href="https://t.me/hovhann7syan" target="_blank" className="bg-[#0a0b0d] hover:bg-purple-900/10 p-5 rounded-xl border border-white/5 hover:border-purple-500/50 transition-all group flex items-center gap-4">
                   <div className="p-3 bg-white/5 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                   </div>
                   <div>
                      <span className="block font-bold text-white font-mono uppercase tracking-wider text-xs mb-1 group-hover:text-purple-400 transition-colors">{t('collab')}</span>
                      <span className="text-[10px] text-gray-500 font-mono">{t('collab_desc')}</span>
                   </div>
                </a>
             </div>
          </div>
        </div>

        {/* --- НИЖНЯЯ ПАНЕЛЬ --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* Copyright (ТЕКСТ УВЕЛИЧЕН) */}
            <p className="text-gray-500 text-sm md:text-base font-mono uppercase tracking-widest order-2 md:order-1">
              © 2026 HayInvest. {t('rights')}
            </p>

            {/* POWERED BY SEEN (ОГРОМНЫЙ) */}
            <a 
                href="https://t.me/seengroup_am" 
                target="_blank" 
                className="flex items-center gap-6 opacity-90 hover:opacity-100 transition-all group order-1 md:order-2"
            >
                <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                    {t('powered')}
                </span>
                <div className="relative">
                    <Image 
                        src="/seen-logo.png" 
                        alt="Powered by Seen" 
                        width={600} 
                        height={250} 
                        className="h-24 md:h-44 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 drop-shadow-2xl" 
                    />
                </div>
            </a>

        </div>

      </div>
    </footer>
  );
}