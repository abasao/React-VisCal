import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import './assets/SCSS/main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const appNode = document.getElementById('app');
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  appNode
);
registerServiceWorker();
