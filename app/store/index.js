/**
 * Store index
 */

import reducers from '../reducers';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

const loggerMiddleware = createLogger();

const configureStore = () => {
  const store = createStore(
    reducers.appReducer,
    applyMiddleware(loggerMiddleware),
  );
  return store;
};

export default configureStore;
