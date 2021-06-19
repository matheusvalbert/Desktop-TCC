import React, { useEffect, useRef, useCallback } from 'react';

import { useVisibility } from '../../hooks/modal';
import { useCamera } from '../../hooks/camera';

import { Container, FormCamera, SelectCamera, Camera, Cam } from './styles';

const { ipcRenderer } = window.require('electron');

function Cameras() {

  const camOneRef = useRef(null);
  const camTwoRef = useRef(null);

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

  const capture = useCallback(() => {
    const imgOne = camOneRef.current.getScreenshot({ width: 1920, height: 1080 });
    const imgTwo = camTwoRef.current.getScreenshot({ width: 1920, height: 1080 });

    ipcRenderer.send('imgOne', imgOne);
    ipcRenderer.send('imgTwo', imgTwo);

  }, [camOneRef, camTwoRef]);

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
