import React from 'react';
import '../styles/Modal.css';

let ModalAgreement = ({name, toggleModal, onDelete}) => (
    <div className="Modal-content">
    <p className="Modal-header">Delete book</p>
    <p>{`Would you really want to delete book "${name}?"`}</p>
    <div className="Modal-controls">
    <button className="Modal-btn--save" onClick={() => {onDelete()}}>Delete</button>
    <button className="Modal-btn--cancel" onClick={() => {toggleModal()}}>Cancel</button>
    </div>
    </div>
)

export default ModalAgreement