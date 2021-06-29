import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({});

export const store = createStore(rootReducer, composeWithDevTools());
