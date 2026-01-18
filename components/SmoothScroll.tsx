"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    // @ts-ignore
    <ReactLenis 
      root 
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      {/* 👇 ВОТ МАГИЯ: добавляем "as any" */}
      {children as any}
    </ReactLenis>
  );
}