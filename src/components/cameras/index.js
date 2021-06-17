import React, { useEffect } from 'react';
import Webcam from 'react-webcam';

import { useVisibility } from '../../hooks/modal';
import { useCamera } from '../../hooks/camera';

import { Container, FormCamera, SelectCamera, Camera } from './styles';

function Cameras() {

  const { detection } = useVisibility();
  const { deviceInfo, setDeviceInfo, setDeviceOneSelected, setDeviceTwoSelected, deviceOneId, deviceTwoId } = useCamera();

  useEffect(() => {
    camerasName();
  });

  const uList = deviceInfo?.map((cameraName, index) => {
    return(
      <option key={index}>
        {cameraName.label}
      </option>
    );
  });

  const camerasName = () => {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      setDeviceInfo(
      devices.filter(({
        kind }) => kind === 'videoinput'
      ));
    });
  }

  return(
    <Container>
      <FormCamera>
        <SelectCamera disabled={detection} onChange={e => setDeviceOneSelected(e.target.value)}>
          <option>Selecione uma câmera...</option>
          {uList}
        </SelectCamera>
        <Camera>
          {
            detection
              ?
            <Webcam videoConstraints={{ deviceId: deviceOneId }} />
              :
            null
          }
        </Camera>
      </FormCamera>
      <FormCamera>
        <SelectCamera disabled={detection} onChange={e => setDeviceTwoSelected(e.target.value)}>
          <option>Selecione uma câmera...</option>
          {uList}
        </SelectCamera>
        <Camera>
          {
            detection
              ?
            <Webcam videoConstraints={{ deviceId: deviceTwoId }} />
              :
            null
          }
        </Camera>
      </FormCamera>
    </Container>
  );
}

export default Cameras;
