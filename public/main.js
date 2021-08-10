const { app, BrowserWindow } = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 1000,
    minHeight: 600,
    width: 1680,
    height: 980,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
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

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit();
});

app.on('activate', () => {
  if(BrowserWindow.getAllWindows().length === 0)
    createWindow();
});

app.allowRendererProcessReuse = false;
