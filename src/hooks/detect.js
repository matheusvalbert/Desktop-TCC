import React, { useState, useRef, createContext, useContext } from 'react';

import { sendFace, sendPlate } from '../services/recognition';

import imgProfile from '../img/profile.png';

const { spawn } = window.require('child_process');
//const { exec } = window.require('child_process');

const DetectContext = createContext();

export function Detect({ children }) {

  const [ faceImg, setFaceImg ] = useState(imgProfile);
  const [ detectionBtn, setDetectionBtn ] = useState(false);
  const [ faceType, setFaceType ] = useState('');
  const [ faceName, setFaceName ] = useState('');
  const [ faceNumber, setFaceNumber ] = useState('');
  const [ faceAllowed, setFaceAllowed ] = useState('');
  const [ plateImg, setPlateImg ] = useState(imgProfile);
  const [ plateType, setPlateType ] = useState('');
  const [ plateName, setPlateName ] = useState('');
  const [ plateNumber, setPlateNumber ] = useState('');
  const [ plate, setPlate ] = useState('');
  const [ plateAllowed, setPlateAllowed ] = useState('');

  const camOneRef = useRef(null);
  const camTwoRef = useRef(null);
  var array = '';

  const detect = spawn('python3', ['-u', 'detection/detect.py']);
  //const detect = exec('detection\\detect.exe')

  detect.stdout.on('data', (data) => {
    array += `${data}`;
    if(array[array.length - 3] === '}') {
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
      setFaceType(responseFace.data.type);
      setFaceName(responseFace.data.name);
      setFaceNumber(responseFace.data.number);
      setFaceAllowed(responseFace.data.allowed);
    }
    if(images.plate !== false) {
      const responsePlate = await sendPlate({ plate: images.plate });
      setPlateImg(responsePlate.data.imageName);
      setPlateType(responsePlate.data.type);
      setPlateName(responsePlate.data.name);
      setPlateNumber(responsePlate.data.number);
      setPlate(responsePlate.data.plate);
      setPlateAllowed(responsePlate.data.allowed);
    }
  }

  function capture() {
    try {
      const plate = camOneRef.current.getScreenshot();
      const face = camTwoRef.current.getScreenshot();

      if(plate !== null && face !== null) {
        detect.stdin.write(`{"plate": "${plate}", "face": "${face}"}\n`);
        detect.stdin.pause();
      }
    }
    catch (err) {

    }
  }

  return(
    <DetectContext.Provider value={{ detectionBtn, setDetectionBtn, camOneRef, camTwoRef, capture, faceImg, faceType, faceName, faceNumber, faceAllowed, plateImg, plateType, plateName, plateNumber, plate, plateAllowed }}>
      { children }
    </DetectContext.Provider>
  );
}

export function useDetect() {
  return useContext(DetectContext);
}
