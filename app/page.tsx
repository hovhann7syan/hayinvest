"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
// Эти компоненты мы создадим/обновим на следующем шаге
// import AirdropList from "@/components/AirdropList";
// import FundingRounds from "@/components/FundingRounds";

export default function Page() {
  const [activeTab, setActiveTab] = useState("airdrops");

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0b0d] transition-colors duration-300">
      <Header />
      <Hero />

      {/* Переключатель разделов (Coinbase Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex border-b border-gray-200 dark:border-gray-800 mb-8">
          <button
            onClick={() => setActiveTab("airdrops")}
            className={`pb-4 px-6 text-sm font-medium transition-all ${
              activeTab === "airdrops"
                ? "border-b-2 border-[#6366f1] text-[#6366f1]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Active Airdrops
          </button>
          <button
            onClick={() => setActiveTab("funding")}
            className={`pb-4 px-6 text-sm font-medium transition-all ${
              activeTab === "funding"
                ? "border-b-2 border-[#6366f1] text-[#6366f1]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Funding Rounds
          </button>
        </div>

        {/* Контент в зависимости от вкладки */}
        <div className="min-h-[400px]">
          {activeTab === "airdrops" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Сюда пойдут карточки аирдропов с CTA кнопками */}
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-[#1e2025] border border-gray-100 dark:border-gray-800 animate-pulse">
                <p className="text-gray-400">Загружаем активные проекты...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Сюда пойдет список раундов финансирования */}
              <div className="p-6 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 text-center">
                <p className="text-gray-500">Аналитика фондов скоро появится</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer можно добавить сюда позже */}
    </main>
  );
}