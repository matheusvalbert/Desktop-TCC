import React, { useState } from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import { GrUpdate } from 'react-icons/gr';

import { Container, Form, Title, ScrollList, FormSenha, FormNovaSenha, TextSenha, Input, Submit, Text, Item, TextItem, DivIcon, FormUpdate, IconPadding } from './styles';

import { masterReset } from '../../services/register';

import { useVisibility } from '../../hooks/modal';
import { useAdmin } from '../../hooks/admin';

function Alterar() {

  const { setGMIsVisible } = useVisibility();

  const [ selected, setSelected ] = useState('');
  const [ newPassword, setNewPassword ] = useState('');
  const [ repeat, setRepeat ] = useState('');

  const { users } = useAdmin();

  async function alterarSenha() {
    if(selected && newPassword === repeat) {
      try {
        const response = await masterReset(selected, newPassword);

        if(response.data.passwordChanged)
          alert('senha alterada com sucesso');
        else
          alert('erro na troca de senha');
      }
      catch (err) {
        console.log(err);
      }
    }
  }

  const uList = users.user?.map((user) => {
    return <Item key={user} onClick={ () => setSelected(user) } style={selected === user ?
      {backgroundColor: '#1520AB'} : null}>
      <TextItem style={ selected === user ? {color: '#FFF'} : null }>{user}</TextItem>
      <DivIcon><AiFillCaretRight style={ selected === user ? {color: '#FFF'} : null }/></DivIcon>
    </Item>
  })

  return(
    <Container>
      <Form>
        <FormUpdate onClick={ () => setGMIsVisible(true) }>
          <Title>Usuários:</Title>
          <IconPadding><GrUpdate size={30}/></IconPadding>
        </FormUpdate>
        <ScrollList>
          {uList}
        </ScrollList>
      </Form>
      <Form>
      <FormSenha>
        <Title>Alterar senha:</Title>
      </FormSenha>
      <FormNovaSenha>
        <TextSenha>Usuario:</TextSenha> <TextSenha style={{color: '#FF0000'}}> { selected }</TextSenha>
        <TextSenha>Digite a nova senha:</TextSenha>
        <Input type='password' value={newPassword} onChange={e => setNewPassword(e.target.value)}></Input>
        <TextSenha>Digite novamente:</TextSenha>
        <Input type='password' value={repeat} onChange={e => setRepeat(e.target.value)}></Input>
        <Submit type='button' onClick={ () => { alterarSenha() } }><Text>Alterar senha</Text></Submit>
      </FormNovaSenha>
      </Form>
    </Container>
  );
}

export default Alterar;
