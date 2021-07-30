import React from 'react';

import { Container, Button, ButtonRed, ButtonGreen } from './styles';

import { useVisibility } from '../../hooks/modal';
import { useCamera } from '../../hooks/camera';

function Buttons() {

  const { detection, setDetection, setNotification, setNewVisitor, setVisitorHistory, visitorColor, setVisitorColor, setReservasIsVisible, setGMIsVisible } = useVisibility();
  const { deviceInfo, deviceOneSelected, deviceTwoSelected, setDeviceOneId, setDeviceTwoId } = useCamera();

  const detectionStart = () => {

    if(deviceOneSelected === '' || deviceTwoSelected === '' || deviceOneSelected === 'Selecione uma câmera...' || deviceTwoSelected === 'Selecione uma câmera...' || deviceOneSelected === deviceTwoSelected)
      alert('Selecione as câmeras para iniciar a detecção (as câmeras necessariamente precisam ser diferentes');
    else {
      deviceInfo.forEach(device => {
        if(device.label === deviceOneSelected)
          setDeviceOneId(device.deviceId);
        if(device.label === deviceTwoSelected)
          setDeviceTwoId(device.deviceId);
      });
      setDetection(!detection);
    }
  }

  return(
    <Container>
      {
        detection
          ?
        <ButtonRed onClick={ () => { setDetection(!detection) } }>
          <h1>Parar Detecção</h1>
        </ButtonRed>
          :
        <Button onClick={ () => { detectionStart() } }>
          <h1>Iniciar Detecção</h1>
        </Button>
      }
      <Button onClick={() => { setNotification(true) }}>
        <h1>Nova notificação</h1>
      </Button>
      <Button onClick={() => { setNewVisitor(true) }}>
        <h1>Chegada visitante não cadastrado</h1>
      </Button>
      {
        visitorColor
          ?
        <ButtonGreen onClick={() => { setVisitorHistory(true); setVisitorColor(false) }}>
          <h1>Histórico visitante não cadastrado</h1>
        </ButtonGreen>
          :
        <Button onClick={() => { setVisitorHistory(true) }}>
          <h1>Histórico visitante não cadastrado</h1>
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
