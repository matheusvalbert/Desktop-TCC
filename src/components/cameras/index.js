import React, { useEffect } from 'react';

import { useCamera } from '../../hooks/camera';
import { useDetect } from '../../hooks/detect';

import { Container, FormCamera, SelectCamera, Camera, Cam } from './styles';

function Cameras() {

  const { deviceInfo, setDeviceInfo, setDeviceOneSelected, setDeviceTwoSelected, deviceOneId, deviceTwoId } = useCamera();
  const { detectionBtn, camOneRef, camTwoRef } = useDetect();

  useEffect(() => {
    camerasName();
  });

  const uList = deviceInfo?.map((cameraName, index) => {
    return(
      <option key={index}>
        {cameraName.label} {cameraName.deviceId}
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
        <SelectCamera disabled={detectionBtn} onChange={e => setDeviceOneSelected(e.target.value.split(' ')[e.target.value.split(' ').length - 1])}>
          <option>Selecione uma câmera...</option>
          {uList}
        </SelectCamera>
        <Camera>
          {
            detectionBtn
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
        <SelectCamera disabled={detectionBtn} onChange={e => setDeviceTwoSelected(e.target.value.split(' ')[e.target.value.split(' ').length - 1])}>
          <option>Selecione uma câmera...</option>
          {uList}
        </SelectCamera>
        <Camera>
          {
            detectionBtn
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
