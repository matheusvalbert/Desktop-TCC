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
  font-size: 2rem;
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
  font-size: 30px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 20vw;
  height: 5vh;
  margin-bottom: 2vh;
  font-size: 25px;
  padding-left: 8px;
  border-radius: 10px;
`;

export const Submit = styled.button`
  background: #1520AB;
  height: 6vh;
  width: 15vw;
  border-color: #F2F2F2;
  border-radius: 30px;
`;

export const Text = styled.h1`
  font-size: 2em;
  color: #FFF;
`;

export const Item = styled.div`
  display: flex;
  background: #FFF;
  margin-bottom: 5px;
  height: 4vh;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  border-radius: 10px;
  margin-right: 5px;
`;

export const TextItem = styled.h3`
  font-size: 1.2em;
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
`;

export const Back = styled.form`
  position: absolute;
  padding-top: 10px;
  padding-left: 10px;
`;

export const TextAdd = styled.h1`
  font-size: 1.3em;
  margin-bottom: 10px;
`;
