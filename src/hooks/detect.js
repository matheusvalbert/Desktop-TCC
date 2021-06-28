import React, { useRef, createContext, useContext } from 'react';

import { sendImages } from '../services/recognition';

const { spawn } = window.require('child_process');

const DetectContext = createContext();

export function Detect({ children }) {

  const camOneRef = useRef(null);
  const camTwoRef = useRef(null);
  var array = '';

  const detect = spawn('python3', ['-u', 'detection/detect.py']);

  detect.stdout.on('data', (data) => {
    array += `${data}`;
    if(array[array.length - 2] === '}') {
      sendImages(array);
      array = '';
    }
  });

  detect.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  detect.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  function capture() {
    const plate = camOneRef.current.getScreenshot({ width: 1920, height: 1080 });
    const face = camTwoRef.current.getScreenshot({ width: 1920, height: 1080 });

    detect.stdin.write(`{"plate": "${plate}", "face": "${face}"}\n`);
    detect.stdin.pause();
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
