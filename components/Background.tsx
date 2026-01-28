export default function Background() {
  return (
    <div className="fixed left-0 top-0 -z-50 h-full w-full bg-[#020202] overflow-hidden">
      
      {/* 1. СЕТКА */}
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* 2. ВЕРХНИЙ СВЕТ */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none"></div>

      {/* === АНИМИРОВАННЫЕ СФЕРЫ === */}

      {/* 👇 ИЗМЕНЕНИЕ ЗДЕСЬ: Зеленый шар стал Фиолетовым (#3d0f84) */}
      {/* Было: bg-green-500/40 */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#3d0f84]/40 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob"></div>

      {/* Фиолетовый (Нижний) - Оставил как был, для глубины */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/40 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob-slow [animation-delay:2s]"></div>

      {/* Синий (Правый) */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob-fast [animation-delay:4s]"></div>

      {/* 3. ШУМ */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      {/* 4. ВИНЬЕТКА */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_100%)] pointer-events-none"></div>

    </div>
  );
}