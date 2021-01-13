import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 450px;

  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

export const MainText = styled.div`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Count = styled.div`
  font-size: 50px;
`;

export const Number = styled.div`
  display: inline;
  font-size: 40px;
`;