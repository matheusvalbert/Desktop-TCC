import React from 'react';

import { useVisibility } from '../../hooks/modal';

import { Container, FormCamera, SelectCamera, Camera } from './styles';

function Cameras() {

  const { detection } = useVisibility();

  return(
    <Container>
      <FormCamera>
        <SelectCamera disabled={detection}>
          <option>Camera 1</option>
          <option>Camera 2</option>
          <option>Camera 3</option>
        </SelectCamera>
        <Camera />
      </FormCamera>
      <FormCamera>
        <SelectCamera disabled={detection}>
          <option>Camera 1</option>
          <option>Camera 2</option>
          <option>Camera 3</option>
        </SelectCamera>
        <Camera />
      </FormCamera>
    </Container>
  );
}

export default Cameras;
