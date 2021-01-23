import styled from 'styled-components';

export const Container = styled.footer`
  position: relative;

  width: 100vw;
  height: 200px;

  background-color: #000;
  color: #bbb;

`;

export const MainInfo = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;

  & > .title {
    display: inline;
    font-size: 30px;
    font-weight: bold;
  }
  & > .subTitle {
    display: inline;
    font-size: 15px;
  }
  & > .description {
    font-size: 14px;
    margin-top: 5px;
    color: #888;
  }
`;

export const HotlinesInfo = styled.div`
  position: absolute;
  bottom: 15px;
  left: 20px;

  color: #aaa;

  & > .info {
    display: inline;
    font-size: 16px;
  }
  & > .number {
    display: inline;
    font-size: 13px;
  }
`;


export const ContactInfo = styled.div`
  position: absolute;
  right: 20px;
  bottom: 15px;

  text-align: right;

  color: #aaa;

  & > .github {
    font-size: 16px;
  }
  & > .email {
    font-size: 13px;
  }
`;