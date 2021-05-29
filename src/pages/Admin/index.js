import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

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

    const [products, setProducts] = useState([])
    const [hideModal, setHideModal] = useState(true)
    const [productCategory, setProductCategory] = useState('')
    const [productName, setProductName] = useState('')
    const [productThumbnail, setProductThumbnail] = useState('')
    const [productPrice, setProductPrice] = useState(0)

    const toggleModal = () => setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    };

    useEffect(() => {
        firestore.collection('products').get().then(snapshot => {
        const snapshotData = snapshot.docs.map(doc => doc.data())
        setProducts(snapshotData);
        })
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
    
        firestore.collection('products').doc().set({
          productCategory,
          productName,
          productThumbnail,
          productPrice
        }).then(e => {
          // Success
        })
    
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

                        <FormSelect
                            label="Category"
                            // options={[{
                            //     value: "mens",
                            //     name: "Mens"
                            // }, {
                            //     value: "womens",
                            //     name: "Womens"
                            // }]}
                        handleChange={e => setProductCategory(e.target.value)}
                        />

                        <FormInput
                            label="Name"
                            type="text"
                            value={productName}
                            handleChange={e => setProductName(e.target.value)}
                        />

                        <FormInput
                            label="Main image URL"
                            type="url"
                            value={productThumbnail}
                            handleChange={e => setProductThumbnail(e.target.value)}
                        />

                        <FormInput
                            label="Price"
                            type="number"
                            min="0.00"
                            max="10000.00"
                            step="0.01"
                            value={productPrice}
                            handleChange={e => setProductPrice(e.target.value)}
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