import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 5vw;
  top : 5vh;
  width: 10vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  background: #1520AB;
  height: 13vh;
  width: 15vw;
  padding-left: 1vh;
  padding-right: 1vh;
  border-color: #98FF98;
  border-radius: calc(1vh + 1vw);

  h1 {
    font-size: calc(1vh + 1vw);
    color: #FFF;
  }
`;

export const ButtonRed = styled.button`
  background: #FF0000;
  height: 13vh;
  width: 15vw;
  padding-left: 1vh;
  padding-right: 1vh;
  border-color: #98FF98;
  border-radius: calc(1vh + 1vw);

  h1 {
    font-size: calc(1vh + 1vw);
    color: #FFF;
  }
`;

export const ButtonGreen = styled.button`
  background: #03BB85;
  height: 13vh;
  width: 15vw;
  padding-left: 1vh;
  padding-right: 1vh;
  border-color: #98FF98;
  border-radius: calc(1vh + 1vw);

  h1 {
    font-size: calc(1vh + 1vw);
    color: #FFF;
  }
`;
