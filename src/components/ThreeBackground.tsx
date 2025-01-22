import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function StarField() {
  const ref = useRef<any>();
  
  const positions = useMemo(() => {
    const pos = new Float32Array(6000 * 3);
    for (let i = 0; i < 6000; i++) {
      const radius = 2 + Math.random() * 0.5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
      
      // Add a gentle wave motion
      ref.current.position.y = Math.sin(state.clock.elapsedTime / 2) * 0.1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/20 dark:from-blue-950/40 dark:to-black/40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['#000']} />
        <StarField />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;