import React from "react";
import { Canvas } from "react-three-fiber";
import { softShadows } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import { PhyPlane, PhyBox, PhyChar, PhyString } from "./phy";

import Controls from "../../utils/Controls";

/*
const setConstraints = () => {
  this.words.forEach((word) => {
    for (let i = 0; i < word.children.length; i++) {
      // We get the current letter and the next letter (if it's not the penultimate)
      const letter = word.children[i];
      const nextLetter =
        i === word.children.length - 1 ? null : word.children[i + 1];

      if (!nextLetter) continue;

      // I choosed ConeTwistConstraint because it's more rigid that other constraints and it goes well for my purpose
      const c = new C.ConeTwistConstraint(letter.body, nextLetter.body, {
        pivotA: new C.Vec3(letter.size.x, 0, 0),
        pivotB: new C.Vec3(0, 0, 0),
      });

      // Optionnal but it gives us a more realistic render in my opinion
      c.collideConnected = true;

      this.world.addConstraint(c);
    }
  });
};

*/

softShadows({});

function Calendar() {
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 5, 6], fov: 60 }}
      >
        <fog attach="fog" args={["white", 0, 40]} />

        {/* 조명 */}
        <ambientLight intensity={0.4} />
        <directionalLight
          castShadow
          position={[2.5, 8, 5]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} color="#A6586D" intensity={2.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        {/* cannon */}
        <Physics gravity={[0, -10, 0]}>
          <PhyPlane
            position={[0, -0.1, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            meshProps={{ visible: false }}
          />
          <PhyPlane position={[0, 0, -5]} meshProps={{ visible: false }} />
          <PhyPlane
            position={[8, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            meshProps={{ visible: false }}
          />

          <PhyBox
            color="#f00"
            position={[-3, 4, 3]}
            args={[1, 1, 1]}
            meshProps={{
              scale: [1, 1, 1],
              castShadow: true,
              receiveShadow: true,
            }}
          />
          <PhyBox
            color="#fff"
            position={[2, 4, 2]}
            args={[0.5, 0.5, 0.5]}
            meshProps={{
              scale: [0.5, 0.5, 0.5],
              castShadow: true,
              receiveShadow: true,
            }}
          />

          <PhyString
            color="#F28B66"
            position={[0, 4, 0]}
            string="Awesome!"
            size={2}
            height={1.5}
            wordSpacing={0.001}
            meshProps={{ receiveShadow: true, castShadow: true }}
          />

          <PhyChar
            color="#F28B66"
            position={[-1.5, 2, 0]}
            char="와"
            size={3}
            height={0.5}
            meshProps={{ receiveShadow: true, castShadow: true }}
          />
          <PhyChar
            color="#F28B66"
            position={[1.5, 2, 0]}
            char="우"
            size={3}
            height={0.5}
            meshProps={{ receiveShadow: true, castShadow: true }}
          />
        </Physics>

        {/* plane */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.1, 0]}
          receiveShadow
        >
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <shadowMaterial attach="material" transparent opacity={0.4} />
        </mesh>

        <Controls />
        <gridHelper />
      </Canvas>
    </>
  );
}

export default Calendar;
