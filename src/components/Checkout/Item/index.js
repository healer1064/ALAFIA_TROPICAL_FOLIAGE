import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCartItem, addPlantToCart , reduceCartItem } from './../../../redux/cart/cart.actions'

const Item = (plant) => {
  const dispatch = useDispatch()
  const {
    documentId,
    plantName, 
    plantThumbnail, 
    plantPrice,
    quantity
  } = plant

  const handleRemoveCartItem = (documentId) => {
    dispatch(
      removeCartItem({
        documentId
      })
    )
  }

  const handleAddPlant = (plant) => {
    dispatch(
        addPlantToCart(plant)
    )
  }

  const handleReduceItem = (plant) => {
    dispatch(
      reduceCartItem(plant)
    )
  }

  return (
    <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
      <tbody>
        <tr>
          <td>
            <img src={plantThumbnail} alt={plantName} />
          </td>
          <td>
            {plantName}
          </td>
          <td>
            <span className="cartBtn"
              onClick={() => handleReduceItem(plant)}>
              {`< `}
            </span>
            <span>
              {quantity}
            </span>
            <span className="cartBtn"
              onClick={() => handleAddPlant(plant)}>
              {` >`}
            </span>
          </td>
          <td>
            ${plantPrice}
          </td>
          <td align="center">
            <span className="cartBtn" onClick={() => handleRemoveCartItem(documentId)}>
              X
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Item