const { app: electronApp, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1024, height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
}

electronApp.whenReady().then(createWindow);

electronApp.on('window-all-closed', () => {
  if (process.platform !== 'darwin') electronApp.quit();
});

electronApp.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
