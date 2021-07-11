import cartTypes from './cart.types';

const defaultState = {
  cartItems: []
};

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload
          }
        ]
      };

    default:
      return state;
  }
};
