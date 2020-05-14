const { ipcRenderer, remote, contextBridge } = require('electron');

contextBridge.exposeInMainWorld(
    'electron',
    { ipcRenderer, remote }
);
