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

export const Item = styled.div`
  display: flex;
  background: #FFF;
  margin-bottom: .5vh;
  height: 4vh;
  align-items: center;
  justify-content: space-between;
  padding-left: 1vw;
  padding-right: 1vw;
  border-radius: calc(.3vh + .3vw);
  margin-right: .5vw;
`;

export const TextItem = styled.h3`
  font-size: calc(.8vh + .8vw);
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2vh;
`;

export const FormUpdate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: calc(1.5vh + 1.5vw);
  padding-bottom: 9vh;
`;

export const Text = styled.h1`
  font-size: calc(1vh + 1vw);
  margin-bottom: 1.5vh;
`;

export const Input = styled.input`
  height: 5vh;
  width: 20vw;
  margin-bottom: 2vh;
  font-size: calc(1vh + 1vw);
  padding-left: calc(.5vh + .5vw);
  border-radius: calc(.5vh + .5vw);
`;

export const Submit = styled.button`
  background: #1520AB;
  height: 8vh;
  width: 18vw;
  border-color: #F2F2F2;
  border-radius: calc(1vh + 1vw);
`;

export const TextSubmit = styled.h1`
  font-size: calc(1vh + 1vw);
  color: #FFF;
`;
