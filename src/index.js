import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { GerenciarMoradoresHook } from './hooks/modal';
import { Camera } from './hooks/camera';

ReactDOM.render(
  <GerenciarMoradoresHook><Camera><App /></Camera></GerenciarMoradoresHook>,
  document.getElementById('root')
);

reportWebVitals();
