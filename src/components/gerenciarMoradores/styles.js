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
  border-radius: 10px;
`;

export const Icon = styled.div`
  float: right;
  padding-right: 1vw;
  padding-top: 1vh;
  font-size: 3em;
`;

export const Title = styled.h3`
  font-size: 3rem;
  margin-bottom: 4%;
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
  border-radius: 30px;
  padding-left: 1vh;
  padding-right: 1vh;
`;

export const Text = styled.h1`
  font-size: 1.5rem;
  color: #FFF;
`;
