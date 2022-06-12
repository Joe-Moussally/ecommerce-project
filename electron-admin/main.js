const { create } = require("domain");
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const Menu = electron.Menu;

let win;

function createWindow() {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, '/html/index.html'),
        protocol: 'file',
        slashes: true
    }));

    //for debugging----------
    win.webContents.openDevTools();
    //-----------------------

    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win == null) {
        createWindow();
    }
});