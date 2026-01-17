import Hero from "@/components/Hero";
import Airdrops from "@/components/Airdrops"; // Импортируем нашу новую секцию

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0b0d] overflow-x-hidden">
      <Hero />
      <Airdrops />
      {/* Сюда потом добавим футер и другие блоки */}
    </main>
  );
}