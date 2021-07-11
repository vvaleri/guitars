import cartTypes from './cart.types';

export const addProductCard = nextCartItem => ({
  type: cartTypes.ADD_TO_CART,
  payload: nextCartItem
});
