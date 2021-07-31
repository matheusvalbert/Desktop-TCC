import React, { useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import { Background, Container, Icon, Form, FormUpdate, Title, Text, Input, Submit, TextSubmit } from './styles';

import { useVisibility } from '../../hooks/modal';

import { newNotification } from '../../services/notificacao';

function Notificacao() {

  const [ number, setNumber ] = useState('');
  const [ message, setMessage ] = useState('');

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
          <Text>Número da casa:</Text>
          <Input type='input' value={number} onChange={e => setNumber(e.target.value)} />
          <Text>Mensagem:</Text>
          <Input type='input' value={message} onChange={e => setMessage(e.target.value)} />
          <Submit type='button' onClick={ () => { newNotification(number, message); setNotification(false); } }><TextSubmit>Notificar morador</TextSubmit></Submit>
        </Form>
      </Container>
    </Background>
  );
}

export default Notificacao;
