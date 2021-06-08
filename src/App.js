import React from 'react';

import GlobalStyle from './styles/global';
import Cameras from './components/cameras';
import Terminal from './components/terminal';
import Buttons from './components/buttons';

import UltimasDeteccoes from './components/ultimasDeteccoes';
import Historico from './components/historico';
import GerenciarMoradores from './components/gerenciarMoradores';

import { useVisibility } from './hooks/modal';
import { Morador } from './hooks/morador';
import { Ambiente } from './hooks/ambiente';

function App() {

  const { lastDetectionsIsVisible, historyIsVisible, gMIsVisible } = useVisibility();

  return(
    <>
      <Cameras />
      <Terminal />
      <Buttons />

      { lastDetectionsIsVisible ? <UltimasDeteccoes /> : null }
      { historyIsVisible ? <Historico /> : null }
      { gMIsVisible ? <Morador><Ambiente><GerenciarMoradores /></Ambiente></Morador> : null }

      <GlobalStyle />
    </>
  );
}

export default App;
