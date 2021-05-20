import React from 'react';

import { Container, FormCamera, SelectCamera, Camera } from './styles';

function Cameras() {
  return(
    <Container>
      <FormCamera>
        <SelectCamera>
          <option>Camera 1</option>
          <option>Camera 2</option>
          <option>Camera 3</option>
        </SelectCamera>
        <Camera />
      </FormCamera>
      <FormCamera>
        <SelectCamera>
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
