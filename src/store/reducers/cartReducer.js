const defaultState = {
  products: []
};

const ADD_TO_CART = 'ADD_TO_CART';

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state, products: [...state.products, action.payload]
      };

    default:
      return state;
  }
};

export default cartReducer;
