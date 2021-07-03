import React, { useState, useRef, createContext, useContext } from 'react';

import { sendFace, sendPlate } from '../services/recognition';

import imgProfile from '../img/profile.png';

const { spawn } = window.require('child_process');

const DetectContext = createContext();

export function Detect({ children }) {

  const [ faceImg, setFaceImg ] = useState(imgProfile);
  const [ type, setType ] = useState('');
  const [ name, setName ] = useState('');
  const [ number, setNumber ] = useState('');
  const [ allowed, setAllowed ] = useState('');

  const camOneRef = useRef(null);
  const camTwoRef = useRef(null);
  var array = '';

  const detect = spawn('python3', ['-u', 'detection/detect.py']);

  detect.stdout.on('data', (data) => {
    array += `${data}`;
    if(array[array.length - 2] === '}') {
      detectImages();
      array = '';
    }
  });

  detect.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  detect.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  async function detectImages() {
    const images = JSON.parse(array);
    if(images.face !== false) {
      const responseFace = await sendFace({ face: images.face });
      setFaceImg(responseFace.data.imageName);
      setType(responseFace.data.type);
      setName(responseFace.data.name);
      setNumber(responseFace.data.number);
      setAllowed(responseFace.data.allowed);
    }
    if(images.plate !== false) {
      const responsePlate = await sendPlate({ plate: images.plate });
      console.log(responsePlate.data);
    }
  }

  function capture() {
    const plate = camOneRef.current.getScreenshot({ width: 1920, height: 1080 });
    const face = camTwoRef.current.getScreenshot({ width: 1920, height: 1080 });

    detect.stdin.write(`{"plate": "${plate}", "face": "${face}"}\n`);
    detect.stdin.pause();
  }

  return(
    <DetectContext.Provider value={{ camOneRef, camTwoRef, capture, faceImg, type, name, number, allowed }}>
      { children }
    </DetectContext.Provider>
  );
}

export function useDetect() {
  return useContext(DetectContext);
}
