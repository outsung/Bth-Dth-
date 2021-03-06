import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "react-three-fiber";

type slerpProps = {
  children: React.ReactNode;
};

function Slerp({ children, ...args }: slerpProps) {
  const group = useRef({} as THREE.Group);
  const { viewport } = useThree();

  const [rotationEuler, rotationQuaternion] = useMemo(
    () => [new THREE.Euler(0, 0, 0), new THREE.Quaternion(0, 0, 0, 0)],
    []
  );

  useFrame(({ mouse }) => {
    if (!group.current) return;

    // console.log(group.current.quaternion);

    const x = (mouse.x * viewport.width) / 100;
    const y = -(mouse.y * viewport.height) / 100;

    rotationEuler.set(y, x, 0);
    rotationQuaternion.setFromEuler(rotationEuler);
    // group.current.quaternion.slerp
    group.current.quaternion.slerp(rotationQuaternion, 0.05);
  });

  return (
    <group {...args} ref={group}>
      {children}
    </group>
  );
}

export default Slerp;
