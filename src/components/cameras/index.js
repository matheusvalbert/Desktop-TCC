import React, { useEffect } from 'react';

import { useVisibility } from '../../hooks/modal';
import { useCamera } from '../../hooks/camera';
import { useDetect } from '../../hooks/detect';

import { Container, FormCamera, SelectCamera, Camera, Cam } from './styles';

function Cameras() {

  const { detection } = useVisibility();
  const { deviceInfo, setDeviceInfo, setDeviceOneSelected, setDeviceTwoSelected, deviceOneId, deviceTwoId } = useCamera();
  const { camOneRef, camTwoRef, capture } = useDetect();

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
      <button type='button' onClick={capture} ><h1>aaaa</h1></button>
      <FormCamera>
        <SelectCamera disabled={detection} onChange={e => setDeviceOneSelected(e.target.value)}>
          <option>Selecione uma câmera...</option>
          {uList}
        </SelectCamera>
        <Camera>
          {
            detection
              ?
            <Cam
              ref={camOneRef}
              videoConstraints={{ deviceId: deviceOneId }}
            />
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
            <Cam
              ref={camTwoRef}
              videoConstraints={{ deviceId: deviceTwoId }}
            />
              :
            null
          }
        </Camera>
      </FormCamera>
    </Container>
  );
}

export default Cameras;
