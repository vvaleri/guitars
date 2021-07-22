const defaultState = {
  products: []
};

const ADD_TO_CART = 'ADD_TO_CART';

const cartReducer = (state = defaultState, action) => {
  const product = action.payload;
  const itemExist = state.products.find(item => item.id === product.id);

  switch (action.type) {
    case ADD_TO_CART:
      if (itemExist) {
        return {
          ...state,
          products: state.products.map(item => item.id === product.id
            ? { ...product, quantity: item.quantity + 1 }
            : item)
        };
      }
      return {
        ...state, products: [...state.products, action.payload]
      };

    default:
      return state;
  }
};

export default cartReducer;
