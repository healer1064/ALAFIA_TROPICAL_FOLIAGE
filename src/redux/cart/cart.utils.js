 export const existingCartIem = ({ 
    prevCartItem,
    nextCartItem,
 }) => {
    return prevCartItem.find(
        cartItem => cartItem.documentId === nextCartItem.documentId
    )
 }
 
 
 export const handleAddToCart = ({ 
     prevCartItem,
     nextCartItem
 }) => {
     const quantityIncrement = 1
     const cartItemExists = existingCartIem({ prevCartItem, nextCartItem })

     if(cartItemExists){
         return prevCartItem.map(cartItem => 
            cartItem.documentId == nextCartItem.documentId
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantityIncrement
            } : cartItem
        )
     }
    
    return [
        ...prevCartItem,
        {
            ...nextCartItem,
            quantity: quantityIncrement
        }
    ]
 }