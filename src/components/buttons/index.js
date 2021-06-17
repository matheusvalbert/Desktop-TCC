import React from 'react';

import { Container, Button, ButtonRed } from './styles';

import { useVisibility } from '../../hooks/modal';

function Buttons() {

  const { detection, setDetection, setReservasIsVisible, setGMIsVisible } = useVisibility();

  return(
    <Container>
      {
        detection
          ?
        <ButtonRed onClick={ () => { setDetection(!detection) } }>
          <h1>Parar Detecção</h1>
        </ButtonRed>
          :
        <Button onClick={ () => { setDetection(!detection) } }>
          <h1>Iniciar Detecção</h1>
        </Button>
      }
      <Button onClick={() => { setReservasIsVisible(true) }}>
        <h1>Visualizar reservas</h1>
      </Button>
      <Button onClick={() => { setGMIsVisible(true) }}>
        <h1>Gerenciar</h1>
      </Button>
    </Container>
  );
}

export default Buttons;
