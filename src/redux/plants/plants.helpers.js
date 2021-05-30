import { firestore } from './../../firebase/utils'

export const handleAddPlant = plant => {
    return new Promise((resolve, reject) => {
        firestore
        .collection('plants')
        .doc()
        .set(plant)
        .then(() => {
            resolve()
        })
        .catch(error => {
            reject(error)
        })
    })
}