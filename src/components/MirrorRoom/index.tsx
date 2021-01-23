import React, { Suspense, useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "react-three-fiber";
import { useMatcapTexture, Octahedron, HTML } from "@react-three/drei";

import Loader from "../Loader";
// import Slerp from "../Slerp";

import Mirrors from "./Mirrors";
import Title from "../Title";

import Shade from "./style";

function equation(x: number, x1: number, y1: number, x2: number, y2: number) {
  return ((y2 - y1) / (x2 - x1)) * (x - x1) + y1;
}

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
    const y = new THREE.DodecahedronGeometry(25);
    // const y = new THREE.IcosahedronGeometry(10);
    return y.vertices;
  }, []);

  return (
    <group>
      {vertices.map((vertex, i) => (
        <Title
          key={i}
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
  content: { Dark: string; White: string };
  isFooter: boolean;
  addFooter: () => void;
}

function MirrorRoom({ content, isFooter, addFooter }: mirrorRoomProps) {
  const { camera } = useThree();
  const scrollRef = useRef({} as THREE.Group);
  const { cubeCamera, renderTarget } = useRenderTarget();

  const [mode, setMode] = useState<"Dark" | "White">("White");
  const [changed, setChanged] = useState(false);

  const hiddenContent = content[mode === "Dark" ? "White" : "Dark"];
  const visibleContent = content[mode];

  const scrollY = useRef(0);
  // camera.position.z;

  const scroll = useMemo(
    () =>
      function (this: Window, ev: WheelEvent) {
        scrollY.current += ev.deltaY * 0.01;

        let type = 0;
        if (scrollY.current < 0) {
          scrollY.current = 0;
          type = 0;
        } else if (scrollY.current < 40) {
          type = 1;
        } else if (scrollY.current < 45) {
          type = 2;
        } else if (scrollY.current < 50) {
          type = 3;
        } else if (scrollY.current < 90) {
          type = 4;
        } else {
          scrollY.current = 90;
          type = 5;
          addFooter();
        }

        // console.log(
        //   `type : ${type},\nscrollY : ${scrollY.current},\nposition.z : ${camera.position.z}`
        // );

        const { x, y } = camera.position;

        if (type === 0) {
          camera.position.lerp(new THREE.Vector3(x, y, 4), 1);
        } else if (type === 1) {
          setChanged(false);
          camera.position.lerp(
            new THREE.Vector3(x, y, equation(scrollY.current, 0, 4, 40, -9.9)),
            1
          );
        } else if (type === 2) {
          setChanged(true);
          setMode("White");
          camera.position.lerp(new THREE.Vector3(x, y, -9.9), 1);
        } else if (type === 3) {
          setChanged(true);
          setMode("Dark");
          camera.position.lerp(new THREE.Vector3(x, y, -9.9), 1);
        } else if (type === 4) {
          setChanged(false);
          camera.position.lerp(
            new THREE.Vector3(x, y, equation(scrollY.current, 50, -9.9, 90, 4)),
            1
          );
        } else if (type === 5) {
          camera.position.lerp(new THREE.Vector3(x, y, 4), 1);
        }
      },
    [camera, addFooter]
  );

  useEffect(() => {
    if (!isFooter) {
      window.addEventListener("wheel", scroll);
    }
    return () => {
      window.removeEventListener("wheel", scroll);
    };
  }, [scroll, isFooter]);

  return (
    <>
      <color
        attach="background"
        args={mode === "Dark" ? [0, 0, 0] : [1, 1, 1]}
      />
      <Suspense fallback={<Loader />}>
        {/* <Slerp> */}
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
        <group ref={scrollRef}>
          <HTML
            position={[-8.5, 5, -17.3]}
            style={{ display: changed ? "block" : "none" }}
          >
            <Shade />
          </HTML>
          <Title
            color={mode === "Dark" ? "#FFFFFF" : "#000000"}
            layers={[0]}
            position={mode === "Dark" ? [0, 0, -10] : [0.3, -0.6, -10]}
            content={visibleContent}
          />
        </group>
        {/* </Slerp> */}
      </Suspense>
      <ambientLight intensity={0.7} />
    </>
  );
}

export default MirrorRoom;
