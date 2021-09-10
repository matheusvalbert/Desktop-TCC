import React, { useState } from 'react';
import { AiFillCaretLeft, AiOutlineClose } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';

import { Container, Form, Title, ScrollList, FormTitle, FormAdd, TextAdd, Input, Submit, Text, Item, TextItem, FormUpdate, IconPadding, Back, DivIcon, TextSenha, FormButtons, SubmitNo, SubmitYes } from './styles';

import { useMorador } from '../../hooks/morador';
import { useAmbiente } from '../../hooks/ambiente';

import { addLocal, apagarAmbiente } from '../../services/ambiente';

function Ambientes() {

  const { setPage } = useMorador();
  const { ambientesList, ambientes } = useAmbiente();

  const [ ambienteName, setAmbienteName ] = useState('');
  const [ deleteAmbienteFlag, setDeleteAmbienteFlag ] = useState(false);
  const [ deleteAmbiente, setDeleteAmbiente ] = useState('');

  function ambientesListUpdate() {
    ambientesList();
  }

  async function adicionarAmbiente() {
    if(ambienteName)
      try {
        const response = await addLocal(ambienteName);

        if(!response.data.insertedAmbiente)
          alert('erro desconhecido');
        else {
          setAmbienteName('');
          ambientesList();
        }
      }
      catch(err) {
        alert('Erro na insercao do ambiente');
      }
    else
      alert('Entrada Invalida');
  }

  async function removerAmbiente() {
    try{
      const response = await apagarAmbiente(deleteAmbiente);

      if(response.data.deleteLocal)
        ambientesList();
      else
        alert('problema ao apagar ambiente')
    }
    catch (err) {
      console.log(err);
    }
  }

  const uList = ambientes.names?.map((name) => {

    return <Item key={name}>
      <TextItem>{name}</TextItem>
      <DivIcon>
        <div onClick={ () => { setDeleteAmbienteFlag(true); setDeleteAmbiente(name) } }><AiOutlineClose color={'#FF0000'} size={'calc(1vh + 1vw)'}/></div>
      </DivIcon>
    </Item>
  });

  return(
    <>
      <Back onClick={ () => { setPage('') } }><AiFillCaretLeft /></Back>
      <Container>
        <Form>
          <FormUpdate onClick={ () => { ambientesListUpdate() } }>
            <Title>Ambientes:</Title>
            <IconPadding><GrUpdate /></IconPadding>
          </FormUpdate>
          <ScrollList>
            { uList }
          </ScrollList>
        </Form>
        {
          deleteAmbienteFlag ?
          <Form>
            <Title>Deseja apagar o ambiente:</Title>
            <TextSenha style={{color: '#FF0000'}}> { deleteAmbiente }</TextSenha>
            <FormButtons>
              <SubmitNo type='button' onClick={ () => { setDeleteAmbienteFlag(false); setAmbienteName('') } }><Text>Não</Text></SubmitNo>
              <SubmitYes type='button' onClick={ () => { removerAmbiente(); setDeleteAmbienteFlag(false); setAmbienteName('') } }><Text>Sim</Text></SubmitYes>
            </FormButtons>
          </Form>
          :
          <Form>
            <FormTitle>
              <Title>Adicionar ambiente:</Title>
            </FormTitle>
            <FormAdd>
              <TextAdd>Digite o nome do ambiente:</TextAdd>
              <Input type='input' value={ambienteName} onChange={e => setAmbienteName(e.target.value)} />
              <Submit type='button' onClick={ () => { adicionarAmbiente() } }><Text>Adicionar</Text></Submit>
            </FormAdd>
          </Form>
        }
      </Container>
    </>
  );
}

export default Ambientes;
