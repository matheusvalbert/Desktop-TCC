import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(46, 49, 49, .95);
`;

export const Container = styled.div`
  height: 60vh;
  width: 60vw;
  margin-left: 20vw;
  margin-top: 20vh;
  background: #F2F2F2;
  border-radius: calc(.5vh + .5vw);
`;

export const Icon = styled.div`
  position: absolute;
  right: 0;
  padding-right: 21vw;
  padding-top: 1vh;
  font-size: calc(1.8vh + 1.8vw);
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: calc(1.7vh + 1.7vw);
  margin-bottom: 4vh;
  text-align: center;
  padding-bottom: 2vh;
`;

export const Form = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Submit = styled.button`
  background: #1520AB;
  height: 10vh;
  width: 18vw;
  border-color: #F2F2F2;
  border-radius: calc(1vh + 1vw);
  padding-left: 1vh;
  padding-right: 1vh;
`;

export const Text = styled.h1`
  font-size: calc(1vh + 1vw);
  color: #FFF;
`;
