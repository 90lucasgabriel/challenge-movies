import {applyMiddleware, createStore, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = applyMiddleware(promiseMiddleware, thunk);
const tilteStore = createStore(rootReducer, middleware);

export default tilteStore;
