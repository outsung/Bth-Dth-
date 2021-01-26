import React, { useState, useMemo, useRef } from "react";
// import { Canvas } from "react-three-fiber";

import { AppPage, Container } from "./style";

// import MirrorRoom from "../components/MirrorRoom";
import Calendar from "../components/Calendar";
// import Controls from "../utils/Controls";

// import Introduce from "../components/Introduce";
import Footer from "../components/Footer";
// import TodayUsers from "../components/TodayUsers";

export default function App() {
  const [isFooter, setIsFooter] = useState(false);
  const pageRef = useRef({} as HTMLDivElement);
  const scrollY = useRef(0);

  // const addFooter = () => {
  //   pageRef.current.addEventListener("wheel", scroll);
  //   setIsFooter(true);
  //   scrollY.current = 1;
  // };

  const scroll = useMemo(
    () =>
      function (this: HTMLDivElement, ev: WheelEvent) {
        scrollY.current += ev.deltaY;

        let type = 0;
        if (scrollY.current < 0) {
          scrollY.current = 0;
          type = 0;
          pageRef.current.removeEventListener("wheel", scroll);
          setIsFooter(false);
        } else if (scrollY.current < 200) {
          type = 1;
        } else {
          scrollY.current = 200;
          type = 2;
        }
        return type;
      },
    []
  );

  return (
    <AppPage ref={pageRef}>
      {/* <Container>
        <Canvas
          concurrent
          shadowMap
          camera={{ position: [0, 0.1, 4], fov: 70 }}
        >
          <MirrorRoom
            content={{ Dark: "Death", White: "Werther" }}
            isFooter={isFooter}
            addFooter={addFooter}
          />

          <Controls />
          <gridHelper />
        </Canvas>
      </Container> */}

      <Container>
        <Calendar />
      </Container>
      {isFooter ? <Footer /> : <></>}
    </AppPage>
  );
}
