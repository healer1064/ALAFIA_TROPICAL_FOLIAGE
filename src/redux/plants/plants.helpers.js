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

export const handleDeletePlant = documentId => {
    return new Promise(( resolve, reject) => {
        firestore
        .collection('plants')
        .doc(documentId)
        .delete()
        .then(() => {
            resolve()
        })
        .catch(error => {
            reject(error)
        })
    })  
}

export const handleFetchAPlant = plantID => {
    return new Promise(( resolve, reject) => {
        firestore
        .collection('plants')
        .doc(plantID)
        .get()
        .then(snapshot => {
            if(snapshot.exists){
                resolve(
                    snapshot.data()
                )
            }
        })
        .catch(error => {
            reject(error)
        })
    })
}