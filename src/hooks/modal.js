import React, { useState, createContext, useContext } from 'react';

const Visibility = createContext();

export function GerenciarMoradoresHook({ children }) {

  const [ detection, setDetection ] = useState(false);
  const [ reservasIsVisible, setReservasIsVisible ] = useState(false);
  const [ gMIsVisible, setGMIsVisible ] = useState(false);

  return(
    <Visibility.Provider value={{ detection, setDetection, reservasIsVisible, setReservasIsVisible, gMIsVisible, setGMIsVisible }}>
      { children }
    </Visibility.Provider>
  );
}

export function useVisibility() {
  return useContext(Visibility);
}
