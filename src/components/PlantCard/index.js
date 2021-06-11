import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'
import { fetchAPlantStart, setAPlant } from './../../redux/plants/plants.actions'
import { addPlantToCart } from './../../redux/cart/cart.actions'

import Button from '../forms/Button'

const StyledDiv = styled.div`
    max-width: 80.0rem;
    margin: 0 auto 10.0rem;

    .hero {
        display: block;
        width: 100%;
        margin: 2rem auto;

        img {
            display: block;
            width: 100%;
            margin: 0;

        }
    }

    .plant_details {
        ul, ul li{
            margin: 0;
            padding: 0;
        }

        ul li {
            list-style-type: none;
            margin: 0 auto 1rem;

            h1 {
                margin: 0;
            }
        }
    }

    .add_to_cart {
        max-width: 20.0rem;
    }

`


const mapState = ({ plants }) => ({
    aPlant: plants.aPlant
})

export default function PlantCard({}){
    const dispatch = useDispatch()
    const { plantID } = useParams()
    const { aPlant } = useSelector(mapState)

    const { plantName, plantThumbnail, plantPrice, plantDesc } = aPlant

    useEffect(() => {
        dispatch(fetchAPlantStart(plantID))

        return () => {
            dispatch(setAPlant({}))
        }
    },[])

    const handleAddToCart = (plant) => {
        if(!plant) return null
        dispatch(addPlantToCart(plant))
    }

    const configAddToCartBtn = {
        type: 'button'
    }
    return (
        <StyledDiv>
            <div className="hero">
                <img src={plantThumbnail}/>
            </div>
            <div className="plant_details">
                <ul>
                    <li>
                        <h1>{plantName}</h1>
                    </li>
                    <li>
                        <span>${plantPrice}</span>
                    </li>
                    <li>
                        <div className="add_to_cart">
                            <Button {...configAddToCartBtn} onClick={() => handleAddToCart(aPlant)}>
                                Add to Cart
                            </Button>
                        </div>
                    </li>
                    <li>
                        <span 
                        dangerouslySetInnerHTML={{__html: plantDesc}} />
                    </li>
                </ul>
            </div>
        </StyledDiv>
    )
}