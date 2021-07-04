import React from 'react';

import { useDetect } from '../../hooks/detect';

import { Container, Output, Title, ImgDiv, Image, InfoDiv, InfoText } from './styles';

function Terminal() {

  const {
    faceImg, faceType, faceName, faceNumber, faceAllowed,
    plateImg, plateType, plateName, plateNumber, plate, plateAllowed
  } = useDetect();

  return(
    <Container>
      <Output>
        <Title>Detecção de placas</Title>
        <ImgDiv><Image src={plateImg} /></ImgDiv>
        <InfoDiv>
          <InfoText>Tipo: {plateType}</InfoText>
          <InfoText>Nome: {plateName}</InfoText>
          <InfoText>Número da casa: {plateNumber}</InfoText>
          <InfoText>Placa: {plate}</InfoText>
          <InfoText>Entrada permitida: {plateAllowed}</InfoText>
        </InfoDiv>
      </Output>
      <Output>
        <Title>Detecção de faces</Title>
        <ImgDiv><Image src={faceImg} /></ImgDiv>
        <InfoDiv>
          <InfoText>Tipo: {faceType}</InfoText>
          <InfoText>Nome: {faceName}</InfoText>
          <InfoText>Número da casa: {faceNumber}</InfoText>
          <InfoText>Entrada permitida: {faceAllowed}</InfoText>
        </InfoDiv>
      </Output>
    </Container>
  );
}

export default Terminal;
