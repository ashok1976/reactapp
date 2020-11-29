import {createStore,applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import Reducers from './reducer/Reducers'
import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/saga';
const sagaMiddleware  = createSagaMiddleware();


const middleware = [thunk,sagaMiddleware];
const store = createStore(Reducers, composeWithDevTools(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

export default store;




///https://meet.google.com/viy-waxk-jou


