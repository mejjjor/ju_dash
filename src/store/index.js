import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers'

const middlewares = []

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(
    createLogger({
      diff: true,
      collapsed: true,
    }),
  );
}

export default createStore(rootReducer, applyMiddleware(...middlewares));
