import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Sphere } from '@react-three/drei';

const EarthMesh = () => {
  const meshRef = useRef();
  const cloudsRef = useRef();

  // Public NASA "Blue Marble" texture assets
  const [colorMap, cloudsMap] = useTexture([
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png',
  ]);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.06;
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.085;
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1.6, 64, 64]}>
        <meshStandardMaterial map={colorMap} metalness={0.15} roughness={0.75} />
      </Sphere>
      <Sphere ref={cloudsRef} args={[1.63, 64, 64]}>
        <meshStandardMaterial map={cloudsMap} transparent opacity={0.35} depthWrite={false} />
      </Sphere>
      {/* subtle atmosphere glow */}
      <Sphere args={[1.72, 64, 64]}>
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.06} side={2} />
      </Sphere>
    </group>
  );
};

const Earth = (props) => (
  <Suspense fallback={null}>
    <EarthMesh {...props} />
  </Suspense>
);

export default Earth;