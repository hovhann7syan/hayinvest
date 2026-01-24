import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
// 👇 Правильные импорты для главной страницы
import CryptoTicker from '../../components/CryptoTicker';
import StatsSection from '../../components/StatsSection';
import AdBanner from '../../components/AdBanner'; 

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'Index' });
  return {
    title: t('meta_title'),
    description: t('meta_description')
  };
}

export default function IndexPage() {
  const t = useTranslations('Index');

  return (
    <main className="relative w-full min-h-screen flex flex-col bg-obsidian-900 text-white overflow-x-hidden selection:bg-primary/30 bg-noise">
      
      {/* 1. ФОН (Сетка) */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      {/* 2. ФОН (Свет) */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-primary-glow/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
      </div>

      {/* --- HERO SECTION (Заголовок) --- */}
      <section className="relative z-10 container mx-auto px-4 pt-32 pb-20 flex flex-col items-center text-center min-h-[85vh] justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(139,92,246,0.15)] animate-fade-in-up">
          <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold tracking-[0.2em] text-gray-300 uppercase">
            The #1 Web3 Ecosystem
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 font-sans leading-[0.9] animate-fade-in-up animation-delay-200">
          THE FUTURE OF <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow via-white to-blue-400 drop-shadow-[0_0_50px_rgba(139,92,246,0.3)]">
            WEB3 CULTURE
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up animation-delay-400">
          Your gateway to the new digital economy. Access exclusive <span className="text-white font-medium">opportunities</span>, 
          elite <span className="text-white font-medium">networking</span>, and forward-thinking <span className="text-white font-medium">events</span>.
        </p>

        <div className="flex flex-col md:flex-row gap-5 w-full md:w-auto animate-fade-in-up animation-delay-600">
          <Link href="/airdrops" className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            <span className="relative flex items-center justify-center gap-2">
              Start Exploring
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
          <a href="https://t.me/hayinvest" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
            Join Community
          </a>
        </div>
      </section>

      {/* --- LIVE TICKER --- */}
      <CryptoTicker />

      {/* 👇 ТВОЙ БАННЕР ТЕПЕРЬ ТУТ 👇 */}
      <AdBanner />

      {/* --- BENTO GRID SECTION (Карточки разделов) --- */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">The Ecosystem</h2>
          <p className="text-gray-400">Everything you need to navigate the Web3 era.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Airdrops */}
          <Link href="/airdrops" className="group md:col-span-2 relative overflow-hidden rounded-3xl bg-obsidian-800/40 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity transform group-hover:scale-110 duration-700">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-48 h-48 text-primary">
                 <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.035-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.035.84-1.875 1.875-1.875h.75c1.035 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.035.84-1.875 1.875-1.875h.75c1.035 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
               </svg>
            </div>
            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-2">Alpha & Airdrops</h3>
                <p className="text-gray-400 max-w-sm">Early access to the most promising protocols before they go mainstream.</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-primary-glow uppercase tracking-wider">
                Explore Opportunities <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Card 2: Academy */}
          <Link href="/academy" className="group relative overflow-hidden rounded-3xl bg-obsidian-800/40 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Academy</h3>
                <p className="text-sm text-gray-400">Master the blockchain.</p>
              </div>
            </div>
          </Link>

          {/* Card 3: Events */}
          <Link href="/events" className="group relative overflow-hidden rounded-3xl bg-obsidian-800/40 border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-1">
             <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4 text-pink-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0h18M5.25 12h13.5h-13.5Zm1.5 3.75h2.25H6.75Zm4.5 0h2.25h-2.25Zm4.5 0h2.25h-2.25Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Events</h3>
                <p className="text-sm text-gray-400">The Inner Circle.</p>
              </div>
            </div>
          </Link>

           {/* Card 4: Community */}
           <a href="https://t.me/hayinvest" target="_blank" className="group md:col-span-2 relative overflow-hidden rounded-3xl bg-obsidian-800/40 border border-white/10 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 p-10 h-full flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-2">Join the Architects</h3>
                <p className="text-gray-400 max-w-md">Connect with the builders.</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5 19.5 4.5M19.5 4.5H8.25M19.5 4.5v11.25" />
                 </svg>
              </div>
            </div>
          </a>

        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <StatsSection />

    </main>
  );
}