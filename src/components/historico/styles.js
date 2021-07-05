import styled from 'styled-components';

export const Back = styled.form`
  position: absolute;
  padding-top: 1vh;
  padding-left: .5vw;
  font-size: calc(1.4vh + 1.4vw);
`;

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

export const FormUpdate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: calc(1.5vh + 1.5vw);
  padding-bottom: 1vh;
`;

export const IconPadding = styled.div`
  position: absolute;
  padding-left: 20vw;
  font-size: calc(1.4vh + 1.4vw);
`;

export const ScrollList = styled.div`
  margin-top: 1vh;
  height: 45vh;
  width: 50vw;
  overflow-y: scroll;
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
