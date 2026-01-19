import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import "../globals.css";

// 1. ПОДКЛЮЧАЕМ MONTSERRAT
// 👇 ВНИМАНИЕ: Папка 'typography' и расширение '.OTF' (БОЛЬШИМИ)
const montserrat = localFont({
  src: [
    { path: '../typography/main-reg.OTF', weight: '400', style: 'normal' },
    { path: '../typography/main-med.OTF', weight: '500', style: 'normal' },
    { path: '../typography/main-semi.OTF', weight: '600', style: 'normal' },
    { path: '../typography/main-bold.OTF', weight: '700', style: 'normal' },
    { path: '../typography/main-black.OTF', weight: '900', style: 'normal' },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

// 2. ПОДКЛЮЧАЕМ ADELLE (Тут оставляем .ttf маленькими, судя по скрину они там маленькие)
const adelle = localFont({
  src: [
    { path: '../typography/AdelleSans_ARM-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../typography/AdelleSans_ARM-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../typography/AdelleSans_ARM-Bold.ttf', weight: '700', style: 'normal' },
    // Добавь остальные, если используешь, но путь теперь '../typography/...'
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
          <Header />
          <main className="pt-20 flex-grow"> 
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}