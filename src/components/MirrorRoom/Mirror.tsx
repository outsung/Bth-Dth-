import React, { useRef } from 'react';
import { Mesh, Material, Euler, Vector3 } from 'three';
import { useFrame } from 'react-three-fiber';

import { Box } from '@react-three/drei';

type mirrorProps = {
  sideMaterial: Material;
  reflectionMaterial: Material;
  args?: [
    width?: number | undefined,
    height?: number | undefined,
    depth?: number | undefined,
    widthSegments?: number | undefined,
    heightSegments?: number | undefined,
    depthSegments?: number | undefined,
  ];
  rotation?:
    | Euler
    | [x: number, y: number, z: number, order?: string | undefined];
  position?: Vector3 | [x: number, y: number, z: number];
  layers?: [channel: number];
};

function Mirror({
  sideMaterial,
  reflectionMaterial,
  args,
  position,
  rotation,
  layers,
}: mirrorProps) {
  const ref = useRef({} as Mesh);

  useFrame(() => {
    ref.current.rotation.y += 0.001;
    ref.current.rotation.z += 0.01;
  });

  return (
    <Box
      layers={layers}
      ref={ref}
      args={args}
      position={position}
      rotation={rotation}
      material={[
        sideMaterial,
        sideMaterial,
        sideMaterial,
        sideMaterial,
        reflectionMaterial,
        reflectionMaterial,
      ]}
    />
  );
}
Mirror.defaultProps = {
  args: undefined,
  position: undefined,
  rotation: undefined,
  layers: [0],
};

export default Mirror;
