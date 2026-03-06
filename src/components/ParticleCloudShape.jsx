/* eslint-disable react-hooks/purity */
import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Simplex Noise function for the Vertex Shader
const noiseSubShader = `
// Simplex 3D Noise 
// by Ian McEwan, Ashima Arts
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

  i = mod(i, 289.0 ); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 1.0/7.0;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}
`;

const vertexShader = `
uniform float uTime;
uniform float uSize;
uniform float uBootProgress;

attribute float aRandom; // Unique random val per particle
attribute vec3 aStartPos; // Start pos for boot animation

varying float vAlpha;

${noiseSubShader}

void main() {
  vec3 pos = mix(aStartPos, position, uBootProgress);
  
  // Create a very subtle "breathing/flowing" effect
  float noiseFreq = 0.5;
  float noiseAmp = 0.05; // REDUCED for stability (from 0.3)
  
  vec3 noisePos = vec3(pos.x * noiseFreq + uTime * 0.1, pos.y * noiseFreq + uTime * 0.15, pos.z * noiseFreq);
  float n = snoise(noisePos);
  
  // Displace outward/inward slightly
  pos.x += n * noiseAmp * (0.5 + aRandom * 0.5);
  pos.y += n * noiseAmp * (0.5 + aRandom * 0.5);
  pos.z += n * noiseAmp; 

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  
  gl_PointSize = uSize * (1.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
  
  vAlpha = 0.6 + (n * 0.3);
}
`;

const fragmentShader = `
uniform vec3 uColor;

varying float vAlpha;

void main() {
  float dist = length(gl_PointCoord - vec2(0.5));
  if (dist > 0.5) discard;
  
  // Sharper edges
  float alpha = smoothstep(0.5, 0.35, dist);
  gl_FragColor = vec4(uColor, alpha * vAlpha);
}
`;

const lineVertexShader = `
uniform float uTime;
uniform float uBootProgress;

attribute float aRandom;
attribute vec3 aStartPos;

varying float vAlpha;

${noiseSubShader}

void main() {
  vec3 pos = mix(aStartPos, position, uBootProgress);
  
  // MUST MATCH POINT SHADER EXACTLY to keep lines attached to points
  float noiseFreq = 0.5;
  float noiseAmp = 0.05; // Stable
  
  vec3 noisePos = vec3(pos.x * noiseFreq + uTime * 0.1, pos.y * noiseFreq + uTime * 0.15, pos.z * noiseFreq);
  float n = snoise(noisePos);
  
  pos.x += n * noiseAmp * (0.5 + aRandom * 0.5);
  pos.y += n * noiseAmp * (0.5 + aRandom * 0.5);
  pos.z += n * noiseAmp; 

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  
  // Lines are faint
  vAlpha = 0.15 + (n * 0.1);
}
`;

const lineFragmentShader = `
uniform vec3 uColor;
varying float vAlpha;

void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}
`;

function CloudPoints({ count = 600 }) {
  const groupRef = useRef();
  const materialRef = useRef();
  const lineMaterialRef = useRef();
  const [isFirstLoad] = useState(() => !sessionStorage.getItem('cloudBootAnimationRun'));

  // Generate shape and connections
  const { positions, randoms, startPositions, linePositions, lineRandoms, lineStartPositions } = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    const randArray = new Float32Array(count);
    const startPosArray = new Float32Array(count * 3);
    
    // Using a simple array of vec3s to easily calculate distances later
    const pointsData = [];

    let i = 0;
    while (i < count) {
      let x, y;
      const component = Math.random();
      
      if (component < 0.25) {
        x = (Math.random() - 0.5) * 1.8; 
        y = -0.5;
      } else if (component < 0.5) {
        const angle = Math.random() * Math.PI * 2;
        x = -0.9 + Math.cos(angle) * 0.5;
        y = 0.0 + Math.sin(angle) * 0.5;
      } else if (component < 0.75) {
        const angle = Math.random() * Math.PI * 2;
        x = 0.0 + Math.cos(angle) * 0.7;
        y = 0.5 + Math.sin(angle) * 0.7;
      } else {
        const angle = Math.random() * Math.PI * 2;
        x = 0.9 + Math.cos(angle) * 0.5;
        y = 0.0 + Math.sin(angle) * 0.5;
      }

      const inC1 = Math.hypot(x - (-0.9), y - 0.0) < 0.5 - 0.02;
      const inC2 = Math.hypot(x - 0.0, y - 0.5) < 0.7 - 0.02;
      const inC3 = Math.hypot(x - 0.9, y - 0.0) < 0.5 - 0.02;
      const inBase = x > -0.9 + 0.02 && x < 0.9 - 0.02 && y > -0.5 && y < 0.0;
      
      if (!inC1 && !inC2 && !inC3 && !inBase) {
        const scatterRadius = 0.22; // Slightly thicker spread for network
        const scatterAngle = Math.random() * Math.PI * 2;
        const r = Math.sqrt(Math.random()) * scatterRadius;
        
        const px = x + Math.cos(scatterAngle) * r;
        const py = y + Math.sin(scatterAngle) * r;
        const pz = (Math.random() - 0.5) * 0.4;
        const pr = Math.random();
        
        const sx = (Math.random() - 0.5) * 6.0;
        const sy = (Math.random() - 0.5) * 6.0 + 2.0;
        const sz = (Math.random() - 0.5) * 6.0;
        
        posArray[i * 3] = px;
        posArray[i * 3 + 1] = py;
        posArray[i * 3 + 2] = pz;
        randArray[i] = pr;
        startPosArray[i * 3] = sx;
        startPosArray[i * 3 + 1] = sy;
        startPosArray[i * 3 + 2] = sz;
        
        pointsData.push({ x: px, y: py, z: pz, r: pr, sx, sy, sz });
        i++;
      }
    }

    // Generate line connections for nearby points
    const maxDistance = 0.2; // Connect points closer than this
    const lPos = [];
    const lRand = [];
    const lStartPos = [];
    
    // Simple O(N^2) search (okay for ~1000 points on init)
    for (let j = 0; j < pointsData.length; j++) {
      const p1 = pointsData[j];
      let connections = 0;
      for (let k = j + 1; k < pointsData.length; k++) {
        if (connections >= 2) break; // Max 2 lines per point for performance
        
        const p2 = pointsData[k];
        const distSq = (p1.x - p2.x)**2 + (p1.y - p2.y)**2 + (p1.z - p2.z)**2;
        
        if (distSq < maxDistance * maxDistance) {
          lPos.push(p1.x, p1.y, p1.z);
          lPos.push(p2.x, p2.y, p2.z);
          // Supply the same random value so the endpoints move exactly with the points
          lRand.push(p1.r, p2.r);
          lStartPos.push(p1.sx, p1.sy, p1.sz);
          lStartPos.push(p2.sx, p2.sy, p2.sz);
          connections++;
        }
      }
    }

    return { 
      positions: posArray, 
      randoms: randArray,
      startPositions: startPosArray,
      linePositions: new Float32Array(lPos),
      lineRandoms: new Float32Array(lRand),
      lineStartPositions: new Float32Array(lStartPos)
    };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#8BCEFF') },
      uSize: { value: 30.0 }, // Size for points
      uBootProgress: { value: isFirstLoad ? 0.0 : 1.0 }
    }),
    [isFirstLoad]
  );

  useFrame((state) => {
    if (!groupRef.current || !materialRef.current || !lineMaterialRef.current) return;
    
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime * 0.5;
    lineMaterialRef.current.uniforms.uTime.value = state.clock.elapsedTime * 0.5;

    // Boot animation
    if (materialRef.current.uniforms.uBootProgress.value < 1.0) {
      const duration = 2.0;
      const rawProgress = Math.min(state.clock.elapsedTime / duration, 1.0);
      const ease = 1.0 - Math.pow(1.0 - rawProgress, 3); // easeOutCubic
      
      materialRef.current.uniforms.uBootProgress.value = ease;
      lineMaterialRef.current.uniforms.uBootProgress.value = ease;
    }

    const targetX = state.pointer.x * 0.4;
    const targetY = -state.pointer.y * 0.4;
    
    groupRef.current.rotation.y += 0.05 * (targetX - groupRef.current.rotation.y);
    groupRef.current.rotation.x += 0.05 * (targetY - groupRef.current.rotation.x);
  });

  return (
    <group ref={groupRef}>
      {/* Network Lines */}
      <lineSegments frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-aStartPos"
            count={lineStartPositions.length / 3}
            array={lineStartPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-aRandom"
            count={lineRandoms.length}
            array={lineRandoms}
            itemSize={1}
          />
        </bufferGeometry>
        <shaderMaterial
          ref={lineMaterialRef}
          vertexShader={lineVertexShader}
          fragmentShader={lineFragmentShader}
          uniforms={uniforms}
          transparent={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Points */}
      <points frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-aStartPos"
            count={startPositions.length / 3}
            array={startPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-aRandom"
            count={randoms.length}
            array={randoms}
            itemSize={1}
          />
        </bufferGeometry>
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function ParticleCloudShape() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="w-full h-[450px] md:h-[550px] cursor-pointer">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 60 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        <CloudPoints count={isMobile ? 400 : 900} />
      </Canvas>
    </div>
  );
}


