import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';

import Container from './style';

import MirrorRoom from '../components/MirrorRoom';
import Controls from '../utils/Controls';

export default function App() {
  const [mode, setMode] = useState<'Dark' | 'White'>('Dark');

  const toggleMode = () => {
    setMode(mode === 'Dark' ? 'White' : 'Dark');
  };

  return (
    <Container>
      <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
        <MirrorRoom
          mode={mode}
          content={{ Dark: 'Death', White: 'Birth' }}
          toggleMode={toggleMode}
        />

        {/* dev */}
        {/* <Controls />
        <gridHelper /> */}
      </Canvas>
    </Container>
  );
}
