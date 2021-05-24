import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 6vw;
  top : 53vh;
  width: 10vw;
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  background: #1520AB;
  height: 10vh;
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
