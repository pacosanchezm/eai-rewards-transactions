
import React from 'react';
import ReactDOM from 'react-dom';

import App from './appi'

window.attachApp = (usr, page, id, opt, token) => {
    ReactDOM.render(<App usr={usr} page={page} id={id} opt={opt} token={token}/>, document.getElementById('content'))
};