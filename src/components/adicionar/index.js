import React, { useState } from 'react';
import { AiFillCaretLeft } from "react-icons/ai";
import { GrUpdate } from 'react-icons/gr';

import { Container, Form, Title, ScrollList, FormTitle, FormAdd, TextAdd, Input, Submit, Text, Item, TextItem, FormUpdate, IconPadding, Back } from './styles';

import { useAdmin } from '../../hooks/admin';

import { register } from '../../services/register';

function Adicionar() {

  const { setPage, usersList, users } = useAdmin();

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
      <Back onClick={ () => { setPage('') } }><AiFillCaretLeft size={35}/></Back>
      <Container>
        <Form>
          <FormUpdate onClick={ () => usersList() }>
            <Title>Usuários:</Title>
            <IconPadding><GrUpdate size={30}/></IconPadding>
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
            <Input type='input' value={username} onChange={e => setUsername(e.target.value)}></Input>
            <TextAdd>Digite a senha:</TextAdd>
            <Input type='password' value={password} onChange={e => setPassword(e.target.value)}></Input>
            <TextAdd>Número da casa:</TextAdd>
            <Input type='input' value={number} onChange={e => setNumber(e.target.value)}></Input>
            <Submit type='button' onClick={ () => { newUser() } }><Text>Adicionar</Text></Submit>
          </FormAdd>
        </Form>
      </Container>
    </>
  );
}

export default Adicionar;
