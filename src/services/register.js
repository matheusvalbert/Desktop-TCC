import api from './api';

export function masterReset(username, newPassword) {

  const response = api.patch('/auth/masterReset', {
    username: username,
    newPassword: newPassword
  });

  return response;
}

export function getUsers() {

  const response = api.get('/auth/getUsers');

  return response;
}

export function login(username, password) {

  const response = api.post('/auth/login', {
    username: username,
    password: password
  });

  return response;
}

export function register(username, password) {
  const response = api.post('/auth/register', {
    username: username,
    password: password
  });

  return response;
}
