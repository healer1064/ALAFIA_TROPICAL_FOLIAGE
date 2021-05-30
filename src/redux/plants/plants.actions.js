import { plantsTypes } from './plants.types'

export const addPlantStart = plantData => ({
    type: plantsTypes.ADD_NEW_PLANT_START,
    payload: plantData
})
