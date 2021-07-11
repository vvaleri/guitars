import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './Cart/cart.reducer';

const rootReducer = combineReducers({
  cartData: cartReducer
});

export const store = createStore(rootReducer, composeWithDevTools());
