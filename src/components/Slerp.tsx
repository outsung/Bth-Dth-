import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "react-three-fiber";

type slerpProps = {
  children: React.ReactNode;
};

function Slerp({ children, ...args }: slerpProps) {
  const group = useRef<THREE.Group>();
  const { viewport } = useThree();

  const [rotationEuler, rotationQuaternion] = useMemo(
    () => [new THREE.Euler(0, 0, 0), new THREE.Quaternion(0, 0, 0, 0)],
    []
  );

  useFrame(({ mouse }) => {
    if (!group.current) return;

    const x = (mouse.x * viewport.width) / 20;
    const y =
      (mouse.y * viewport.height) / 100 - (mouse.y * viewport.height) / 20;
    rotationEuler.set(y, x, 0);
    rotationQuaternion.setFromEuler(rotationEuler);
    group.current.quaternion.slerp(rotationQuaternion, 0.1);
  });

  return (
    <group {...args} ref={group}>
      {children}
    </group>
  );
}

export default Slerp;
