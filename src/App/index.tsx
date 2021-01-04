import React, { useState } from "react";
import { Canvas } from "react-three-fiber";

import Container from "./style";

import MirrorRoom from "../components/MirrorRoom";
// import Controls from "../utils/Controls";

import Footer from "../components/Footer";
import TodayUsers from "../components/TodayUsers";

export default function App() {
  const [mode, setMode] = useState<"Dark" | "White">("White");

  const toggleMode = () => {
    setMode(mode === "Dark" ? "White" : "Dark");
  };

  return (
    <Container>
      <Canvas concurrent shadowMap camera={{ position: [0, 0, 4], fov: 70 }}>
        <MirrorRoom
          mode={mode}
          content={{ Dark: "Death", White: "Werther" }}
          toggleMode={toggleMode}
        />

        {/* dev */}
        {/* <Controls />
        <gridHelper /> */}
      </Canvas>
      <TodayUsers />
      <Footer />
    </Container>
  );
}
