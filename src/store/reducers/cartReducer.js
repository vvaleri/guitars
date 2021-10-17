const defaultState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0
};

const ADD_TO_CART = 'ADD_TO_CART';

const cartReducer = (state = defaultState, action) => {
  const product = action.payload;
  const itemExist = state.products.find(item => item.id === product.id);
  const total = state.products.reduce((acc, item) => acc += item.quantity, 1);

  switch (action.type) {
    case ADD_TO_CART:
      if (itemExist) {
        const priceItem = state.totalPrice + product.price * product.quantity;
        return {
          ...state,
          products: state.products.map(item => item.id === product.id
            ? { ...product, quantity: item.quantity + 1, totalPrice: priceItem }
            : item),
          totalQuantity: total,
          totalPrice: priceItem
        };
      }
      return {
        ...state,
        products: [...state.products, action.payload],
        totalQuantity: total,
        totalPrice: state.totalPrice + product.price * product.quantity
      };

    default:
      return state;
  }
};

export default cartReducer;
