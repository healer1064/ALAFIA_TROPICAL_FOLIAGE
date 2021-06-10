import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import  Button from '../../forms/Button'
import { useDispatch } from 'react-redux'

import { addPlantToCart } from '../../../redux/cart/cart.actions'

const StyledDiv = styled.div`
    width: 33.333333333333%;
    margin: 0 auto 20px;
    padding: 0 10px;

    .thumb {
        display: block;
        width: 100%;

        img {
            display: block;
            width: 100%;
            margin: 0;
        }
    }

    .details {
        display: block;
        width: 100%;
        margin: 1rem 0;
        padding: 0;

        ul, ul li {
            padding: 0;
            margin: 0;
        }

        ul {
            li {
                list-style-type: none;
                width: 100%;
                display: block;
                margin: 0 0 .5rem;
                text-align: left;

                a {
                    color: black;
                }

                .name {
                    font-size: 2.2rem;
                    line-height: 1.2;
                    font-weight: 400;

                }

                .price {
                    font-size: 1.6rem;
                    line-height: 1;
                    font-weight: 400;
                }

                .add_to_cart {
                    margin: 2rem 0 0 0;
                }

            }
        }

    }

`

export default function Product(plant){
    const dispatch = useDispatch()
    const { documentId, plantThumbnail, plantName, plantPrice } = plant
    if( !documentId || !plantThumbnail || !plantName || typeof plantPrice === 'undefined') return null

    const configAddToCartButton = {
        type: 'button'
    }
 
    const handleAddToCart = (plant) => {
        if(!plant) return 
        dispatch(addPlantToCart(plant))
    }

    return(
        <StyledDiv>
            <div className="thumb">
                <Link to={`/plant/${documentId}`}>
                    <img src={plantThumbnail} alt={plantName}/>
                </Link>
            </div>

            <div className="details">
                <ul>
                    <li>
                        <Link to={`/plant/${documentId}`}>
                            <span className="name">
                                {plantName}
                            </span>
                        </Link>
                    </li>
                    <li>
                        $<span className="price">
                            {plantPrice}
                        </span>
                    </li>
                    <li>
                        <div className="add_to_cart">
                            <Button {...configAddToCartButton} onClick={() => handleAddToCart(plant)}>
                                Add to cart
                            </Button>
                        </div>
                    </li>
                </ul>
            </div>
        </StyledDiv>

    )
}