import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Components/App/App';
import {createStore, compose, applyMiddleware} from 'redux';
import allReducers from './Redux/Reducers/allReducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f; 
const store = createStore(
  allReducers,
  compose(applyMiddleware(thunk), composeEnhancer));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

