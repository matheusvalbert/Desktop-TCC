import React, { useState, useEffect } from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';

import { useVisibility } from '../../hooks/modal';

import { getReservas } from '../../services/ambiente';

import { Background, Container, Icon, Item, TextItem, Form, ScrollList, FormUpdate, Title, IconPadding } from './styles';

function Reservas() {

  const { setReservasIsVisible } = useVisibility();

  const [ reservasAmbiente, setReservasAmbiente ] = useState([]);
  const [ datas, setDatas ] = useState([]);
  const [ numbers, setNumbers ] = useState([]);

  async function reservas() {

    const ambiente = [];
    const datas = [];
    const numbers = [];

    const response = await getReservas();

    response.data.ambientes.forEach(nomeAmbiente => {
      ambiente.push(nomeAmbiente);
    });
    response.data.datas.forEach(data => {
        datas.push('Data: ' + data);
    });
    response.data.number.forEach(number => {
      numbers.push(number);
    });

    setReservasAmbiente(ambiente);
    setDatas(datas);
    setNumbers(numbers);
  }

  useEffect(() => {
    reservas();
  }, []);

  // eslint-disable-next-line array-callback-return
  const uList = reservasAmbiente?.map((item, index) => {
    for(var i = 0; i < datas.length; i++) {
      for(var j = 0; j < numbers.length; j++) {
        if(i === index && j === index)
          return <Item key={i}>
            <TextItem>{item}</TextItem>
            <TextItem>{datas[i]}</TextItem>
            <TextItem>{numbers[j]}</TextItem>
          </Item>
      }
    }
  });

  const closeModal = (e) => {
    if(e.target.id === 'modal')
      setReservasIsVisible(false);
  }

  return(
    <Background id='modal' onClick={closeModal}>
      <Container>
        <Icon onClick={ () => { setReservasIsVisible(false) } }><AiOutlineClose /></Icon>
        <Form>
          <FormUpdate onClick={ () => reservas() }>
            <Title>Reservas:</Title>
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

export default Reservas;
