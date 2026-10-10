import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Environment, Lightformer } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const Orb = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!ref.current) return;
    const s = 1 + Math.sin(t * 0.8) * 0.05; // calm "breathing"
    ref.current.scale.setScalar(s);
    ref.current.rotation.y = t * 0.15;
    // follow pointer gently
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.pointer.x * 0.4, 0.03);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, state.pointer.y * 0.3, 0.03);
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.5, 32]} />
      <MeshDistortMaterial color="#BC937A" roughness={0.15} metalness={0.35} distort={0.38} speed={1.6} />
    </mesh>
  );
};

const Ring = ({ radius, tilt, speed, color }: { radius: number; tilt: [number, number, number]; speed: number; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.z += d * speed;
  });
  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.025, 16, 160]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

const Petals = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        pos: [(Math.random() - 0.5) * 11, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 4 - 1] as [number, number, number],
        scale: 0.12 + Math.random() * 0.22,
        color: ["#D7C7BB", "#F8F6F4", "#9E8E83", "#BC937A"][i % 4],
      })),
    []
  );
  return (
    <>
      {items.map((p, i) => (
        <Float key={i} speed={1 + (i % 3)} rotationIntensity={2} floatIntensity={2}>
          <mesh position={p.pos} scale={p.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color={p.color} metalness={0.5} roughness={0.25} flatShading />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const HeroScene = () => (
  <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 7], fov: 50 }} gl={{ antialias: true, alpha: true }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[4, 5, 5]} intensity={1.6} color="#FFE9D6" />
    <pointLight position={[-4, -2, 3]} intensity={20} color="#BC937A" />
    <Environment resolution={64}>
      <Lightformer intensity={2} position={[0, 5, 0]} scale={[10, 10, 1]} />
      <Lightformer intensity={1.2} color="#D7C7BB" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 1, 1]} />
      <Lightformer intensity={1} color="#BC937A" position={[5, -1, 1]} rotation-y={-Math.PI / 2} scale={[20, 2, 1]} />
    </Environment>
    <group position={[2.6, 0, 0]}>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
        <Orb />
        <Ring radius={2.3} tilt={[Math.PI / 2.4, 0, 0]} speed={0.3} color="#D7C7BB" />
        <Ring radius={2.75} tilt={[Math.PI / 1.8, 0.4, 0]} speed={-0.2} color="#BC937A" />
        <Ring radius={3.2} tilt={[Math.PI / 2, -0.5, 0]} speed={0.15} color="#F8F6F4" />
      </Float>
    </group>
    <Petals />
    <Sparkles count={90} scale={[14, 8, 6]} size={2.5} speed={0.35} color="#F8F6F4" opacity={0.8} />
  </Canvas>
);

export default HeroScene;
