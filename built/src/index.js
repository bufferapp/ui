import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/highlight.js/styles/ocean.css';
import { HashRouter as Router } from 'react-router-dom';
import App from './documentation/App';
ReactDOM.render(React.createElement(Router, { basename: process.env.PUBLIC_URL },
    React.createElement(App, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map