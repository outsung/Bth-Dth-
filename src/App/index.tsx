import React from "react";
import { Canvas } from "react-three-fiber";

import Container from "./style";

import MirrorRoom from "../components/MirrorRoom";
// import Controls from "../utils/Controls";

// import Introduce from "../components/Introduce";
// import Footer from "../components/Footer";
// import TodayUsers from "../components/TodayUsers";

export default function App() {
  return (
    <>
      <Container>
        <Canvas
          concurrent
          shadowMap
          camera={{ position: [0, 0.1, 4], fov: 70 }}
        >
          <MirrorRoom content={{ Dark: "Death", White: "Werther" }} />

          {/* dev */}
          {/* <Controls /> */}
          {/* <gridHelper /> */}
        </Canvas>
      </Container>
      {/* <Footer /> */}
    </>
  );
}
