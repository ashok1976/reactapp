import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import Reducers from './reducer/Reducers'
import thunk from 'redux-thunk';
const middleware = [thunk]
const store = createStore(Reducers, composeWithDevTools(applyMiddleware(...middleware)));
export default store;




///https://meet.google.com/viy-waxk-jou


