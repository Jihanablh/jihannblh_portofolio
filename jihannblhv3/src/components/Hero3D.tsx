import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export type Hero3DTheme = "dark" | "pink";

type Palette = {
  bg: string;
  body: string;
  bodyEmissive: string;
  cheek: string;
  eye: string;
  cloud: string;
  sparkle: string;
  light1: string;
  light2: string;
  orbit: { star: string; torus: string; sphere: string; capsule: string; starAlt: string };
};

const PALETTES: Record<Hero3DTheme, Palette> = {
  pink: {
    bg: "#fdeaf3",
    body: "#ffb6d5",
    bodyEmissive: "#ff8fbf",
    cheek: "#ff7aa8",
    eye: "#3a2a3f",
    cloud: "#fff4e0",
    sparkle: "#fff4e0",
    light1: "#cdb6ff",
    light2: "#ffd6c2",
    orbit: {
      star: "#cdb6ff",
      torus: "#b8f2e6",
      sphere: "#ffd6c2",
      capsule: "#ff8fbf",
      starAlt: "#fff4e0",
    },
  },
  dark: {
    bg: "#0b1024",
    body: "#7aa7ff",
    bodyEmissive: "#4f7cff",
    cheek: "#ff7aa8",
    eye: "#0a0f24",
    cloud: "#1a2150",
    sparkle: "#cfe0ff",
    light1: "#22d3ee",
    light2: "#a78bfa",
    orbit: {
      star: "#a78bfa",
      torus: "#22d3ee",
      sphere: "#f0abfc",
      capsule: "#60a5fa",
      starAlt: "#fde68a",
    },
  },
};

// A cute round blob character with eyes + cheeks that gently floats.
function Blob({ palette }: { palette: Palette }) {
  const group = useRef<THREE.Group>(null);
  const body = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (group.current) {
      group.current.position.y = Math.sin(t * 1.2) * 0.12;
      group.current.rotation.y = Math.sin(t * 0.6) * 0.25;
      group.current.rotation.z = Math.sin(t * 0.9) * 0.04;
    }
    if (body.current) {
      const k = 1 + Math.sin(t * 2.2) * 0.03;
      body.current.scale.set(k, 2 - k, k);
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <mesh ref={body} castShadow receiveShadow>
        <sphereGeometry args={[1.15, 64, 64]} />
        <meshStandardMaterial
          color={palette.body}
          roughness={0.35}
          metalness={0.05}
          emissive={palette.bodyEmissive}
          emissiveIntensity={0.12}
        />
      </mesh>

      <mesh position={[-0.55, -0.05, 0.92]}>
        <circleGeometry args={[0.13, 32]} />
        <meshBasicMaterial color={palette.cheek} transparent opacity={0.55} />
      </mesh>
      <mesh position={[0.55, -0.05, 0.92]}>
        <circleGeometry args={[0.13, 32]} />
        <meshBasicMaterial color={palette.cheek} transparent opacity={0.55} />
      </mesh>

      <mesh position={[-0.32, 0.18, 1.0]}>
        <sphereGeometry args={[0.085, 24, 24]} />
        <meshBasicMaterial color={palette.eye} />
      </mesh>
      <mesh position={[0.32, 0.18, 1.0]}>
        <sphereGeometry args={[0.085, 24, 24]} />
        <meshBasicMaterial color={palette.eye} />
      </mesh>
      <mesh position={[-0.3, 0.22, 1.07]}>
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.34, 0.22, 1.07]}>
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      <mesh position={[0, 0.0, 1.02]}>
        <torusGeometry args={[0.09, 0.018, 12, 24, Math.PI]} />
        <meshBasicMaterial color={palette.eye} />
      </mesh>

      <mesh position={[0.55, 0.95, 0.6]}>
        <octahedronGeometry args={[0.07, 0]} />
        <meshStandardMaterial color={palette.sparkle} emissive={palette.sparkle} emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

function CuteOrbit({
  radius, speed, y, color, shape, size = 0.18, offset = 0,
}: {
  radius: number; speed: number; y: number; color: string;
  shape: "star" | "torus" | "sphere" | "capsule"; size?: number; offset?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    const t = s.clock.elapsedTime * speed + offset;
    if (!ref.current) return;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = y + Math.sin(t * 2) * 0.1;
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.015;
  });

  let geom: React.ReactNode;
  if (shape === "star") geom = <octahedronGeometry args={[size, 0]} />;
  else if (shape === "torus") geom = <torusGeometry args={[size, size * 0.35, 16, 32]} />;
  else if (shape === "capsule") geom = <capsuleGeometry args={[size * 0.5, size * 0.6, 8, 16]} />;
  else geom = <sphereGeometry args={[size, 32, 32]} />;

  return (
    <mesh ref={ref}>
      {geom}
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  );
}

function Sparkles({ count = 80, color }: { count?: number; color: string }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = -Math.random() * 8 - 1;
    }
    return arr;
  }, [count]);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.07} color={color} transparent opacity={0.85} depthWrite={false} sizeAttenuation />
    </points>
  );
}

function Cloud({ color }: { color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.1;
  });
  return (
    <mesh ref={ref} position={[0, -1.8, 0]}>
      <sphereGeometry args={[1.6, 48, 48]} />
      <meshStandardMaterial color={color} roughness={0.9} transparent opacity={0.85} />
    </mesh>
  );
}

function CameraRig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 0.4 - camera.position.x) * 0.05;
    camera.position.y += (0.2 + pointer.y * 0.25 - camera.position.y) * 0.05;
    camera.lookAt(0, 0.1, 0);
  });
  return null;
}

function Scene({ palette }: { palette: Palette }) {
  return (
    <>
      <color attach="background" args={[palette.bg]} />
      <fog attach="fog" args={[palette.bg, 7, 16]} />

      <ambientLight intensity={0.85} />
      <directionalLight position={[3, 5, 4]} intensity={1.1} color={"#ffffff"} />
      <pointLight position={[-3, 2, 2]} intensity={1.2} color={palette.light1} />
      <pointLight position={[3, -1, 2]} intensity={1.0} color={palette.light2} />

      <Sparkles color={palette.sparkle} />
      <Cloud color={palette.cloud} />
      <Blob palette={palette} />

      <CuteOrbit radius={2.3} speed={0.6} y={0.4} color={palette.orbit.star} shape="star" size={0.18} />
      <CuteOrbit radius={2.6} speed={-0.45} y={-0.1} color={palette.orbit.torus} shape="torus" size={0.2} offset={1.5} />
      <CuteOrbit radius={2.1} speed={0.5} y={0.7} color={palette.orbit.sphere} shape="sphere" size={0.15} offset={3} />
      <CuteOrbit radius={2.8} speed={-0.35} y={0.2} color={palette.orbit.capsule} shape="capsule" size={0.18} offset={2} />
      <CuteOrbit radius={2.4} speed={0.55} y={-0.4} color={palette.orbit.starAlt} shape="star" size={0.14} offset={4.2} />

      <CameraRig />
    </>
  );
}

export default function Hero3D({ theme = "dark" }: { theme?: Hero3DTheme }) {
  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);
  const palette = PALETTES[theme];

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const onChange = () => setReduced(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  if (!mounted) return <div className="absolute inset-0" />;

  if (reduced) {
    return (
      <div className="absolute inset-0 flex items-center justify-center" style={{ background: palette.bg }}>
        <div className="h-72 w-72 rounded-full" style={{ background: palette.body, opacity: 0.6, filter: "blur(40px)" }} />
      </div>
    );
  }

  return (
    <Canvas
      key={theme}
      camera={{ position: [0, 0.3, 5], fov: 50 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <Scene palette={palette} />
      </Suspense>
    </Canvas>
  );
}

