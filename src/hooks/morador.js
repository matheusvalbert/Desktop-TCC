import React, { useState, createContext, useContext } from 'react';
import { login, getUsers } from '../services/register';

const MoradorContext = createContext();

export function Morador({ children }) {

  const [ logged, setLogged ] = useState(false);
  const [ users, setUsers ] = useState({});
  const [ page, setPage ] = useState('');

  async function usersList() {

    const response = await getUsers();
    setUsers(response.data.users);
  }

  async function loginAdmin(username, password) {
    try {
      const response = await login(username, password);
      if(response.data.uid === 1) {
        usersList();
        setLogged(true);
      }
      else {
        alert('usuario nao autorizado');
      }
    }
    catch(err) {
      alert('erro');
    }
  }

  return(
    <MoradorContext.Provider value={{ logged, users, loginAdmin, usersList, page, setPage }}>
      { children }
    </MoradorContext.Provider>
  );
}

export function useMorador() {
  return useContext(MoradorContext);
}
