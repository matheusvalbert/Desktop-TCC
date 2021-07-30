import React, { useState, createContext, useContext } from 'react';

const Visibility = createContext();

export function GerenciarMoradoresHook({ children }) {

  const [ detection, setDetection ] = useState(false);
  const [ notification, setNotification ] = useState(false);
  const [ newVisitor, setNewVisitor ] = useState(false);
  const [ visitorHistory, setVisitorHistory ] = useState(false);
  const [ visitorColor, setVisitorColor ] = useState(false);
  const [ reservasIsVisible, setReservasIsVisible ] = useState(false);
  const [ gMIsVisible, setGMIsVisible ] = useState(false);

  return(
    <Visibility.Provider value={{
      detection, setDetection,
      notification, setNotification,
      newVisitor, setNewVisitor,
      visitorHistory, setVisitorHistory,
      visitorColor, setVisitorColor,
      reservasIsVisible, setReservasIsVisible,
      gMIsVisible, setGMIsVisible
    }}>
      { children }
    </Visibility.Provider>
  );
}

export function useVisibility() {
  return useContext(Visibility);
}
