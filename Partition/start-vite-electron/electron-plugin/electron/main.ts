process.env.DIST = join(__dirname, '../dist')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST, '../public')

import { join } from 'path'
import path from 'path'
import { app, BrowserWindow, Menu, MenuItem } from 'electron'

// let win: BrowserWindow | null
// Here, you can also use other preload
const preload = join(__dirname, './preload.js')
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const url = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    minWidth: 1200,
    minHeight: 550,
    autoHideMenuBar: true,
    icon: path.join(process.env.PUBLIC!, 'assets/logo.png'),
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      preload,
    },
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  if (url) {
    win.loadURL(url)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(join(process.env.DIST!, 'index.html'))
  }
  const menu = new Menu()

menu.append(
  new MenuItem({
    label: 'devTool',
    accelerator: 'F12',
    click: () => {
      win.webContents.openDevTools()
    },
  }),
)
menu.append(
  new MenuItem({
    label: 'kioskMode',
    accelerator: 'F11',
    click: () => {
      win.setKiosk(!win.isKiosk())
    },
  }),
)
menu.append(
  new MenuItem({
    label: 'refresh',
    accelerator: 'F5',
    click: () => {
      win.reload()
    },
  }),
)
win.setMenu(menu)
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})



app.whenReady().then(createWindow)


