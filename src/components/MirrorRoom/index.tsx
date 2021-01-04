import React, { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
import { useMatcapTexture, Octahedron } from "@react-three/drei";

import Loader from "../Loader";
import Slerp from "../Slerp";

import Mirrors from "./Mirrors";
import Title from "../Title";

function BaseBackground() {
  const [matcapTexture] = useMatcapTexture("C8D1DC_575B62_818892_6E747B");
  // console.log(matcapTexture instanceof Texture);

  return (
    <Octahedron
      layers={[11]}
      name="background"
      args={[20, 4]}
      position={[0, 0, -5]}
    >
      {matcapTexture instanceof THREE.Texture ? (
        <meshMatcapMaterial
          matcap={matcapTexture}
          side={THREE.BackSide}
          transparent
          opacity={0.3}
          color="#FFFFFF"
        />
      ) : (
        <></>
      )}
    </Octahedron>
  );
}

function TitleCopies({
  layers,
  content,
  color,
}: {
  layers: [channel: number];
  content: string;
  color: string;
}) {
  const vertices = useMemo(() => {
    const y = new THREE.DodecahedronGeometry(20);
    // const y = new THREE.IcosahedronGeometry(10);
    return y.vertices;
  }, []);

  return (
    <group>
      {vertices.map((vertex) => (
        <Title
          color={color}
          layers={layers}
          position={vertex}
          content={content}
        />
      ))}
    </group>
  );
}

function useRenderTarget(settings = {}) {
  const renderTarget = useMemo(() => {
    const renderTargetSettings = {
      format: THREE.RGBAFormat,
      generateMipmaps: true,
    };

    return new THREE.WebGLCubeRenderTarget(1024, {
      ...renderTargetSettings,
      ...settings,
    });
  }, [settings]);

  const cubeCamera = useRef({} as THREE.CubeCamera);

  useFrame(({ gl, scene }) => {
    if (!cubeCamera.current.update) return;
    cubeCamera.current.update(gl, scene);
  });

  return { cubeCamera, renderTarget };
}

interface mirrorRoomProps {
  mode: "Dark" | "White";
  content: { Dark: string; White: string };
  toggleMode: () => void;
}

function MirrorRoom({ mode, content, toggleMode }: mirrorRoomProps) {
  const { cubeCamera, renderTarget } = useRenderTarget();

  const hiddenContent = content[mode === "Dark" ? "White" : "Dark"];
  const visibleContent = content[mode];

  return (
    <>
      <color
        attach="background"
        args={mode === "Dark" ? [0, 0, 0] : [1, 1, 1]}
      />
      <Suspense fallback={<Loader />}>
        <Slerp>
          {/* hidden */}
          <BaseBackground />
          <TitleCopies
            color={mode === "Dark" ? "#FFFFFF" : "#000000"}
            layers={[11]}
            content={hiddenContent}
          />
          <cubeCamera
            layers={[11]}
            ref={cubeCamera}
            args={[0.1, 100, renderTarget]}
            position={[0, 0, 5]}
          />

          {/* visible */}
          <Mirrors
            layers={[0]}
            envMap={renderTarget.texture}
            thinFilmFresnel={mode === "Dark"}
          />
          <Title
            color={mode === "Dark" ? "#FFFFFF" : "#000000"}
            layers={[0]}
            position={[0, 0, -10]}
            content={visibleContent}
            onClick={toggleMode}
          />
        </Slerp>
      </Suspense>
      <ambientLight intensity={0.7} />
    </>
  );
}

export default MirrorRoom;
