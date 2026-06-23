"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

function Blob() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.16;
    ref.current.rotation.z = t * 0.04;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.6}>
        <sphereGeometry args={[1, 160, 160]} />
        <MeshDistortMaterial
          color="#d11226"
          emissive="#7a0a16"
          emissiveIntensity={0.4}
          roughness={0.16}
          metalness={0.55}
          clearcoat={0.7}
          clearcoatRoughness={0.25}
          distort={0.34}
          speed={1.6}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.3], fov: 45 }}
    >
      <ambientLight intensity={0.55} />
      {/* key light */}
      <directionalLight position={[5, 6, 6]} intensity={3.4} color="#fff0d8" />
      {/* warm gold rim from behind for a glossy edge */}
      <directionalLight position={[-6, 3, -5]} intensity={2.6} color="#ffcf8a" />
      {/* hot specular highlight */}
      <pointLight
        position={[-3, 1, 4]}
        intensity={70}
        distance={20}
        decay={1.3}
        color="#ff6a4d"
      />
      <pointLight
        position={[4, -4, -2]}
        intensity={32}
        distance={16}
        decay={1.4}
        color="#e0a85b"
      />
      <Blob />
    </Canvas>
  );
}
