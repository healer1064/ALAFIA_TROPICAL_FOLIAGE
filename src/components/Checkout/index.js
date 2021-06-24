import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from './../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import Button from './../forms/Button'
import Item from './Item'

const StyledDiv = styled.div`
    margin: 2rem auto;

    h1 {
    display: block;
    width: 100%;
    }

    h1, p {
    text-align: center;
    }

    .checkoutHeader {
    border-bottom: 1px solid black;
    }

    .cart {
    max-width: 100.0rem;
    margin: 0 auto;

    table {
        width: 100%;
    }
    }

    .checkoutHeader,
    .cart {
    width: 100%;
    text-align: left;

    th,
    td {
        width: 22%;
    }
    }

    .cartItem {
    td img {
        display: block;
        width: 100%;
    }
    }

    .cartBtns {
    display: block;
    width: 100%;
    }

    .cartBtn {
    cursor: pointer;
    }
`





const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default function Checkout({ }){
  const history = useHistory()
  const { cartItems, total } = useSelector(mapState)

  const error = 'You have no items in your cart.'

  return (
    <StyledDiv>
      <h1>
        Checkout
      </h1>

      <div className="cart">
        {cartItems.length > 0 ? (
          <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
                <tbody>
                  <tr>
                    <th>
                      Product
                    </th>
                    <th>
                      Description
                    </th>
                    <th>
                      Quantity
                    </th>
                    <th>
                      Price
                    </th>
                    <th>
                      Remove
                    </th>
                  </tr>
                </tbody>
              </table>
            </tr>
            <tr>
              <table border="0" cellSpacing="0" cellPadding="0">
                <tbody>
                  {cartItems.map((item, pos) => {
                    return (
                      <tr key={pos}>
                        <td>
                          <Item {...item} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </tr>
            <tr>
              <table algin="right" border="0" cellSpacing="0" cellPadding="10">
                <tr algin="right">
                  <td>
                    <h3>
                      Total: ${total}
                    </h3>
                  </td>
                </tr>
                <tr>
                  <table border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          <Button onClick={() => history.goBack()}>
                            Continue Shopping
                          </Button>
                        </td>
                        <td>
                          <Button>
                            Checkout
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </tr>
              </table>
            </tr>
          </tbody>
        </table>
        ) : (
          <p>
            {error}
          </p>
        )}
      </div>
      </StyledDiv>
  )
}