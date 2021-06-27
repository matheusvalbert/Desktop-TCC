import local from './local';
import api from './api';

export function sendImageLocal(plate, face) {

  const response = local.post('/images', {
    plate: plate,
    face: face
  });

  return response;
}

export function sendImageServer(plate, face) {

  const response = api.post('/recognition/getImages', {
    plate: plate,
    face: face
  });

  return response;
}
