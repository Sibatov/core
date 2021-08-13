import React from 'react';
import ReactDOM from 'react-dom';

// components and utils
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
