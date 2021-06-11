import { createSelector } from 'reselect';

export const selectCartData = state => state.cart

export const selectCartItems = createSelector(
  [selectCartData],
  cartData => cartData.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (quantity, cartItem) =>
        quantity + cartItem.quantity
      , 0)
)