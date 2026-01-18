import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import "../globals.css";

// 1. ПОДКЛЮЧАЕМ MONTSERRAT ARM
// 👇 ВАЖНО: Исправил .otf на .OTF (как в названиях файлов)

const montserrat = localFont({
  src: [
    { path: '../fonts/mont-reg.otf', weight: '400', style: 'normal' },
    { path: '../fonts/mont-med.otf', weight: '500', style: 'normal' },
    { path: '../fonts/mont-semi.otf', weight: '600', style: 'normal' },
    { path: '../fonts/mont-bold.otf', weight: '700', style: 'normal' },
    { path: '../fonts/mont-black.otf', weight: '900', style: 'normal' },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

// 2. ПОДКЛЮЧАЕМ ADELLE SANS ARM
const adelle = localFont({
  src: [
    { path: '../fonts/AdelleSans_ARM-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/AdelleSans_ARM-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../fonts/AdelleSans_ARM-Bold.ttf', weight: '700', style: 'normal' },
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
    <html lang={locale}>
      <body className={`${montserrat.variable} ${adelle.variable} antialiased bg-[#010003] text-white font-sans flex flex-col min-h-screen`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {/* Глобальное меню */}
          <Header />
          
          {/* Основной контент страницы */}
          <main className="pt-20 flex-grow"> 
            {children}
          </main>

          {/* Глобальный подвал */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}