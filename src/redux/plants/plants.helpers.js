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

export const handleFetchPlants = ({ startAfterDoc}) => {
    return new Promise(( resolve, reject) => {
        const pageSize = 3

        let ref = firestore.collection('plants').orderBy('createdDate').limit(pageSize)
        if(startAfterDoc) ref = ref.startAfter(startAfterDoc)
        // firestore
        // .collection('plants')
        // .orderBy('createdDate')
        // .limit(pageSize)
        ref
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
            reject(error)
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