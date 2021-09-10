import React from 'react';
import { AiFillCaretLeft } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';

import { Container, Back, Form, FormUpdate, Title, IconPadding, ScrollList, Item, TextItem } from './styles';

import { useMorador } from '../../hooks/morador';
import { useHistorico } from '../../hooks/historico';

function Historico() {

  const { setPage } = useMorador();
  const { name, date, number, type, historico } = useHistorico();

  // eslint-disable-next-line array-callback-return
  const uList = name?.map((item, index) => {
    for(var i = 0; i < date.length; i++) {
      for(var j = 0; j < number.length; j++) {
        for(var k = 0; k < type.length; k++) {
          if(i === index && j === index && k === index)
            return <Item key={i}>
              <TextItem>Nome: {item}</TextItem>
              <TextItem>Data: {date[i]}</TextItem>
              <TextItem>Numero: {number[j]}</TextItem>
              <TextItem>Tipo: {type[k]}</TextItem>
            </Item>
        }
      }
    }
  });

  return (
    <>
      <Back onClick={ () => { setPage('') } }><AiFillCaretLeft /></Back>
      <Container>
        <Form>
          <FormUpdate onClick={ () => historico() }>
            <Title>Histórico:</Title>
            <IconPadding><GrUpdate /></IconPadding>
          </FormUpdate>
          <ScrollList>
            {uList}
          </ScrollList>
        </Form>
      </Container>
    </>
  );
}

export default Historico;
