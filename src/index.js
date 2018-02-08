import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';

import reducers from './reducers'

const loggerMiddleware = createLogger()

let initialState = {}

if (localStorage.getItem("postStateById")) {
  initialState = {
    postStateById: JSON.parse(localStorage.getItem("postStateById"))
  }
}

let store = createStore(reducers,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )

let persistState = () => {
  let postStateById = store.getState().postStateById;
  localStorage.setItem("postStateById", JSON.stringify(postStateById))
}

let unsubscribe = store.subscribe(persistState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'));
