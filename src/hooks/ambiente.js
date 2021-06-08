import React, { useState, createContext, useContext } from 'react';

import { getAmbientes } from '../services/ambiente';

const AmbienteContext = createContext();

export function Ambiente({ children }) {

  const [ ambientes, setAmbientes ] = useState({});

  async function ambientesList() {

    const response = await getAmbientes();
    setAmbientes(response.data.result);
  }

  return(
    <AmbienteContext.Provider value={{ ambientesList, ambientes }}>
      { children }
    </AmbienteContext.Provider>
  );
}

export function useAmbiente() {
  return useContext(AmbienteContext);
}
