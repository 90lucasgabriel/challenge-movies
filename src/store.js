import {applyMiddleware, createStore, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

import rootReducer from './reducers';

const middleware = applyMiddleware(promiseMiddleware, thunk, logger);
const tilteStore = createStore(rootReducer, middleware);

export default tilteStore;
