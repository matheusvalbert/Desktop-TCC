import api from './api';

export function sendFace(json) {

  const response = api.post('/recognition/face', json);

  return response;
}

export function sendPlate(json) {

  const response = api.post('/recognition/plate', json);

  return response;
}
