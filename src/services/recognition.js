import api from './api';

export function sendImages(json) {

  const response = api.post('/recognition/getImages', json);

  return response;
}
