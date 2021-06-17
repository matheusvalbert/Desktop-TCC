import React, { useState, createContext, useContext } from 'react';

const CameraContext = createContext();

export function Camera({ children }) {

  const [ deviceInfo, setDeviceInfo ] = useState([]);
  const [ deviceOneSelected, setDeviceOneSelected ] = useState('');
  const [ deviceTwoSelected, setDeviceTwoSelected ] = useState('');
  const [ deviceOneId, setDeviceOneId ] = useState('');
  const [ deviceTwoId, setDeviceTwoId ] = useState('');

  return(
    <CameraContext.Provider value={{ deviceInfo, setDeviceInfo, deviceOneSelected, setDeviceOneSelected, deviceTwoSelected, setDeviceTwoSelected, deviceOneId, setDeviceOneId, deviceTwoId, setDeviceTwoId }}>
      { children }
    </CameraContext.Provider>
  );
}

export function useCamera() {
  return useContext(CameraContext);
}
