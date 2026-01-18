"use client";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link'; // 👈 Добавил для кликабельности лого

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="py-12 border-t border-white/10 bg-[#0a0b0d] relative z-10">
      <div className="container mx-auto px-6">
        
        {/* --- ОСНОВНАЯ СЕТКА (3 колонки) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          
          {/* 1. О нас */}
          <div className="flex flex-col gap-4 items-start">
            
            {/* 👇 ТУТ БЫЛ ТЕКСТ, ТЕПЕРЬ ИКОНКА */}
            <Link href="/" className="block">
                <div className="w-12 hover:opacity-80 transition-opacity">
                    <Image 
                        src="/icon.png" 
                        alt="HayInvest" 
                        width={50} 
                        height={50} 
                        className="w-full h-auto object-contain"
                    />
                </div>
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              {t('desc')}
            </p>
          </div>

          {/* 2. Соцсети */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-lg">{t('community')}</h4>
            <div className="flex flex-col gap-3">
              <a href="https://t.me/hay_invest" target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-colors group p-2 -ml-2 rounded-lg hover:bg-white/5">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 text-white group-hover:text-indigo-400 transition-all">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>
                </div>
                <span className="font-medium">Telegram Channel</span>
              </a>
              <a href="https://x.com/hayinvestt" target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group p-2 -ml-2 rounded-lg hover:bg-white/5">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 text-white transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
                <span className="font-medium">X (Twitter)</span>
              </a>
              <a href="https://instagram.com/hayinvest" target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors group p-2 -ml-2 rounded-lg hover:bg-white/5">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-pink-500/20 text-white group-hover:text-pink-500 transition-all">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <span className="font-medium">Instagram</span>
              </a>
               <a href="https://facebook.com/hayinvest" target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-colors group p-2 -ml-2 rounded-lg hover:bg-white/5">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 text-white group-hover:text-blue-500 transition-all">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </div>
                <span className="font-medium">Facebook</span>
              </a>
            </div>
          </div>

          {/* 3. Контакты */}
          <div className="flex flex-col gap-5">
             <h4 className="text-white font-semibold text-lg">{t('contact')}</h4>
             <div className="flex flex-col gap-4">
                <a href="https://t.me/hayinvest_admin" target="_blank" className="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/5 hover:border-indigo-500/50 transition-all group flex items-start gap-4">
                   <div className="mt-1 p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                   </div>
                   <div>
                      <span className="block font-bold text-white group-hover:text-indigo-400 transition-colors">{t('support')}</span>
                      <span className="text-xs text-gray-500">{t('support_desc')}</span>
                   </div>
                </a>
                <a href="https://t.me/hovhann7syan" target="_blank" className="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/5 hover:border-purple-500/50 transition-all group flex items-start gap-4">
                   <div className="mt-1 p-2 bg-purple-500/10 rounded-lg text-purple-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                   </div>
                   <div>
                      <span className="block font-bold text-white group-hover:text-purple-400 transition-colors">{t('collab')}</span>
                      <span className="text-xs text-gray-500">{t('collab_desc')}</span>
                   </div>
                </a>
             </div>
          </div>
        </div>

        {/* --- НИЖНЯЯ ПАНЕЛЬ (Copyright + SEEN) --- */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-gray-600 text-xs font-mono">
              © 2026 HayInvest. {t('rights')}
            </p>

            {/* Powered by SEEN */}
            <a 
                href="https://t.me/ВАШ_КАНАЛ_SEEN" 
                target="_blank" 
                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity group"
            >
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                    {t('powered')}
                </span>
                <div className="relative h-6 w-auto">
                    {/* Логотип Seen */}
                    <Image 
                        src="/seen-logo.png" 
                        alt="Powered by Seen" 
                        width={80} 
                        height={30}
                        className="h-5 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                    />
                </div>
            </a>

        </div>

      </div>
    </footer>
  );
}