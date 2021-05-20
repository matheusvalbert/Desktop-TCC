import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

import { Background, Container, Icon } from './styles';

import { register } from '../../services/register';

import { useVisibility } from '../../hooks/modal';
import { useAdmin } from '../../hooks/admin';

import Login from '../login';
import Alterar from '../alterar';

function GerenciarMoradores() {

  const { setGMIsVisible } = useVisibility();
  const { logged } = useAdmin();

  async function newUser() {
    try {
      const response = await register(); //username password

      if(!response.data.insertedUser)
        alert('erro desconhecido');
    }
    catch(err) {
      alert('Erro na insercao do usuario');
    }
  }

  const closeModal = (e) => {
    if(e.target.id === 'modal')
      setGMIsVisible(false);
  }

  return(
    <Background id='modal' onClick={closeModal}>
      <Container>
      <Icon onClick={ () => { setGMIsVisible(false) } }><AiOutlineClose /></Icon>
      {logged
        ?
        <Alterar />
        :
        <Login />
      }
      </Container>
    </Background>
  );
}

export default GerenciarMoradores;
