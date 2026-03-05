/* eslint-disable react-hooks/purity */
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 400 }) {
  const pointsRef = useRef();

  // Generate random particles across a large volume
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
    }
    return positions;
  }, [count]);

  // Lightweight animation: only rotate the group, no per-particle updates
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    pointsRef.current.rotation.z = state.clock.elapsedTime * 0.008;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8BCEFF"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function ParticleField() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-gradient-to-b from-[#0B1120] via-[#0f1b29] to-[#0B1120]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        <ambientLight intensity={0.2} />
        <Particles count={isMobile ? 200 : 400} />
      </Canvas>
    </div>
  );
}
