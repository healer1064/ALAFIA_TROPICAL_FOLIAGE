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
            cartItem.documentId === nextCartItem.documentId
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

 export const handleRemoveCartItem = ({
    prevCartItems,
    cartItemToRemove
  }) => {
    return prevCartItems.filter(item => item.documentID !== cartItemToRemove.documentID);
  }
  
  export const handleReduceCartItem = ({
    prevCartItems,
    cartItemToReduce
  }) => {
    const existingCartItem = prevCartItems.find(cartItem =>
      cartItem.documentID === cartItemToReduce.documentID);
  
    if (existingCartItem.quantity === 1) {
      return prevCartItems.filter(
        cartItem => cartItem.documentID !== existingCartItem.documentID
      );
    }
  
    return prevCartItems.map(cartItem =>
      cartItem.documentID === existingCartItem.documentID ?
      {
        ...cartItem,
        quantity: cartItem.quantity - 1
      } : cartItem)
  }