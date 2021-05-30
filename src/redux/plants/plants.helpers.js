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
            reject(error.message)
        })
    })
}

export const handleFetchPlants = () => {
    return new Promise(( resolve, reject) => {
        firestore
        .collection('plants')
        .get()
        .then(snapshot => {
            const plantsArray = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    documentId: doc.id
                }
            })
            resolve(plantsArray)
        })
        .catch(error => {
            reject(error.message)
        })
    })
}