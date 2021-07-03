import React from 'react';

import { useDetect } from '../../hooks/detect';

import { Container, Output, Title, ImgDiv, Image, InfoDiv, InfoText } from './styles';

function Terminal() {

  const { faceImg, type, name, number, allowed } = useDetect();

  return(
    <Container>
      <Output>
        <Title>Detecção de placas</Title>
      </Output>
      <Output>
        <Title>Detecção de faces</Title>
        <ImgDiv><Image src={faceImg} /></ImgDiv>
        <InfoDiv>
          <InfoText>Tipo: {type}</InfoText>
          <InfoText>Nome: {name}</InfoText>
          <InfoText>Número da casa: {number}</InfoText>
          <InfoText>Entrada permitida: {allowed}</InfoText>
        </InfoDiv>
      </Output>
    </Container>
  );
}

export default Terminal;
