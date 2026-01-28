import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import "../globals.css";

// 1. ПОДКЛЮЧАЕМ MONTSERRAT
const montserrat = localFont({
  src: [
    { path: '../typography/mont-regular.otf', weight: '400', style: 'normal' },
    { path: '../typography/mont-medium.otf', weight: '500', style: 'normal' },
    { path: '../typography/mont-semibold.otf', weight: '600', style: 'normal' },
    { path: '../typography/mont-bold.otf', weight: '700', style: 'normal' },
    { path: '../typography/mont-black.otf', weight: '900', style: 'normal' },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

// 2. ПОДКЛЮЧАЕМ ADELLE
const adelle = localFont({
  src: [
    { path: '../typography/AdelleSans_ARM-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../typography/AdelleSans_ARM-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../typography/AdelleSans_ARM-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: "--font-adelle",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HayInvest | Web3 Ecosystem",
  description: "Built by investors for investors.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; 
  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full">
      <body className={`${montserrat.variable} ${adelle.variable} antialiased bg-[#050505] text-white font-sans flex flex-col min-h-screen selection:bg-purple-500/30 selection:text-purple-200`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          
          {/* ================= 🔥 ВОТ ЭТОТ БЛОК ТЫ ЗАБЫЛ 🔥 ================= */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            
            {/* 1. Сетка */}
            <div className="absolute inset-0 opacity-[0.1]" 
                 style={{ 
                   backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', 
                   backgroundSize: '40px 40px' 
                 }}>
            </div>
            
            {/* 2. Сами СФЕРЫ (которые используют твой CSS) */}
            <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-purple-600/10 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob"></div>
            
            <div className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] bg-green-600/10 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob animation-delay-2000"></div>
            
            <div className="absolute top-[30%] left-[40%] w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[150px] opacity-30 animate-blob animation-delay-4000 hidden md:block"></div>

            {/* 3. Шум */}
            <div className="fixed inset-0 opacity-[0.04] bg-noise mix-blend-overlay"></div>
          </div>
          {/* ============================================================== */}


          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="pt-20 flex-grow"> 
              {children}
            </main>
            <Footer />
          </div>

          <Analytics />

        </NextIntlClientProvider>
      </body>
    </html>
  );
}