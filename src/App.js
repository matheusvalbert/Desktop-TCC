import React from 'react';

import GlobalStyle from './styles/global';
import Cameras from './components/cameras';
import Terminal from './components/terminal';
import Buttons from './components/buttons';

import UltimasDeteccoes from './components/ultimasDeteccoes';
import Historico from './components/historico';
import GerenciarMoradores from './components/gerenciarMoradores';

import { useVisibility } from './hooks/modal';
import { Admin } from './hooks/admin';

function App() {

  const { lastDetectionsIsVisible, historyIsVisible, gMIsVisible } = useVisibility();

  return(
    <>
      <Cameras />
      <Terminal />
      <Buttons />

      { lastDetectionsIsVisible ? <UltimasDeteccoes /> : null }
      { historyIsVisible ? <Historico /> : null }
      { gMIsVisible ? <Admin><GerenciarMoradores /></Admin> : null }

      <GlobalStyle />
    </>
  );
}

export default App;
