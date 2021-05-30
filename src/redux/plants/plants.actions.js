import { plantsTypes } from './plants.types'

export const addPlantStart = plantData => ({
    type: plantsTypes.ADD_NEW_PLANT_START,
    payload: plantData
})

export const fetchPlantsStart = () => ({
    type: plantsTypes.FETCH_PLANTS_START
})

export const setPlants = plants => ({
    type: plantsTypes.SET_PLANTS,
    payload: plants
})
export const deletePlantStart = id => ({
    type: plantsTypes.DELETE_PLANT_START,
    payload: id
})