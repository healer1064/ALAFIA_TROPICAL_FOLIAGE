import { cartTypes } from './cart.types'

export const addPlantToCart = (nextCartItem) => ({
    type: cartTypes.ADD_TO_CART,
    payload: nextCartItem
})