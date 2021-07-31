import api from './api';

export function authorizedVisitors() {

  const response = api.get('/notificacao/authorizedVisitors');

  return response;
}

export function numberNotifications() {

  const response = api.get('/notificacao/newResponse');

  return response;
}

export function newVisitor(number, visitor) {

  const response = api.post('/notificacao/newVisitor', {
    number: number,
    type: 'visitor',
    visitor: visitor
  });

  return response;
}

export function newNotification(number, notification) {

  const response = api.post('/notificacao/newNotification', {
    number: number,
    type: 'notification',
    notification: notification
  });

  return response;
}
