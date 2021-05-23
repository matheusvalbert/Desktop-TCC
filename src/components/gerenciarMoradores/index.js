import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

import { Background, Container, Icon, Title, Form, FormButton, Submit, Text } from './styles';

import { useVisibility } from '../../hooks/modal';
import { useAdmin } from '../../hooks/admin';

import Login from '../login';
import Alterar from '../alterar';
import Adicionar from '../adicionar';

function GerenciarMoradores() {

  const { setGMIsVisible } = useVisibility();
  const { logged, page, setPage } = useAdmin();

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
          page === ''
          ?
          <Form>
            <Title>O que deseja fazer:</Title>
            <FormButton>
              <Submit onClick={ () => { setPage('adicionar') } }>
                <Text>Adicionar novo usuário</Text>
              </Submit>
              <Submit onClick={ () => { setPage('alterar') } }>
                <Text>Alterar dados do usuário</Text>
              </Submit>
            </FormButton>
          </Form>
          :
          page === 'adicionar'
          ?
            <Adicionar />
          :
          page === 'alterar'
          ?
            <Alterar />
          :
            null
        :
        <Login />
      }
      </Container>
    </Background>
  );
}

export default GerenciarMoradores;
