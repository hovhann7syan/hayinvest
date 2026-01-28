import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Analytics } from "@vercel/analytics/react"; // 👈 Добавил аналитику
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
      {/* Добавил selection цвета (выделение текста фиолетовым) и фон #050505 для слияния с футером */}
      <body className={`${montserrat.variable} ${adelle.variable} antialiased bg-[#050505] text-white font-sans flex flex-col min-h-screen selection:bg-purple-500/30 selection:text-purple-200`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          
          {/* ================= 🔥 НОВЫЙ ЖИВОЙ ФОН 🔥 ================= */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            
            {/* 1. Техническая сетка */}
            <div className="absolute inset-0 opacity-[0.15]" 
                 style={{ 
                   backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
                   backgroundSize: '40px 40px' 
                 }}>
            </div>
            
            {/* 2. Анимированные сферы (Градиент "Кибер-Аврора") */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 -right-4 w-96 h-96 bg-green-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob animation-delay-4000 hidden md:block"></div>

            {/* 3. Шум для текстуры */}
            <div className="fixed inset-0 opacity-[0.03] bg-noise mix-blend-overlay"></div>
          </div>
          {/* ========================================================== */}

          {/* Контент обернут в relative z-10, чтобы быть НАД фоном */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="pt-20 flex-grow"> 
              {children}
            </main>
            <Footer />
          </div>

          {/* Аналитика Vercel */}
          <Analytics />

        </NextIntlClientProvider>
      </body>
    </html>
  );
}