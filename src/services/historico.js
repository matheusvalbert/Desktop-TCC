import api from './api';

export function getHistorico() {

  const response = api.get('/historico/getHistorico');

  return response;
}
