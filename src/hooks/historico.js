import React, { useState, createContext, useContext } from 'react';

import { getHistorico } from '../services/historico';

const HistoricoContext = createContext();

export function Historico({ children }) {

  const [ name, setName ] = useState([]);
  const [ date, setDate ] = useState([]);
  const [ number, setNumber ] = useState([]);
  const [ type, setType ] = useState([]);

  async function historico() {

    const nomes = [];
    const datas = [];
    const numeros = [];
    const tipos = [];

    const response = await getHistorico();

    response.data.name.forEach(name => {
      nomes.push(name);
    });
    response.data.date.forEach(data => {
        datas.push(data);
    });
    response.data.number.forEach(number => {
      numeros.push(number);
    });
    response.data.type.forEach(tipo => {
      tipos.push(tipo);
    });

    setName(nomes);
    setDate(datas);
    setNumber(numeros);
    setType(tipos);
  }

  return(
    <HistoricoContext.Provider value={{ name, date, number, type, historico }}>
      { children }
    </HistoricoContext.Provider>
  );
}

export function useHistorico() {
  return useContext(HistoricoContext);
}
