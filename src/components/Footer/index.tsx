import React from "react";
import { Container, MainInfo, HotlinesInfo, ContactInfo } from "./style";

function Footer() {
  return (
    <Container>
      <MainInfo>
        <div className="title">Werther</div>
        <div className="subTitle"> : Like Werther wrote to himself</div>
        <div className="description">
          Motivation sites that act as traffic lights in life
        </div>
      </MainInfo>

      <HotlinesInfo>
        <div className="info">suicide hotlines : </div>
        <div className="number">1393</div>
      </HotlinesInfo>

      <ContactInfo>
        <div className="github">Github</div>
        <div className="email">insung9546@gmail.com</div>
      </ContactInfo>
    </Container>
  );
}

export default Footer;
