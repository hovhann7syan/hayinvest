"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, MeshTransmissionMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function EcosystemCore() {
  const meshRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Ловим мышку глобально
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const { x, y } = mouse.current;
    
    // 🔥 ФИЗИКА ПЛАВНОСТИ (Smooth Physics)
    // Мы используем 0.015 вместо 0.05. 
    // Чем меньше число, тем больше "вес" и инерция у объекта.
    const smoothingFactor = 0.015; 
    
    // Вращение по X (вверх-вниз)
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x, 
      y * 0.3, // Уменьшил угол наклона, чтобы не вертелся слишком сильно
      smoothingFactor
    );

    // Вращение по Y (влево-вправо) + постоянное медленное вращение времени
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y, 
      x * 0.4 + state.clock.elapsedTime * 0.05, // 0.05 - очень медленное фоновое вращение
      smoothingFactor
    );
  });

  return (
    <group ref={meshRef}>
      
      {/* КРИСТАЛЛ */}
      <mesh scale={[2.6, 2.6, 2.6]}>
        <icosahedronGeometry args={[1, 0]} />
        
        <MeshTransmissionMaterial 
            backside={true}
            samples={8} 
            thickness={1.8} 
            anisotropy={0.75} // Эффект небоскребов
            color="#2e1065" 
            chromaticAberration={0.8} 
            distortion={0.6}
            distortionScale={0.6}
            temporalDistortion={0.2}
            iridescence={1}
            iridescenceIOR={1.2}
            iridescenceThicknessRange={[0, 1400]}
            roughness={0.05} // Почти идеальный глянец
            toneMapped={false} 
        />
      </mesh>

      {/* ЯДРО */}
      <mesh scale={[0.9, 0.9, 0.9]}>
        <icosahedronGeometry args={[0.8, 2]} />
        <meshBasicMaterial color="#d8b4fe" wireframe={true} transparent opacity={0.15} />
      </mesh>

    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas gl={{ antialias: true, alpha: true, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.5 }} dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        
        <Environment preset="city" blur={0.8} />

        <ambientLight intensity={0.3} />
        
        {/* Свет */}
        <spotLight position={[10, 15, 10]} angle={0.2} penumbra={1} intensity={3} color="#a855f7" />
        <pointLight position={[-10, -10, -5]} intensity={4} color="#d946ef" />
        <pointLight position={[10, 0, -10]} intensity={2} color="#4f46e5" />

        {/* FLOAT: Плавное парение 
            speed={1.5} - сделал медленнее (было 2.5), чтобы он "плыл", а не дергался
        */}
        <Float 
            speed={1.5} 
            rotationIntensity={0.2} 
            floatIntensity={0.5} 
            floatingRange={[-0.1, 0.1]}
        >
            <EcosystemCore />
        </Float>

        <Sparkles 
            count={140} 
            scale={12} 
            size={3} 
            speed={0.2} // Частицы тоже замедлил
            opacity={0.6}
            color="#d8b4fe"
        />

      </Canvas>
    </div>
  );
}