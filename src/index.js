import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import Graphics from './Graphics';
import registerServiceWorker from './registerServiceWorker';

if (document.getElementById('dashboard')) {
  ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}
if (document.getElementById('graphics')) {
  ReactDOM.render(<Graphics />, document.getElementById('graphics'));
}

registerServiceWorker();
