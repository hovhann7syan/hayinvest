import Hero from "@/components/Hero";
import Airdrops from "@/components/Airdrops"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0b0d] overflow-x-hidden">
      <Hero />
      <Airdrops />
    </main>
  );
}