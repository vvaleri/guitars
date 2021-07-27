const defaultState = {
  products: [],
  totalQuantity: 0
};

const ADD_TO_CART = 'ADD_TO_CART';

const cartReducer = (state = defaultState, action) => {
  const product = action.payload;
  const itemExist = state.products.find(item => item.id === product.id);
  const total = state.products.reduce((acc, item) => acc += item.quantity, 1);

  switch (action.type) {
    case ADD_TO_CART:
      if (itemExist) {
        return {
          ...state,
          products: state.products.map(item => item.id === product.id
            ? { ...product, quantity: item.quantity + 1 }
            : item),
          totalQuantity: total
        };
      }
      return {
        ...state, products: [...state.products, action.payload], totalQuantity: total
      };

    default:
      return state;
  }
};

export default cartReducer;
