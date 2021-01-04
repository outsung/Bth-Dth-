import React, { useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { useFrame } from 'react-three-fiber';

// import useMousePosition from '../utils/useMousePosition';

type sampleBoxProps = {
  position?: Vector3 | [x: number, y: number, z: number];
  args?: [
    width?: number | undefined,
    height?: number | undefined,
    depth?: number | undefined,
    widthSegments?: number | undefined,
    heightSegments?: number | undefined,
    depthSegments?: number | undefined,
  ];
};

function SampleBox({ args, position }: sampleBoxProps) {
  const ref = useRef({} as Mesh);

  useFrame(() => {
    // ref.current.rotation.x = y / innerHeight;
    // ref.current.rotation.y = x / innerWidth;
    ref.current.rotation.z += 0.01;
    ref.current.rotation.y += 0.001;
  });

  return (
    <mesh position={position} ref={ref}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshBasicMaterial
        attach="material"
        color="blue"
        opacity={0.3}
        transparent
      />
    </mesh>
  );
}

SampleBox.defaultProps = { args: undefined, position: undefined };

export default SampleBox;
