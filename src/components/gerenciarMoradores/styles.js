import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 49, 49, .95);
`;

export const Container = styled.div`
  width: 60%;
  height: 60%;
  margin-left: 20%;
  margin-top: 10%;
  background: #F2F2F2;
`;

export const Icon = styled.div`
  float: right;
  margin-right: 15px;
  margin-top: 10px;
  font-size: 50px;
`;

export const Title = styled.h3`
  font-size: 40px;
  margin-bottom: 4%;
  text-align: center;
  padding-bottom: 20px;
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
  height: 100px;
  width: 300px;
  border-color: #F2F2F2;
  border-radius: 30px;
`;

export const Text = styled.h1`
  font-size: 30px;
  color: #FFF;
`;
