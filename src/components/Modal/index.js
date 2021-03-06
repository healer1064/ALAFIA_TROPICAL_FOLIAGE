import React, { useState } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    .modalOverlay {
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .modal {
        z-index: 10;
        box-shadow: 0rem 0.225rem 0.475rem 0.164rem rgba(0, 0, 0, 0.12);
        position: absolute;
        top: 50%; left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background-color: ${({ theme }) => theme.secondary};
        width: 95%;
        padding: 2rem;
        max-width: 60rem;
        height: auto;
        min-height: 40.0rem;
      } 

`

export default function Modal({ hideModal, toggleModal, children }){
  if (hideModal) return null;

  return (
    <StyledDiv>
      <div className="modalOverlay" onClick={() => toggleModal()} />
      <div className="modal">
        {children}
      </div>
    </StyledDiv>
  );
}
