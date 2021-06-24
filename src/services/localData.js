import local from './local';

export function sendImage(imgOne, imgTwo) {

  const response = local.post('/images', {
    imgOne: imgOne,
    imgTwo: imgTwo
  });

  return response;
}
