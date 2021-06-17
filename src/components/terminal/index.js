import React from 'react';

import { Container, Output, Title } from './styles';

function Terminal() {
  return(
    <Container>
      <Output>
        <Title>Detecção de placas</Title>
      </Output>
      <Output>
        <Title>Detecção de faces</Title>
      </Output>
    </Container>
  );
}

export default Terminal;
