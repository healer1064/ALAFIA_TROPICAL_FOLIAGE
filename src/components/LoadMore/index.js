import React from 'react'
import Button from './../forms/Button'


export default function LoadMore({ 
    onLoadMoreEvent = () => { }
}){
    return (
        <Button onClick={() => onLoadMoreEvent()}>
            Load More
        </Button>
    )
}