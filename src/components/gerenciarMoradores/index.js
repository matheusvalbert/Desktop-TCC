import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

import { Background, Container, Icon, Title, Form, FormButton, Submit, Text } from './styles';

import { useVisibility } from '../../hooks/modal';
import { useMorador } from '../../hooks/morador';
import { useAmbiente } from '../../hooks/ambiente';

import Login from '../login';
import AlterarMorador from '../alterarMorador';
import AdicionarMorador from '../adicionarMorador';
import Ambientes from '../ambientes';

function GerenciarMoradores() {

  const { setGMIsVisible } = useVisibility();
  const { logged, page, setPage } = useMorador();
  const { ambientesList } = useAmbiente();

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
              <Submit onClick={ () => { setPage('adicionarMorador') } }>
                <Text>Adicionar novo usuário</Text>
              </Submit>
              <Submit onClick={ () => { setPage('alterarMorador') } }>
                <Text>Alterar dados do usuário</Text>
              </Submit>
            </FormButton>
            <FormButton>
              <Submit onClick={ () => { setPage('Ambiente'); ambientesList() } }>
                <Text>Gerenciar Ambientes</Text>
              </Submit>
            </FormButton>
          </Form>
          :
          page === 'adicionarMorador'
          ?
            <AdicionarMorador />
          :
          page === 'alterarMorador'
          ?
            <AlterarMorador />
          :
          page === 'Ambiente'
          ?
            <Ambientes />
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
