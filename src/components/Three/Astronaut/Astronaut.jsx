import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const Astronaut = ({ position = [2.4, 0, 0], scale = 1 }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Helmet */}
        <mesh position={[0, 0.9, 0]}>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshPhysicalMaterial
            color="#0B1023"
            roughness={0.1}
            metalness={0.3}
            clearcoat={1}
            transmission={0.4}
            thickness={0.3}
          />
        </mesh>
        {/* Visor glow */}
        <mesh position={[0, 0.9, 0.32]}>
          <sphereGeometry args={[0.28, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.6]} />
          <meshStandardMaterial
            color="#22D3EE"
            emissive="#22D3EE"
            emissiveIntensity={0.6}
            roughness={0.2}
          />
        </mesh>
        {/* Body */}
        <mesh position={[0, 0.1, 0]}>
          <capsuleGeometry args={[0.38, 0.8, 8, 16]} />
          <MeshDistortMaterial color="#F8FAFC" distort={0.05} speed={1} roughness={0.6} />
        </mesh>
        {/* Backpack */}
        <mesh position={[0, 0.15, -0.35]}>
          <boxGeometry args={[0.4, 0.55, 0.22]} />
          <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.15} />
        </mesh>
        {/* Arms */}
        <mesh position={[-0.5, 0.15, 0]} rotation={[0, 0, 0.4]}>
          <capsuleGeometry args={[0.12, 0.55, 8, 16]} />
          <meshStandardMaterial color="#F8FAFC" roughness={0.6} />
        </mesh>
        <mesh position={[0.5, 0.15, 0]} rotation={[0, 0, -0.4]}>
          <capsuleGeometry args={[0.12, 0.55, 8, 16]} />
          <meshStandardMaterial color="#F8FAFC" roughness={0.6} />
        </mesh>
      </group>
    </Float>
  );
};

export default Astronaut;