import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Detect } from './hooks/detect';
import { GerenciarMoradoresHook } from './hooks/modal';
import { Camera } from './hooks/camera';

ReactDOM.render(
    <GerenciarMoradoresHook><Detect><Camera><App /></Camera></Detect></GerenciarMoradoresHook>,
  document.getElementById('root')
);

reportWebVitals();
