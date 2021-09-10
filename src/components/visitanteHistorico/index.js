import React, { useState, useEffect } from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';

import { useVisibility } from '../../hooks/modal';

import { authorizedVisitors } from '../../services/notificacao';

import { Background, Container, Icon, Item, TextItem, Form, ScrollList, FormUpdate, Title, IconPadding } from './styles';

function VisitanteHistorico() {

  const { setVisitorHistory } = useVisibility();

  const [ visitors, setVisitors ] = useState([]);
  const [ datas, setDatas ] = useState([]);
  const [ numbers, setNumbers ] = useState([]);
  const [ authorizeds, setAuthorized ] = useState([]);

  async function visitantes() {

    const name = [];
    const date = [];
    const numbers = [];
    const authorized = [];

    const response = await authorizedVisitors();

    response.data.name.forEach(nome => {
      name.push(nome);
    });
    response.data.date.forEach(data => {
      date.push(data);
    });
    response.data.number.forEach(number => {
      numbers.push(number);
    });
    response.data.authorized.forEach(autorizado => {
      authorized.push(autorizado);
    });

    setVisitors(name);
    setDatas(date);
    setNumbers(numbers);
    setAuthorized(authorized);
  }

  useEffect(() => {
    visitantes();
  }, []);

  // eslint-disable-next-line array-callback-return
  const uList = visitors?.map((item, index) => {
    for(var i = 0; i < datas.length; i++) {
      for(var j = 0; j < numbers.length; j++) {
        for(var k = 0; k < authorizeds.length; k++) {
          if(i === index && j === index && k === index)
            return <Item key={i}>
              <TextItem>Nome: {item}</TextItem>
              <TextItem>Data: {datas[i]}</TextItem>
              <TextItem>Numero: {numbers[j]}</TextItem>
              <TextItem>Autorizado: {authorizeds[k]}</TextItem>
            </Item>
        }
      }
    }
  });

  const closeModal = (e) => {
    if(e.target.id === 'modal')
      setVisitorHistory(false);
  }

  return(
    <Background id='modal' onClick={closeModal}>
      <Container>
        <Icon onClick={ () => { setVisitorHistory(false) } }><AiOutlineClose /></Icon>
        <Form>
          <FormUpdate onClick={ () => visitantes() }>
            <Title>Histórico visitante não cadastrado:</Title>
            <IconPadding><GrUpdate /></IconPadding>
          </FormUpdate>
          <ScrollList>
            {uList}
          </ScrollList>
        </Form>
      </Container>
    </Background>
  );
}

export default VisitanteHistorico;
