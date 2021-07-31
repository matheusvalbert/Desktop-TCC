import React, { useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import { Background, Container, Icon, Form, FormUpdate, Title, Text, Input, Submit, TextSubmit } from './styles';

import { useVisibility } from '../../hooks/modal';

import { newVisitor } from '../../services/notificacao';

function Visitante() {

  const [ number, setNumber ] = useState('');
  const [ visitor, setVisitor ] = useState('');

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
          <Text>Número da casa:</Text>
          <Input type='input' value={number} onChange={e => setNumber(e.target.value)} />
          <Text>Nome do visitante:</Text>
          <Input type='input' value={visitor} onChange={e => setVisitor(e.target.value)} />
          <Submit type='button' onClick={ () => { newVisitor(number, visitor); setNewVisitor(false) } }><TextSubmit>Notificar morador</TextSubmit></Submit>
        </Form>
      </Container>
    </Background>
  );
}

export default Visitante;
