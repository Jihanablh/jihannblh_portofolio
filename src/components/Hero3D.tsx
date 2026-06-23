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
  heart: string;
  light1: string;
  light2: string;
  orbit: { star: string; torus: string; sphere: string; capsule: string; starAlt: string };
};

const PALETTES: Record<Hero3DTheme, Palette> = {
  pink: {
    bg: "#fdeaf3",
    body: "#ffb6d5",
    bodyEmissive: "#ff8fbf",
    cheek: "#ff5c9a",
    eye: "#3a2a3f",
    cloud: "#fff8f0",
    sparkle: "#fff4e0",
    heart: "#ff6b9d",
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
    heart: "#f472b6",
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

function Blob({ palette }: { palette: Palette }) {
  const group = useRef<THREE.Group>(null);
  const body = useRef<THREE.Mesh>(null);
  const leftEye = useRef<THREE.Group>(null);
  const rightEye = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  const blinkRef = useRef({ next: 2.5, closing: false, t: 0 });

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    const blink = blinkRef.current;

    if (t > blink.next) {
      blink.closing = true;
      blink.t = 0;
      blink.next = t + 2.5 + Math.random() * 3;
    }
    if (blink.closing) {
      blink.t += s.clock.getDelta() * 8;
      if (blink.t >= 1) blink.closing = false;
    }
    const eyeScaleY = blink.closing ? Math.max(0.08, 1 - Math.sin(blink.t * Math.PI)) : 1;

    if (group.current) {
      group.current.position.y = Math.sin(t * 1.4) * 0.18 + Math.sin(t * 2.8) * 0.04;
      group.current.rotation.y = Math.sin(t * 0.55) * 0.3;
      group.current.rotation.z = Math.sin(t * 0.85) * 0.06;
    }
    if (body.current) {
      const squash = 1 + Math.sin(t * 2.6) * 0.05;
      body.current.scale.set(1 / squash, squash, 1 / squash);
    }

    const lookX = pointer.x * 0.12;
    const lookY = pointer.y * 0.08;
    if (leftEye.current) {
      leftEye.current.position.x = -0.32 + lookX;
      leftEye.current.position.y = 0.2 + lookY;
      leftEye.current.scale.y = eyeScaleY;
    }
    if (rightEye.current) {
      rightEye.current.position.x = 0.32 + lookX;
      rightEye.current.position.y = 0.2 + lookY;
      rightEye.current.scale.y = eyeScaleY;
    }

    const wave = Math.sin(t * 3) * 0.35;
    if (leftArm.current) leftArm.current.rotation.z = 0.4 + wave * 0.5;
    if (rightArm.current) rightArm.current.rotation.z = -0.4 - wave * 0.5;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <mesh ref={body} castShadow receiveShadow>
        <sphereGeometry args={[1.15, 64, 64]} />
        <meshStandardMaterial
          color={palette.body}
          roughness={0.28}
          metalness={0.04}
          emissive={palette.bodyEmissive}
          emissiveIntensity={0.18}
        />
      </mesh>

      {/* Cute ears */}
      <mesh position={[-0.72, 0.95, 0.35]} rotation={[0.2, -0.3, -0.4]}>
        <sphereGeometry args={[0.28, 24, 24]} />
        <meshStandardMaterial color={palette.body} roughness={0.3} emissive={palette.bodyEmissive} emissiveIntensity={0.1} />
      </mesh>
      <mesh position={[0.72, 0.95, 0.35]} rotation={[0.2, 0.3, 0.4]}>
        <sphereGeometry args={[0.28, 24, 24]} />
        <meshStandardMaterial color={palette.body} roughness={0.3} emissive={palette.bodyEmissive} emissiveIntensity={0.1} />
      </mesh>
      <mesh position={[-0.72, 0.98, 0.48]} rotation={[0.2, -0.3, -0.4]}>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshStandardMaterial color={palette.cheek} roughness={0.4} transparent opacity={0.7} />
      </mesh>
      <mesh position={[0.72, 0.98, 0.48]} rotation={[0.2, 0.3, 0.4]}>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshStandardMaterial color={palette.cheek} roughness={0.4} transparent opacity={0.7} />
      </mesh>

      {/* Blush */}
      <mesh position={[-0.58, -0.02, 0.95]}>
        <circleGeometry args={[0.16, 32]} />
        <meshBasicMaterial color={palette.cheek} transparent opacity={0.65} />
      </mesh>
      <mesh position={[0.58, -0.02, 0.95]}>
        <circleGeometry args={[0.16, 32]} />
        <meshBasicMaterial color={palette.cheek} transparent opacity={0.65} />
      </mesh>

      {/* Eyes */}
      <group ref={leftEye} position={[-0.32, 0.2, 1.02]}>
        <mesh>
          <sphereGeometry args={[0.1, 24, 24]} />
          <meshBasicMaterial color={palette.eye} />
        </mesh>
        <mesh position={[0.03, 0.04, 0.06]}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh position={[-0.02, -0.02, 0.07]}>
          <sphereGeometry args={[0.015, 12, 12]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </mesh>
      </group>
      <group ref={rightEye} position={[0.32, 0.2, 1.02]}>
        <mesh>
          <sphereGeometry args={[0.1, 24, 24]} />
          <meshBasicMaterial color={palette.eye} />
        </mesh>
        <mesh position={[0.03, 0.04, 0.06]}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh position={[-0.02, -0.02, 0.07]}>
          <sphereGeometry args={[0.015, 12, 12]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </mesh>
      </group>

      {/* Happy smile */}
      <mesh position={[0, -0.08, 1.04]} rotation={[0.1, 0, 0]}>
        <torusGeometry args={[0.1, 0.02, 12, 24, Math.PI]} />
        <meshBasicMaterial color={palette.eye} />
      </mesh>

      {/* Waving arms */}
      <group ref={leftArm} position={[-1.05, -0.1, 0.2]}>
        <mesh position={[0, -0.22, 0]}>
          <capsuleGeometry args={[0.1, 0.28, 8, 16]} />
          <meshStandardMaterial color={palette.body} roughness={0.35} emissive={palette.bodyEmissive} emissiveIntensity={0.08} />
        </mesh>
      </group>
      <group ref={rightArm} position={[1.05, -0.1, 0.2]}>
        <mesh position={[0, -0.22, 0]}>
          <capsuleGeometry args={[0.1, 0.28, 8, 16]} />
          <meshStandardMaterial color={palette.body} roughness={0.35} emissive={palette.bodyEmissive} emissiveIntensity={0.08} />
        </mesh>
      </group>

      {/* Sparkle on head */}
      <mesh position={[0.55, 1.05, 0.55]}>
        <octahedronGeometry args={[0.08, 0]} />
        <meshStandardMaterial color={palette.sparkle} emissive={palette.sparkle} emissiveIntensity={1} />
      </mesh>
    </group>
  );
}

function makeHeartShape(size: number) {
  const s = new THREE.Shape();
  s.moveTo(0, size * 0.25);
  s.bezierCurveTo(0, size * 0.25, -size * 0.5, 0, -size * 0.5, -size * 0.25);
  s.bezierCurveTo(-size * 0.5, -size * 0.55, 0, -size * 0.7, 0, -size * 0.9);
  s.bezierCurveTo(0, -size * 0.7, size * 0.5, -size * 0.55, size * 0.5, -size * 0.25);
  s.bezierCurveTo(size * 0.5, 0, 0, size * 0.25, 0, size * 0.25);
  return s;
}

function CuteOrbit({
  radius, speed, y, color, shape, size = 0.18, offset = 0,
}: {
  radius: number; speed: number; y: number; color: string;
  shape: "star" | "torus" | "sphere" | "capsule" | "heart"; size?: number; offset?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const heartShape = useMemo(() => (shape === "heart" ? makeHeartShape(size) : null), [shape, size]);

  useFrame((s) => {
    const t = s.clock.elapsedTime * speed + offset;
    if (!ref.current) return;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = y + Math.sin(t * 2.5) * 0.14;
    ref.current.rotation.x += 0.012;
    ref.current.rotation.y += 0.018;
    ref.current.rotation.z = Math.sin(t * 3) * 0.2;
    const pulse = 1 + Math.sin(t * 4) * 0.12;
    ref.current.scale.setScalar(pulse);
  });

  let geom: React.ReactNode;
  if (shape === "star") geom = <octahedronGeometry args={[size, 0]} />;
  else if (shape === "torus") geom = <torusGeometry args={[size, size * 0.35, 16, 32]} />;
  else if (shape === "capsule") geom = <capsuleGeometry args={[size * 0.5, size * 0.6, 8, 16]} />;
  else if (shape === "heart" && heartShape) {
    geom = <extrudeGeometry args={[heartShape, { depth: size * 0.3, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 2 }]} />;
  } else geom = <sphereGeometry args={[size, 32, 32]} />;

  return (
    <mesh ref={ref}>
      {geom}
      <meshStandardMaterial color={color} roughness={0.25} metalness={0.12} emissive={color} emissiveIntensity={0.35} />
    </mesh>
  );
}

function Sparkles({ count = 120, color }: { count?: number; color: string }) {
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
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.025;
      const mat = ref.current.material as THREE.PointsMaterial;
      mat.opacity = 0.7 + Math.sin(s.clock.elapsedTime * 2) * 0.15;
    }
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.09} color={color} transparent opacity={0.85} depthWrite={false} sizeAttenuation />
    </points>
  );
}

function FluffyCloud({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null);
  const puffs = useMemo(
    () => [
      { pos: [0, 0, 0] as const, scale: 1.4 },
      { pos: [-0.9, 0.1, 0.2] as const, scale: 1.0 },
      { pos: [0.95, 0.05, 0.15] as const, scale: 1.05 },
      { pos: [-0.45, 0.25, 0.35] as const, scale: 0.75 },
      { pos: [0.5, 0.2, 0.3] as const, scale: 0.8 },
    ],
    [],
  );
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.06;
      ref.current.position.y = -1.75 + Math.sin(s.clock.elapsedTime * 0.8) * 0.06;
    }
  });
  return (
    <group ref={ref} position={[0, -1.8, -0.3]}>
      {puffs.map((p, i) => (
        <mesh key={i} position={p.pos} scale={p.scale}>
          <sphereGeometry args={[0.65, 32, 32]} />
          <meshStandardMaterial color={color} roughness={0.95} transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingHearts({ color }: { color: string }) {
  const group = useRef<THREE.Group>(null);
  const hearts = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      x: (Math.random() - 0.5) * 5,
      z: (Math.random() - 0.5) * 3 - 2,
      speed: 0.4 + Math.random() * 0.5,
      phase: Math.random() * Math.PI * 2,
      scale: 0.06 + Math.random() * 0.05,
    }));
  }, []);

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      const h = hearts[i];
      child.position.x = h.x + Math.sin(t * h.speed + h.phase) * 0.3;
      child.position.y = -1.2 + ((t * h.speed * 0.35 + h.phase) % 4);
      child.position.z = h.z;
      child.rotation.z = Math.sin(t * 2 + h.phase) * 0.3;
      child.scale.setScalar(h.scale * (1 + Math.sin(t * 3 + h.phase) * 0.15));
    });
  });

  const heartShape = useMemo(() => makeHeartShape(1), []);

  return (
    <group ref={group}>
      {hearts.map((_, i) => (
        <mesh key={i}>
          <extrudeGeometry args={[heartShape, { depth: 0.08, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.01, bevelSegments: 1 }]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.3} transparent opacity={0.85} />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 0.5 - camera.position.x) * 0.04;
    camera.position.y += (0.25 + pointer.y * 0.3 - camera.position.y) * 0.04;
    camera.lookAt(0, 0.15, 0);
  });
  return null;
}

function Scene({ palette }: { palette: Palette }) {
  return (
    <>
      <color attach="background" args={[palette.bg]} />
      <fog attach="fog" args={[palette.bg, 9, 18]} />

      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 5, 4]} intensity={1.2} color={"#ffffff"} />
      <pointLight position={[-3, 2, 2]} intensity={1.4} color={palette.light1} />
      <pointLight position={[3, -1, 2]} intensity={1.1} color={palette.light2} />
      <pointLight position={[0, 3, -2]} intensity={0.6} color={palette.heart} />

      <Sparkles color={palette.sparkle} />
      <FluffyCloud color={palette.cloud} />
      <FloatingHearts color={palette.heart} />
      <Blob palette={palette} />

      <CuteOrbit radius={2.3} speed={0.65} y={0.45} color={palette.orbit.star} shape="star" size={0.18} />
      <CuteOrbit radius={2.6} speed={-0.5} y={-0.1} color={palette.orbit.torus} shape="torus" size={0.2} offset={1.5} />
      <CuteOrbit radius={2.1} speed={0.55} y={0.75} color={palette.orbit.sphere} shape="sphere" size={0.15} offset={3} />
      <CuteOrbit radius={2.8} speed={-0.4} y={0.25} color={palette.orbit.capsule} shape="capsule" size={0.18} offset={2} />
      <CuteOrbit radius={2.4} speed={0.6} y={-0.35} color={palette.orbit.starAlt} shape="heart" size={0.22} offset={4.2} />
      <CuteOrbit radius={2.0} speed={-0.55} y={0.55} color={palette.heart} shape="heart" size={0.18} offset={1} />

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
      camera={{ position: [0, 0.3, 5], fov: 48 }}
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
