import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { GerenciarMoradoresHook } from './hooks/modal';

ReactDOM.render(
  <GerenciarMoradoresHook><App /></GerenciarMoradoresHook>,
  document.getElementById('root')
);

reportWebVitals();
