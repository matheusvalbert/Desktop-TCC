import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 50px;
`;

export const FormCamera = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SelectCamera = styled.select`
  width: 37vw;
  height: 6vh;
  background: white;
  color: '#000';
  font-size: 1.2em;
  padding-left: 5px;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    padding: 0px 2px 1px;
  }
`;

export const Camera = styled.div`
  height: 39vh;
  width: 39vw;
  background: #000;
  border-radius: 20px;
`;
