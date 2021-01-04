import React from "react";

import { Container, MainText, Count, Number } from "./style";

function TodayUsers() {
  return (
    <Container>
      <MainText>Werther used today</MainText>
      <Count>
        <Number>...</Number> people
      </Count>
    </Container>
  );
}

export default TodayUsers;
