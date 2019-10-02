import {applyMiddleware, createStore, compose} from 'redux';
import promise from 'redux-promise-middleware';
// import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

import rootReducer from './reducers';

const middleware = applyMiddleware(promise, logger);
const tilteStore = createStore(rootReducer, middleware);

export default tilteStore;
