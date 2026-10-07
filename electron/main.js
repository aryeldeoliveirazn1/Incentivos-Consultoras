const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 520, height: 860, minWidth: 380, minHeight: 600,
    title: 'Incentivos da Loja', autoHideMenuBar: true
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
