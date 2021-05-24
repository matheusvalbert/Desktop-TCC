import React, { useState } from 'react';
import { AiFillCaretRight, AiFillCaretLeft, AiOutlineClose } from "react-icons/ai";
import { GrUpdate } from 'react-icons/gr';

import { Container, Form, Title, ScrollList, FormSenha, FormNovaSenha, TextSenha, Input, Submit, SubmitYes, SubmitNo, Text, Item, TextItem, DivIcon, FormUpdate, IconPadding, Back, FormButtons } from './styles';

import { masterReset, deleteUser } from '../../services/register';

import { useAdmin } from '../../hooks/admin';

function Alterar() {

  const [ selected, setSelected ] = useState('');
  const [ newPassword, setNewPassword ] = useState('');
  const [ repeat, setRepeat ] = useState('');
  const [ deleteUserFlag, setDeleteUserFlag ] = useState(false);
  const [ deleteUserName, setDeleteUserName ] = useState('');

  const { users, usersList, setPage } = useAdmin();

  async function changePassword() {
    if(selected && newPassword === repeat && newPassword.length > 0) {
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

  async function removeUser() {
    try{
      const response = await deleteUser(deleteUserName);

      if(response.data.userDeleted)
        usersList();
      else
        alert('problema ao apagar usuário')
    }
    catch (err) {
      console.log(err);
    }
  }

  const uList = users.user?.map((user) => {
    return <Item key={user} onClick={ () => setSelected(user) } style={selected === user ?
      {backgroundColor: '#1520AB'} : null}>
      <TextItem style={ selected === user ? {color: '#FFF'} : null }>{user}</TextItem>
      <DivIcon>
        <div onClick={ () => { setDeleteUserFlag(true); setDeleteUserName(user) } }><AiOutlineClose color={'#FF0000'} size={'calc(1vh + 1vw)'}/></div>
        <AiFillCaretRight style={ selected === user ? {color: '#FFF'} : null } size={'calc(1vh + 1vw'}/>
      </DivIcon>
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
        {
          deleteUserFlag ?
            <Form>
              <Title>Deseja apagar o usuário:</Title>
              <TextSenha style={{color: '#FF0000'}}> { selected }</TextSenha>
              <FormButtons>
                <SubmitNo type='button' onClick={ () => { setDeleteUserFlag(false); setNewPassword(''); setRepeat('') } }><Text>Não</Text></SubmitNo>
                <SubmitYes type='button' onClick={ () => { removeUser(); setDeleteUserFlag(false); setNewPassword(''); setRepeat(''); setSelected('') } }><Text>Sim</Text></SubmitYes>
              </FormButtons>
            </Form>
          :
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
              <Submit type='button' onClick={ () => { changePassword(); setNewPassword(''); setRepeat('') } }><Text>Alterar senha</Text></Submit>
            </FormNovaSenha>
          </Form>
        }
        </Container>
    </>
  );
}

export default Alterar;
