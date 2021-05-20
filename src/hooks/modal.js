import React, { useState, createContext, useContext } from 'react';

const Visibility = createContext();

export function GerenciarMoradoresHook({ children }) {

  const [ lastDetectionsIsVisible, setLastDetectionsIsVisible ] = useState(false);
  const [ historyIsVisible, setHistoryIsVisible ] = useState(false);
  const [ gMIsVisible, setGMIsVisible ] = useState(false);

  return(
    <Visibility.Provider value={{ lastDetectionsIsVisible, setLastDetectionsIsVisible, historyIsVisible, setHistoryIsVisible, gMIsVisible, setGMIsVisible  }}>
      { children }
    </Visibility.Provider>
  );
}

export function useVisibility() {
  return useContext(Visibility);
}
