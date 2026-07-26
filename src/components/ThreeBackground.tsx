"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/contexts/ThemeContext";

const NODE_COUNT = 64;
const MAX_LINK_DIST = 3.4;
const MAX_LINKS_PER_NODE = 3;
const BOUNDS = { x: 9.5, y: 5.5, z: 4 };

type Palette = {
  node: string;
  nodeCore: string;
  line: string;
  nodeOpacity: number;
  lineOpacity: number;
  geometryOpacity: number;
};

const DARK_PALETTE: Palette = {
  node: "#a3e635",
  nodeCore: "#67e8f9",
  line: "#4ade80",
  nodeOpacity: 0.85,
  lineOpacity: 0.22,
  geometryOpacity: 0.4,
};

const LIGHT_PALETTE: Palette = {
  node: "#3f6212",
  nodeCore: "#0e7490",
  line: "#4d7c0f",
  nodeOpacity: 0.55,
  lineOpacity: 0.12,
  geometryOpacity: 0.2,
};

const GEOMETRY_KINDS = [
  "icosahedron",
  "octahedron",
  "torus",
  "dodecahedron",
  "tetrahedron",
  "torusKnot",
] as const;

type GeometryKind = (typeof GEOMETRY_KINDS)[number];

interface GeoSpec {
  kind: GeometryKind;
  position: [number, number, number];
  scale: number;
  rotSpeed: [number, number, number];
  floatAmp: number;
  floatFreq: number;
  phase: number;
  color: string;
}

function buildGeometrySpecs(palette: Palette): GeoSpec[] {
  return GEOMETRY_KINDS.map((kind, i) => ({
    kind,
    position: [
      (Math.random() * 2 - 1) * 8.5,
      (Math.random() * 2 - 1) * 4.8,
      (Math.random() * 2 - 1) * 3.5 - 1.5,
    ],
    scale: 0.55 + Math.random() * 0.65,
    rotSpeed: [
      0.12 + Math.random() * 0.28,
      0.12 + Math.random() * 0.28,
      0.05 + Math.random() * 0.15,
    ],
    floatAmp: 0.4 + Math.random() * 0.4,
    floatFreq: 0.12 + Math.random() * 0.16,
    phase: Math.random() * Math.PI * 2,
    color: i % 2 === 0 ? palette.node : palette.line,
  }));
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const listener = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);
  return reduced;
}

function buildNetwork() {
  const nodes: THREE.Vector3[] = [];
  for (let i = 0; i < NODE_COUNT; i += 1) {
    nodes.push(
      new THREE.Vector3(
        (Math.random() * 2 - 1) * BOUNDS.x,
        (Math.random() * 2 - 1) * BOUNDS.y,
        (Math.random() * 2 - 1) * BOUNDS.z,
      ),
    );
  }

  const linkPairs: [number, number][] = [];
  const degree = new Array(NODE_COUNT).fill(0);

  for (let i = 0; i < NODE_COUNT; i += 1) {
    const distances: { j: number; d: number }[] = [];
    for (let j = 0; j < NODE_COUNT; j += 1) {
      if (i === j) continue;
      const d = nodes[i].distanceTo(nodes[j]);
      if (d <= MAX_LINK_DIST) distances.push({ j, d });
    }
    distances.sort((a, b) => a.d - b.d);
    for (const { j } of distances) {
      if (degree[i] >= MAX_LINKS_PER_NODE) break;
      if (degree[j] >= MAX_LINKS_PER_NODE) continue;
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (linkPairs.some(([a, b]) => `${a}-${b}` === key)) continue;
      linkPairs.push([i, j]);
      degree[i] += 1;
      degree[j] += 1;
    }
  }

  const linePositions = new Float32Array(linkPairs.length * 6);
  linkPairs.forEach(([a, b], idx) => {
    linePositions[idx * 6] = nodes[a].x;
    linePositions[idx * 6 + 1] = nodes[a].y;
    linePositions[idx * 6 + 2] = nodes[a].z;
    linePositions[idx * 6 + 3] = nodes[b].x;
    linePositions[idx * 6 + 4] = nodes[b].y;
    linePositions[idx * 6 + 5] = nodes[b].z;
  });

  const nodePositions = new Float32Array(NODE_COUNT * 3);
  nodes.forEach((node, idx) => {
    nodePositions[idx * 3] = node.x;
    nodePositions[idx * 3 + 1] = node.y;
    nodePositions[idx * 3 + 2] = node.z;
  });

  const seeds = new Float32Array(NODE_COUNT).map(() => Math.random() * Math.PI * 2);

  return { nodePositions, linePositions, seeds };
}

const NetworkScene = ({ palette }: { palette: Palette }) => {
  const network = useMemo(() => buildNetwork(), []);
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const basePositions = useRef(network.nodePositions.slice());
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    target.current.x += (state.mouse.x - target.current.x) * 0.02;
    target.current.y += (state.mouse.y - target.current.y) * 0.02;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.045;
      groupRef.current.rotation.x = target.current.y * 0.18;
      groupRef.current.rotation.z = -target.current.x * 0.08;
      groupRef.current.position.y = Math.sin(t * 0.18) * 0.4;
    }

    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < NODE_COUNT; i += 1) {
        const seed = network.seeds[i];
        positions.setY(
          i,
          basePositions.current[i * 3 + 1] + Math.sin(t * 0.6 + seed) * 0.18,
        );
      }
      positions.needsUpdate = true;

      const material = pointsRef.current.material as THREE.PointsMaterial;
      material.opacity = palette.nodeOpacity * (0.75 + Math.sin(t * 0.8) * 0.15);
    }

    if (linesRef.current) {
      const material = linesRef.current.material as THREE.LineBasicMaterial;
      material.opacity = palette.lineOpacity * (0.8 + Math.sin(t * 0.5 + 1) * 0.2);
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[network.linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color={palette.line} transparent opacity={palette.lineOpacity} />
      </lineSegments>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[network.nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={palette.node}
          size={0.11}
          sizeAttenuation
          transparent
          opacity={palette.nodeOpacity}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

const geometryNode = (kind: GeometryKind) => {
  switch (kind) {
    case "icosahedron":
      return <icosahedronGeometry args={[1, 0]} />;
    case "octahedron":
      return <octahedronGeometry args={[1, 0]} />;
    case "torus":
      return <torusGeometry args={[0.8, 0.26, 8, 24]} />;
    case "dodecahedron":
      return <dodecahedronGeometry args={[1, 0]} />;
    case "tetrahedron":
      return <tetrahedronGeometry args={[1, 0]} />;
    case "torusKnot":
      return <torusKnotGeometry args={[0.65, 0.2, 100, 12]} />;
    default:
      return null;
  }
};

const GeometryMesh = ({ spec, opacity }: { spec: GeoSpec; opacity: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  const basePos = useMemo(() => new THREE.Vector3(...spec.position), [spec.position]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x += spec.rotSpeed[0] * delta;
    ref.current.rotation.y += spec.rotSpeed[1] * delta;
    ref.current.rotation.z += spec.rotSpeed[2] * delta;
    ref.current.position.y = basePos.y + Math.sin(t * spec.floatFreq + spec.phase) * spec.floatAmp;
    ref.current.position.x = basePos.x + Math.cos(t * spec.floatFreq * 0.7 + spec.phase) * (spec.floatAmp * 0.6);
    ref.current.position.z = basePos.z + Math.sin(t * spec.floatFreq * 0.5 + spec.phase) * (spec.floatAmp * 0.5);
  });

  return (
    <mesh ref={ref} position={spec.position} scale={spec.scale}>
      {geometryNode(spec.kind)}
      <meshBasicMaterial color={spec.color} wireframe transparent opacity={opacity} />
    </mesh>
  );
};

const FloatingGeometries = ({ palette }: { palette: Palette }) => {
  const specs = useMemo(() => buildGeometrySpecs(palette), [palette]);
  return (
    <group>
      {specs.map((spec, index) => (
        <GeometryMesh key={`${spec.kind}-${index}`} spec={spec} opacity={palette.geometryOpacity} />
      ))}
    </group>
  );
};

const FovRig = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0, 9);
  }, [camera]);
  return null;
};

const ThreeBackground = () => {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  let theme = "dark";
  try {
    const themeContext = useTheme();
    if (themeContext) theme = themeContext.theme;
  } catch {
    // ThemeContext not available; fall back to dark palette.
  }

  useEffect(() => setMounted(true), []);

  if (!mounted || reducedMotion) return null;

  const palette = theme === "light" ? LIGHT_PALETTE : DARK_PALETTE;

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        camera={{ fov: 50, position: [0, 0, 9] }}
      >
        <FovRig />
        <NetworkScene palette={palette} />
        <FloatingGeometries palette={palette} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
