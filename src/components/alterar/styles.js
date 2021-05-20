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
  padding-top: 20px;
`;

export const Title = styled.h3`
  font-size: 40px;
  padding-bottom: 10px;
`;

export const ScrollList = styled.div`
  height: 480px;
  width: 400px;
  overflow-y: scroll;
`;

export const FormSenha = styled.div`
  padding-bottom: 20px;
`;

export const FormNovaSenha = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextSenha = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  font-size: 25px;
  padding-left: 8px;
  border-radius: 10px;
`;

export const Submit = styled.button`
  background: #1520AB;
  height: 60px;
  width: 250px;
  border-color: #F2F2F2;
  border-radius: 30px;
`;

export const Text = styled.h1`
  font-size: 30px;
  color: #FFF;
`;

export const Item = styled.div`
  display: flex;
  background: #FFF;
  margin-bottom: 5px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  border-radius: 10px;
  margin-right: 5px;
`;

export const TextItem = styled.h3`
  font-size: 20px;
`;

export const DivIcon = styled.div`
  padding-right: 10px;
`;

export const FormUpdate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconPadding = styled.div`
  position: absolute;
  padding-left: 350px;
`;
