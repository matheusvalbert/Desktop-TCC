import styled from 'styled-components';
import Webcam from 'react-webcam';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 6vh;
  width: 80vw;
  margin-left: 3vw;
`;

export const FormCamera = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SelectCamera = styled.select`
  width: 33vw;
  height: 6vh;
  background: white;
  color: '#000';
  font-size: 1.2em;
  padding-left: .5vw;
  border: none;
  border-radius: calc(.5vh + .5vw);
  margin-bottom: 1vh;
  font-size: calc(.8vh + .8vw);

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
  }
`;

export const Camera = styled.div`
  height: 39vh;
  width: 34vw;
  background: #000;
  border-radius: calc(.6vh + .6vw);
`;

export const Cam = styled(Webcam).attrs({
  audio: false,
  screenshotFormat: 'image/jpeg'
})`
  border-radius: calc(.6vh + .6vw);
  height: 39vh;
  width: 34vw;
  object-fit: cover;
`;
