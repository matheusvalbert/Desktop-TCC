import React, { useState, createContext, useContext } from 'react';

import api from '../services/api';
import { login, getUsers } from '../services/register';

const AdminContext = createContext();

export function Admin({ children }) {

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
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
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
    <AdminContext.Provider value={{ logged, users, loginAdmin, usersList, page, setPage }}>
      { children }
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}
