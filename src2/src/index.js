import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Reducers} from './Reducers'
import {createStore,applyMiddleware,compose} from 'redux'
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk'
const middleware = applyMiddleware(thunk)
const store = createStore(Reducers,middleware);

	ReactDOM.render(
	<Provider  store={store}>
    <App />
	</Provider >
       ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA