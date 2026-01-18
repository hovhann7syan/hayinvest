import Hero from "@/components/Hero";
import Airdrops from "@/components/Airdrops"; // Импорт есть
import { useTranslations } from 'next-intl';

export default function Home() {
  return (
    <main className="flex flex-col bg-[#010003] min-h-screen">
      
      {/* 1. HERO СЕКЦИЯ */}
      <Hero />
      
      {/* 2. AIRDROPS (ALPHA ARCHIVE) */}
      {/* Добавил z-20, чтобы 3D-фон Hero не перекрывал карточки */}
      <div className="relative z-20">
        <Airdrops />
      </div>

      {/* Остальные секции можно добавлять ниже */}

    </main>
  );
}