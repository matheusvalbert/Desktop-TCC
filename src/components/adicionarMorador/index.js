import React, { useState } from 'react';
import { AiFillCaretLeft } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';

import { Container, Form, Title, ScrollList, FormTitle, FormAdd, TextAdd, Input, Submit, Text, Item, TextItem, FormUpdate, IconPadding, Back } from './styles';

import { useMorador } from '../../hooks/morador';

import { register } from '../../services/register';

function AdicionarMorador() {

  const { setPage, usersList, users } = useMorador();

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ number, setNumber ] = useState('');

  async function newUser() {

    if(username || password || number)
      try {
        const response = await register(username, password, number);

        if(!response.data.insertedUser)
          alert('erro desconhecido');
        else {
          usersList();
          setUsername('');
          setPassword('');
          setNumber('');
        }
      }
      catch(err) {
        alert('Erro na insercao do usuario');
      }
    else
      alert('Entrada Invalida');
  }

  const uList = users.user?.map((user) => {
    return <Item key={user}>
      <TextItem>{user}</TextItem>
    </Item>
  });

  return(
    <>
      <Back onClick={ () => { setPage('') } }><AiFillCaretLeft /></Back>
      <Container>
        <Form>
          <FormUpdate onClick={ () => usersList() }>
            <Title>Usuários:</Title>
            <IconPadding><GrUpdate /></IconPadding>
          </FormUpdate>
          <ScrollList>
            {uList}
          </ScrollList>
        </Form>
        <Form>
          <FormTitle>
            <Title>Adicionar usuário:</Title>
          </FormTitle>
          <FormAdd>
            <TextAdd>Digite o nome de usuário:</TextAdd>
            <Input type='input' value={username} onChange={e => setUsername(e.target.value)} />
            <TextAdd>Digite a senha:</TextAdd>
            <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            <TextAdd>Número da casa:</TextAdd>
            <Input type='input' value={number} onChange={e => setNumber(e.target.value)} />
            <Submit type='button' onClick={ () => { newUser() } }><Text>Adicionar</Text></Submit>
          </FormAdd>
        </Form>
      </Container>
    </>
  );
}

export default AdicionarMorador;
