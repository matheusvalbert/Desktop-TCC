import api from './api';

export function authorizedVisitors() {

  const response = api.get('/notificacao/authorizedVisitors');

  return response;
}

export function numberNotifications() {

  const response = api.get('/notificacao/newResponse');

  return response;
}
