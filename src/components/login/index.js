import React, { useState } from 'react';

import { useMorador } from '../../hooks/morador';

import { Container, Title, Form, InputText, Input, Submit, Text } from './styles';

function Login() {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const { loginAdmin } = useMorador();

  return(
    <Container>
    <Title>Login administrador</Title>
    <Form>
        <InputText>Nome de usuário:</InputText>
        <Input type='text' value={username} onChange={e => setUsername(e.target.value)} />
      </Form>
      <Form>
      <InputText>Senha:</InputText>
      <Input type='password' value={password} onChange={e => setPassword(e.target.value)} selectionColor={'#03BB85'} />
      </Form>
      <Submit onClick={ () => { loginAdmin(username, password) } }><Text>Login</Text></Submit>
    </Container>
  );
}

export default Login;
