'use strict'
//Electron Dependencies
const electron = require('electron')
const {BrowserWindow} = require('electron')
const app = electron.app
//Node Dependencies
const url = require('url')
const path = require('path')

//Window vars
let win

//Initial call on ready
function createWindow() {
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(url.format({
    pathname: path.join(__dirname, '/view/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () =>{
    win = null;
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
