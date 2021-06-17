import React from 'react';

import GlobalStyle from './styles/global';
import Cameras from './components/cameras';
import Terminal from './components/terminal';
import Buttons from './components/buttons';

import Reservas from './components/reservas';
import GerenciarMoradores from './components/gerenciarMoradores';

import { useVisibility } from './hooks/modal';
import { Morador } from './hooks/morador';
import { Ambiente } from './hooks/ambiente';

function App() {

  const { reservasIsVisible, gMIsVisible } = useVisibility();

  return(
    <>
      <Cameras />
      <Terminal />
      <Buttons />

      { reservasIsVisible ? <Reservas /> : null }
      { gMIsVisible ? <Morador><Ambiente><GerenciarMoradores /></Ambiente></Morador> : null }

      <GlobalStyle />
    </>
  );
}

export default App;
