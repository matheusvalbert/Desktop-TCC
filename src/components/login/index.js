import React, { useState } from 'react';

import { useAdmin } from '../../hooks/admin';

import { Container, Title, Form, InputText, Input, Submit, Text } from './styles';

function Login() {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const { loginAdmin } = useAdmin();

  return(
    <Container>
    <Title>Login administrador</Title>
    <Form>
        <InputText>Nome de usuário:</InputText>
        <Input type='text' value={username} onChange={e => setUsername(e.target.value)}></Input>
      </Form>
      <Form>
      <InputText>Senha:</InputText>
      <Input type='password' value={password} onChange={e => setPassword(e.target.value)}></Input>
      </Form>
      <Submit onClick={ () => { loginAdmin(username, password) } }><Text>Login</Text></Submit>
    </Container>
  );
}

export default Login;
