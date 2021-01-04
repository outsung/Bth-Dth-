import React, { useEffect, useRef } from 'react';
import { Mesh, Vector3, Group } from 'three';
import { Object3DNode } from 'react-three-fiber';
import { Text } from '@react-three/drei';

// import useLayers from '../utils/useLayers';

interface titleProps extends Object3DNode<Group, typeof Group> {
  position: Vector3 | [x: number, y: number, z: number];
  content: string;
  layers: [channel: number];
  color?: string;
}

function Title({ layers, position, content, color, ...props }: titleProps) {
  const group = useRef({} as Mesh);
  useEffect(() => {
    group.current.lookAt(0, 0, 0);
  }, []);

  return (
    <group {...props} position={position} ref={group}>
      <Text layers={layers} material-color={color} fontSize={2.5}>
        {content}
      </Text>
    </group>
  );
}
Title.defaultProps = { color: '#FFFFFF' };

export default Title;
