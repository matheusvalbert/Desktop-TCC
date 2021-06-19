const fs = require('fs');
const path =  require('path').join(__dirname, '/img/');

const { ipcMain } = require('electron');

ipcMain.on('imgOne', (event, img) => {
  var base64Data = img.replace(/^data:image\/jpeg;base64,/, "");
  fs.writeFile(path + 'imgOne.jpeg', base64Data, 'base64', (err) => {
    if(err) console.log(err);
  });
});

ipcMain.on('imgTwo', (event, img) => {
  var base64Data = img.replace(/^data:image\/jpeg;base64,/, "");
  fs.writeFile(path + 'imgTwo.jpeg', base64Data, 'base64', (err) => {
    if(err) console.log(err);
  });
});
