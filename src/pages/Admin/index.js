import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { addPlantStart, fetchPlantsStart, deletePlantStart } from '../../redux/plants/plants.actions'

import Modal from './../../components/Modal'
import FormInput from './../../components/forms/FormInput'
import FormSelect from './../../components/forms/FormSelect'
import Button from './../../components/forms/Button'
import ListItem from './../../components/ListItem'

import CKEditor from 'ckeditor4-react'

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

    .managePlants {
        h1 {
            margin-top: 1.5rem;
        }

        table.results {
            tr {
                &:nth-child(even) {
                    background-color: #d3d3d3;
                }
            }

            .thumbnail {
                width: 15.0rem;
                margin: 0 auto;
            }
        }
    }


`

const mapState = ({ plants }) => ({
    plantsData: plants.plantsData
})

export default function Admin(){
    const dispatch = useDispatch()
    const { plantsData } = useSelector(mapState)

    const [hideModal, setHideModal] = useState(true)
    
    const [plantName, setPlantName] = useState('')
    const [plantThumbnail, setPlantThumbnail] = useState('')
    const [plantPrice, setPlantPrice] = useState(0)
    const [plantDesc, setPlantDesc] = useState('')

    const toggleModal = () => setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    }

    useEffect(() => {
        dispatch(fetchPlantsStart())
    }, [])

    const resetForm = () => {
        setHideModal(true)
        setPlantName('') 
        setPlantThumbnail('') 
        setPlantPrice(0)
        setPlantDesc('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addPlantStart({ 
            plantName, 
            plantThumbnail, 
            plantPrice,
            plantDesc
        }))
        resetForm()
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

                        <CKEditor 
                            onChange={evt => setPlantDesc(evt.editor.getData())}
                        />

                        <br />

                        <Button type="submit">
                            Add product
                        </Button>

                    </form>
                </div>
            </Modal>

            <div className="managePlants">

                {plantsData && plantsData.map((plant, index) => {
                    const { 
                        plantName, 
                        plantThumbnail, 
                        plantPrice,
                        documentId
                    } = plant
                    return (
                        <ListItem 
                            key={index} 
                            name={plantName} 
                            picture={plantThumbnail} 
                            price={plantPrice} 
                            handleClick={() => dispatch(deletePlantStart(documentId))} 
                        />
                    )
                })}
            </div>

        </StyledDiv>    
    )
}