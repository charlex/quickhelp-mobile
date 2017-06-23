/**
 * Store index
 */

import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';

const loggerMiddleware = createLogger();

const configureStore = () => {
  const store = createStore(
    reducers.appReducer,
    applyMiddleware(loggerMiddleware),
  );
  return store;
};

export default configureStore;
