"use client";

export default function StatsSection() {
  const stats = [
    { label: "Community", value: "2,400+", sub: "Members" },
    { label: "Airdrops", value: "150+", sub: "Shared" },
    { label: "Value Found", value: "$500k+", sub: "Total Potential" },
    { label: "Events", value: "12", sub: "Local Meetups" },
  ];

  return (
    <section className="relative z-10 container mx-auto px-4 py-24 border-t border-white/5">
      
      {/* 1. PREMIUM STATS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-32 divide-x-0 md:divide-x divide-white/5">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center group cursor-default px-4">
            <div className="text-4xl md:text-6xl font-black mb-2 font-sans tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 group-hover:from-white group-hover:to-white transition-all duration-500">
              {stat.value}
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                {stat.label}
              </span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                {stat.sub}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 2. TRUSTED BY / ECOSYSTEMS (SVG LOGOS) */}
      <div className="text-center">
        <p className="text-xs font-mono text-gray-600 uppercase tracking-[0.4em] mb-16">
          Researching Ecosystems
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700">
          
          {/* Solana Logo */}
          <svg className="h-8 md:h-10 w-auto hover:text-white transition-colors" viewBox="0 0 397 313" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path d="M64.6 237L3.4 201.1c-5.2-3.6-4.8-10.3 0-13.6l30.3-19.9c4.9-3.3 11.4-3.3 16.3 0l339.3 222.7c5.2 3.6 4.8 10.3 0 13.6l-30.3 19.9c-4.9 3.3-11.4 3.3-16.3 0L3.4 201.1 64.6 237zm0-160.9L3.4 40.2c-5.2-3.6-4.8-10.3 0-13.6l30.3-19.9c4.9-3.3 11.4-3.3 16.3 0l339.3 222.7c5.2 3.6 4.8 10.3 0 13.6l-30.3 19.9c-4.9 3.3-11.4 3.3-16.3 0L3.4 40.2 64.6 76.1zm267.5 76.8l61.2 35.9c5.2 3.6 4.8 10.3 0 13.6l-30.3 19.9c-4.9 3.3-11.4 3.3-16.3 0L7.4 0.6C2.2-3 2.6-9.7 7.4-13l30.3-19.9c4.9-3.3 11.4-3.3 16.3 0l339.3 222.7-61.2-36.9z" transform="scale(0.8) translate(10,10)" />
          </svg>

          {/* Ethereum Logo */}
          <svg className="h-10 md:h-12 w-auto hover:text-white transition-colors" viewBox="0 0 784 1277" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M392.07 0L383.5 29.11V873.74L392.07 882.29L784.13 650.54L392.07 0Z" fillOpacity="0.6"/>
            <path d="M392.07 0L0 650.54L392.07 882.29V480.55V0Z" />
            <path d="M392.07 956.52L385.15 964.96V1263.2L392.07 1277.38L784.37 724.89L392.07 956.52Z" fillOpacity="0.6"/>
            <path d="M392.07 1277.38V956.52L0 724.89L392.07 1277.38Z" />
            <path d="M392.07 882.29L784.13 650.54L392.07 480.55V882.29Z" fillOpacity="0.2"/>
            <path d="M0 650.54L392.07 882.29V480.55L0 650.54Z" fillOpacity="0.6"/>
          </svg>

          {/* Near Protocol Logo */}
          <svg className="h-8 md:h-9 w-auto hover:text-white transition-colors" viewBox="0 0 240 240" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path d="M54.1 29.6c-13.8 0-25 11.2-25 25V185c0 13.8 11.2 25 25 25h131.8c13.8 0 25-11.2 25-25V95.7L54.1 29.6zm0 29.9l133.5 56.4v69.1c0 4.3-3.5 7.8-7.8 7.8H54.1c-4.3 0-7.8-3.5-7.8-7.8V59.5z"/>
             <path d="M197 149.6V54.6c0-13.8-11.2-25-25-25H77.1l119.9 120z"/>
          </svg>

           {/* Arbitrum Logo */}
           <svg className="h-8 md:h-10 w-auto hover:text-white transition-colors" viewBox="0 0 789 646" fill="currentColor">
              <path d="M394.301 133.424L597.436 490.697H191.166L394.301 133.424ZM394.301 0L0 645.692H788.602L394.301 0Z"/>
              <path d="M394.27 490.692H648.885L597.405 399.851L394.27 490.692Z" fillOpacity="0.5"/>
           </svg>
           
           {/* Starknet Logo */}
           <svg className="h-8 md:h-10 w-auto hover:text-white transition-colors" viewBox="0 0 240 240" fill="currentColor">
             <path d="M120 20L20 70v100l100 50 100-50V70L120 20zm0 180l-80-40V80l80-40 80 40v80l-80 40z"/>
           </svg>

        </div>
      </div>

    </section>
  );
}