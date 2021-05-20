import React from 'react';

import { Container, Button, Text } from './styles';

import { useVisibility } from '../../hooks/modal';

function Buttons() {

  const { setLastDetectionsIsVisible, setHistoryIsVisible, setGMIsVisible } = useVisibility();

  return(
    <Container>
      <Button onClick={() => { setLastDetectionsIsVisible(true) }}>
        <Text>Ultimas Detecções</Text>
      </Button>
      <Button onClick={() => { setHistoryIsVisible(true) }}>
        <Text>Histórico</Text>
      </Button>
      <Button onClick={() => { setGMIsVisible(true) }}>
        <Text>Gerenciar Moradores</Text>
      </Button>
    </Container>
  );
}

export default Buttons;
