import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

// ACTIONS
import { fetchPlantsStart } from './../../redux/plants/plants.actions'

import Product from './product'
import LoadMore from '../LoadMore'

const StyledDiv =  styled.div`
    display: block;
    width: 100%;
    padding: 0;
    margin: 2rem 0;

    .product_results {
        display: flex;
        flex-wrap: wrap;
        margin: 3rem -10px 0;
    }

    
`

const mapState = ({ plants }) => ({
    plantsData: plants.plantsData
})

export default function Products({}){
    const dispatch = useDispatch()
    const { plantsData } = useSelector(mapState)

    useEffect(() => {
        dispatch(fetchPlantsStart())
    }, [])

    if (!Array.isArray(plantsData)) return null

    if(plantsData.length < 1) {
        return (
            <StyledDiv>
                <p>No search results.</p>
            </StyledDiv>
        )
    }

    const handleLoadMore = () => {

    }

    const configLoadMore = {
        onLoadMoreEvent: handleLoadMore,
    }

    return ( 
        <StyledDiv>
            <h1>Browse Products</h1>
            <div className="product_results"> 
                {plantsData && plantsData.map((plant, index) => {
                    const { 
                        plantName, 
                        plantThumbnail, 
                        plantPrice,
                    } = plant
                    if(!plantThumbnail || !plantName || typeof plantPrice === 'undefined') return null

                    const configProduct = { plantName, plantThumbnail, plantPrice}

                    return (
                        <Product {...configProduct} />
                    )
                })}
            </div>
            <LoadMore {...configLoadMore} />
        </StyledDiv>
    )
}