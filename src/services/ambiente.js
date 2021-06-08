import api from './api';

export function getAmbientes() {

  const response = api.get('/reservas/getLocal');

  return response;
}

export function addLocal(name) {
  const response = api.post('/reservas/addLocal', {
    name: name
  });

  return response;
}

export function apagarAmbiente(name) {

  const response = api.delete('/reservas/deleteLocal', {
    data: {
      name: name
    }
  });

  return response;
}
