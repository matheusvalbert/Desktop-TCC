const { app, BrowserWindow } = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');

require('@electron/remote/main').initialize();
require('./ipc');

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    minWidth: 420,
    minHeight: 245,
    width: 1680,
    height: 980,
    maxWidth: 6720,
    maxHeight: 3920,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation:false,
      preload: __dirname + '/preload.js'
    }
  });

  //win.webContents.openDevTools();

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
})

app.allowRendererProcessReuse = false;
