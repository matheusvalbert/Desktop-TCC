import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import { Background, Container, Icon, Form, FormUpdate, Title } from './styles';

import { useVisibility } from '../../hooks/modal';

function Notificacao() {

  const { setNotification } = useVisibility();

  const closeModal = (e) => {
    if(e.target.id === 'modal')
      setNotification(false);
  }

  return(
    <Background id='modal' onClick={closeModal}>
      <Container>
        <Icon onClick={ () => { setNotification(false) } }><AiOutlineClose /></Icon>
        <Form>
          <FormUpdate>
            <Title>Nova notificação:</Title>
          </FormUpdate>
        </Form>
      </Container>
    </Background>
  );
}

export default Notificacao;
