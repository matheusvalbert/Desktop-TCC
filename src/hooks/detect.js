import React, { useRef, createContext, useContext } from 'react';

import { sendImages } from '../services/recognition';

const { PythonShell } = window.require('python-shell');

const DetectContext = createContext();

export function Detect({ children }) {

  const camOneRef = useRef(null);
  const camTwoRef = useRef(null);

  const detect = new PythonShell('detection/detect.py', { mode: 'json', pythonOptions: ['-u'] });

  detect.on('message', (message) => {

    sendImages(message);
  });

  function capture() {
    const plate = camOneRef.current.getScreenshot({ width: 1920, height: 1080 });
    const face = camTwoRef.current.getScreenshot({ width: 1920, height: 1080 });

    detect.send({ plate: plate, face: face });
  }

  return(
    <DetectContext.Provider value={{ camOneRef, camTwoRef, capture }}>
      { children }
    </DetectContext.Provider>
  );
}

export function useDetect() {
  return useContext(DetectContext);
}
