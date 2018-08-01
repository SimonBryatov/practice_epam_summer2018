import React from 'react';

let ModalAgreement = ({name, toggleModal, onDelete}) => (
    <div className="Modal-content">
    <div className="Modal-header">Delete book</div>
    <div className="ModalAgreement-caption">{`Would you really want to delete book "${name}?"`}</div>
    <div className="Modal-controls">
    <button className="Modal-btn--delete" onClick={() => {onDelete()}}>Delete</button>
    <button className="Modal-btn--cancel" onClick={() => {toggleModal()}}>Cancel</button>
    </div>
    </div>
)

export default ModalAgreement