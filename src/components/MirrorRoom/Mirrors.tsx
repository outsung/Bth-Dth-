import React, { useState } from "react";
import { Texture, Material } from "three";
import { useResource } from "react-three-fiber";

import ThinFilmFresnelMap from "./ThinFilmFresnelMap";

import Mirror from "./Mirror";

import mirrorsData from "./mirrorsData";

type mirrorsProps = {
  envMap: Texture;
  layers: [channel: number];
  thinFilmFresnel: boolean;
};

function Mirrors({ envMap, layers, thinFilmFresnel }: mirrorsProps) {
  const [thinFilmFresnelMap] = useState<any>(new ThinFilmFresnelMap());
  const sideMaterial = useResource<Material>();
  const reflectionMaterial = useResource<Material>();

  return (
    <group>
      <meshLambertMaterial
        ref={sideMaterial}
        map={thinFilmFresnel ? thinFilmFresnelMap : undefined}
        color="#AAAAAA"
        opacity={0.7}
        transparent
      />
      <meshLambertMaterial
        ref={reflectionMaterial}
        // map={thinFilmFresnel ? thinFilmFresnelMap : undefined}
        envMap={envMap}
        color="#FFFFFF"
        opacity={0.3}
        transparent
      />

      {mirrorsData.mirrors.map((mirror) => (
        <Mirror
          layers={layers}
          args={[mirror.args[0], mirror.args[1], mirror.args[2]]}
          position={[
            mirror.position[0],
            mirror.position[1],
            mirror.position[2],
          ]}
          rotation={[
            mirror.rotation[0],
            mirror.rotation[1],
            mirror.rotation[2],
          ]}
          sideMaterial={sideMaterial.current}
          reflectionMaterial={reflectionMaterial.current}
        />
      ))}
    </group>
  );
}

export default Mirrors;
