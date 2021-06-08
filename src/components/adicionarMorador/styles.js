import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2vh;
`;

export const Title = styled.h3`
  font-size: calc(1.5vh + 1.5vw);
  padding-bottom: 1vh;
`;

export const ScrollList = styled.div`
  height: 48vh;
  width: 23vw;
  overflow-y: scroll;
`;

export const FormTitle = styled.div`
  padding-bottom: 2vh;
`;

export const FormAdd = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextPassword = styled.h1`
  font-size: calc(1vh + 1vw);
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
  height: 6vh;
  width: 15vw;
  border-color: #F2F2F2;
  border-radius: calc(1vh + 1vw);
`;

export const Text = styled.h1`
  font-size: calc(1vh + 1vw);
  color: #FFF;
`;

export const Item = styled.div`
  display: flex;
  background: #FFF;
  margin-bottom: .5vh;
  height: 4vh;
  align-items: center;
  justify-content: space-between;
  padding-left: 1vw;
  border-radius: calc(.3vh + .3vw);
  margin-right: .5vw;
`;

export const TextItem = styled.h3`
  font-size: calc(.8vh + .8vw);
`;

export const FormUpdate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconPadding = styled.div`
  position: absolute;
  padding-left: 20vw;
  font-size: calc(1.4vh + 1.4vw);
`;

export const Back = styled.form`
  position: absolute;
  padding-top: 1vh;
  padding-left: .5vw;
  font-size: calc(1.4vh + 1.4vw);
`;

export const TextAdd = styled.h1`
  font-size: calc(1vh + 1vw);
  margin-bottom: 1vh;
`;
