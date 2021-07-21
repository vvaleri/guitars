import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  cartReducer
});

export const store = createStore(rootReducer, composeWithDevTools());
