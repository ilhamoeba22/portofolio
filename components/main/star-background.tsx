"use client";

import {
  Points,
  PointMaterial,
  type PointsInstancesProps,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import type { Points as PointsType } from "three";

function generateSpherePoints(count: number, radius: number): Float32Array {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    let x = 0;
    let y = 0;
    let z = 0;

    do {
      x = (Math.random() * 2 - 1) * radius;
      y = (Math.random() * 2 - 1) * radius;
      z = (Math.random() * 2 - 1) * radius;
    } while (x * x + y * y + z * z > radius * radius);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }

  return positions;
}

const useCanRenderStars = () => {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setCanRender(desktopQuery.matches && !reducedMotionQuery.matches);
    };

    update();
    desktopQuery.addEventListener("change", update);
    reducedMotionQuery.addEventListener("change", update);

    return () => {
      desktopQuery.removeEventListener("change", update);
      reducedMotionQuery.removeEventListener("change", update);
    };
  }, []);

  return canRender;
};

export const StarBackground = (props: PointsInstancesProps) => {
  const ref = useRef<PointsType | null>(null);
  const sphere = useMemo(() => generateSpherePoints(700, 1.2), []);

  useFrame((_state, delta) => {
    if (ref.current && document.visibilityState === "visible") {
      ref.current.rotation.x -= delta / 16;
      ref.current.rotation.y -= delta / 22;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  const canRenderStars = useCanRenderStars();

  if (!canRenderStars) {
    return null;
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};
