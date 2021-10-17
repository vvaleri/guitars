const defaultState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0
};

const ADD_TO_CART = 'ADD_TO_CART';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const cartReducer = (state = defaultState, action) => {
  const product = action.payload;
  const itemExist = state.products.find(item => item.id === product.id);
  const total = state.products.reduce((acc, item) => acc += item.quantity, 1);
  const activeProduct = state.products.find(item => item.id === action.payload);

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

    case INCREASE_QUANTITY:
      activeProduct.quantity += 1;
      return {
        ...state,
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + Number(activeProduct.price)
      };

    case DECREASE_QUANTITY:
      if (activeProduct.quantity > 1) {
        activeProduct.quantity -= 1;
        return {
          ...state,
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - Number(activeProduct.price)
        };
      }
      return state;

    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(item => item.id !== activeProduct.id),
        totalQuantity: state.totalQuantity - activeProduct.quantity,
        totalPrice: state.totalPrice - activeProduct.price * activeProduct.quantity
      };

    default:
      return state;
  }
};

export default cartReducer;
