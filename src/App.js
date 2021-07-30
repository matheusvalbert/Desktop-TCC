import React, { useEffect } from 'react';

import GlobalStyle from './styles/global';
import Cameras from './components/cameras';
import Terminal from './components/terminal';
import Buttons from './components/buttons';

import Notificacao from './components/notificacao';
import Visitante from './components/visitante';
import VisitanteHistorico from './components/visitanteHistorico';
import Reservas from './components/reservas';
import GerenciarMoradores from './components/gerenciarMoradores';

import { useVisibility } from './hooks/modal';

import { Morador } from './hooks/morador';
import { Ambiente } from './hooks/ambiente';
import { Historico } from './hooks/historico';

import { numberNotifications } from './services/notificacao';

function App() {

  const { notification, newVisitor, visitorHistory, setVisitorColor, reservasIsVisible, gMIsVisible } = useVisibility();
  var delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    function verifyNotification(number, firstExecution) {
      delay(2500).then(async () => {
        const response = await numberNotifications();
        if(number !== response.data.visitors && firstExecution === false)
          setVisitorColor(true);
        verifyNotification(response.data.visitors, false);
      });
    }
    verifyNotification(0, true);
  }, [setVisitorColor]);

  return(
    <>
      <Cameras />
      <Terminal />
      <Buttons />

      { reservasIsVisible ? <Reservas /> : null }
      { gMIsVisible ? <Morador><Ambiente><Historico><GerenciarMoradores /></Historico></Ambiente></Morador> : null }
      { notification ? <Notificacao /> : null }
      { newVisitor ? <Visitante /> : null }
      { visitorHistory ? <VisitanteHistorico /> : null }
      <GlobalStyle />
    </>
  );
}

export default App;
