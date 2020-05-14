import React from 'react';

import '../index.css';

const { ipcRenderer } = (window as any)["electron"];

export class App extends React.Component<{}, {}> {
    showMessage() {
        ipcRenderer.sendSync('message-box', {
            title: "Electron App",
            type: "info",
            message: "Hello, world!"
        });
    }

    render() {
        return (
            <div className="d-block">
                <h1>Electron Forge with React and TypeScript template</h1>
                <button onClick={() => this.showMessage()}>Hello, world!</button>
            </div>
        )
    }
}
