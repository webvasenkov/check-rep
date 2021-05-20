import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import mainReducer from './reducers/mainReducer';

const rootReducer = combineReducers({
  main: mainReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
