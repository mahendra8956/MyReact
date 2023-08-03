import React from 'react';
import ReactDOM from 'react-dom/client'

const h1 = React.createElement("h1",{},"Hello World");

const h2 = React.createElement("h2",{},"React App");

const container = React.createElement("div",{
    id:"container"
},[h1,h2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);