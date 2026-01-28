import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background"; // 👈 ИМПОРТ НОВОГО ФОНА
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
      {/* Я изменил bg-[#050505] на bg-[#020202], чтобы он совпадал 
         с цветом нового компонента Background.
      */}
      <body className={`${montserrat.variable} ${adelle.variable} antialiased bg-[#020202] text-white font-sans flex flex-col min-h-screen selection:bg-purple-500/30 selection:text-purple-200`}>
        
        <NextIntlClientProvider messages={messages} locale={locale}>
          
          {/* 👇 НОВЫЙ ФОН */}
          {/* Мы вставили его сюда. Старый блок с 'fixed inset-0... opacity-...' удален. */}
          <Background />

          {/* 👇 КОНТЕНТ */}
          {/* relative z-10 гарантирует, что сайт будет ПОВЕРХ фона */}
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