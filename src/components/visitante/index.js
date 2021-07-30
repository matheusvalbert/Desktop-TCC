import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import { Background, Container, Icon, Form, FormUpdate, Title } from './styles';

import { useVisibility } from '../../hooks/modal';

function Visitante() {
  const { setNewVisitor } = useVisibility();

  const closeModal = (e) => {
    if(e.target.id === 'modal')
      setNewVisitor(false);
  }

  return(
    <Background id='modal' onClick={closeModal}>
      <Container>
        <Icon onClick={ () => { setNewVisitor(false) } }><AiOutlineClose /></Icon>
        <Form>
          <FormUpdate>
            <Title>Chegada visitante não cadastrado:</Title>
          </FormUpdate>
        </Form>
      </Container>
    </Background>
  );
}

export default Visitante;
