import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// react-logger is used as an example of adding middlewares.
// this is optional, and can be disabled on production:
// https://github.com/LogRocket/redux-logger#log-only-in-development
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  // devTools: process.env.NODE_ENV !== "production"
});

// console.log(store.dispatch(rootReducer));
export default store;
