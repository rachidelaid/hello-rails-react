
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import msgReducer from './greetings';

const reducer = combineReducers({
  msgReducer,
});

const store = createStore(
  reducer, applyMiddleware(logger, thunk)
);

export default store;