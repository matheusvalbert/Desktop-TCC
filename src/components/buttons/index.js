import React from 'react';

import { Container, Button } from './styles';

import { useVisibility } from '../../hooks/modal';

function Buttons() {

  const { setLastDetectionsIsVisible, setHistoryIsVisible, setGMIsVisible } = useVisibility();

  return(
    <Container>
      <Button onClick={() => { setLastDetectionsIsVisible(true) }}>
        <h1>Ultimas Detecções</h1>
      </Button>
      <Button onClick={() => { setHistoryIsVisible(true) }}>
        <h1>Histórico</h1>
      </Button>
      <Button onClick={() => { setGMIsVisible(true) }}>
        <h1>Gerenciar Moradores</h1>
      </Button>
    </Container>
  );
}

export default Buttons;
