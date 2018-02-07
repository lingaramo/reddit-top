import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';

import posts from './reducers'

const loggerMiddleware = createLogger()

let store = createStore(posts,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'));
