import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 4vh;
`;

export const Output = styled.div`
  background: #FFF;
  width: 50vw;
  height: 39vh;
  margin-bottom: 5vh;
  margin-left: 6vw;
  border-radius: calc(.5vh + .5vw);
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 1vh;
  margin-bottom: 1vh;
  font-size: calc(1vh + 1vw);
`;

export const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1vh;
`;

export const Image = styled.img`
  height: 20vh;
  object-fit: cover;
  border-radius: calc(1vh + 1vw);
`;

export const InfoDiv = styled.div`
  margin-left: 3vw;
`;

export const InfoText = styled.h1`
  font-size: calc(.68vh + .68vw);
  margin-bottom: .5vh;
`;
