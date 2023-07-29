import React from 'react';
import "Styles/global.css";
import ReactDOM from 'react-dom/client';
import App from './App';

import {Provider} from 'react-redux'
import store from 'globalStateManagement/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
