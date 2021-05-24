import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: calc(1.8vh + 1.8vw);
  margin-bottom: 4vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputText = styled.h1`
  font-size: calc(1vh + 1vw);
  margin-bottom: 1vh;
`;

export const Input = styled.input`
  height: 5vh;
  width: 15vw;
  margin-bottom: 2vh;
  font-size: calc(1vh + 1vw);
  padding-left: .8vw;
  border-radius: calc(.5vh + .5vw);
`;

export const Submit = styled.button`
  background: #1520AB;
  height: 10vh;
  width: 15vw;
  border-color: #F2F2F2;
  border-radius: calc(1.2vh + 1.2vw);
`;

export const Text = styled.h1`
  font-size: calc(1.2vh + 1.2vw);
  color: #FFF;
`;
