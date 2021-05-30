import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'

import { addPlantStart } from '../../redux/plants/plants.actions'

import { firestore } from './../../firebase/utils'
import Modal from './../../components/Modal'
import FormInput from './../../components/forms/FormInput'
import FormSelect from './../../components/forms/FormSelect'
import Button from './../../components/forms/Button'

const StyledDiv = styled.div`
    padding: 0 10px;

    .callToActions {
        display: inline-block;
        width: 100%;
        padding: 0;
        margin: 0 auto;

        ul, li {
            margin: 0;
            padding: 0;
            list-style-type: none;
        }

        ul {
            li {
                display: inline-block;

            }
        }

    }
`

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

export default function Admin(){
    const { currentUser } = useSelector(mapState)

    const dispatch = useDispatch()

    const [plants, setPlants] = useState([])
    const [hideModal, setHideModal] = useState(true)
    // const [productCategory, setProductCategory] = useState('')
    const [plantName, setPlantName] = useState('')
    const [plantThumbnail, setPlantThumbnail] = useState('')
    const [plantPrice, setPlantPrice] = useState(0)

    const toggleModal = () => setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    };

    // useEffect(() => {
    //     firestore.collection('products').get().then(snapshot => {
    //     const snapshotData = snapshot.docs.map(doc => doc.data())
    //     setProducts(snapshotData);
    //     })
    // }, [])

    const handleSubmit = e => {
        e.preventDefault()

        dispatch(addPlantStart({ 
            // productCategory, 
            plantName, 
            plantThumbnail, 
            plantPrice
        }))
    
        // firestore.collection('products').doc().set({
        //   productCategory,
        //   productName,
        //   productThumbnail,
        //   productPrice
        // }).then(e => {
        //   // Success
        // })
    
      }


    return (
        <StyledDiv>
                <div className="callToActions">
                <ul>
                <li>
                    <Button onClick={() => toggleModal()}>
                    Add new product
                    </Button>
                </li>
                </ul>
            </div>

            <Modal {...configModal}>
                <div className="addNewProductForm">
                    <form onSubmit={handleSubmit}>

                        <h2>Add new product</h2>

                        {/* <FormSelect
                            label="Category"
                            options={[{
                                value: "mens",
                                name: "Mens"
                            }, {
                                value: "womens",
                                name: "Womens"
                            }]}
                        handleChange={e => setProductCategory(e.target.value)}
                        /> */}

                        <FormInput
                            label="Name"
                            type="text"
                            value={plantName}
                            handleChange={e => setPlantName(e.target.value)}
                        />

                        <FormInput
                            label="Main image URL"
                            type="url"
                            value={plantThumbnail}
                            handleChange={e => setPlantThumbnail(e.target.value)}
                        />

                        <FormInput
                            label="Price"
                            type="number"
                            min="0.00"
                            max="10000.00"
                            step="0.01"
                            value={plantPrice}
                            handleChange={e => setPlantPrice(e.target.value)}
                        />

                        <Button type="submit">
                            Add product
                        </Button>

                    </form>
                </div>
            </Modal>
        </StyledDiv>    
    )
}