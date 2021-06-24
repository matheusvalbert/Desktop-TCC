const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');

const path = require('path');
const isDev = require('electron-is-dev');

const detect = spawn('python3', ['detection/detect.py']);

process.on('exit', function() {
  detect.kill();
});

require('@electron/remote/main').initialize();

function createWindow() {
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

  win.webContents.openDevTools();

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
})

app.allowRendererProcessReuse = false;
