import React from 'react';
import './Modal.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ModalForm from "../ModalForm/ModalForm"
import ModalAgreement from "../ModalAgreement/ModalAgreement"

let Modal = ({toggleModal, deleteBook, saveBook, opened, mode, itemId, selectedItem}) => {
    
    let submit = (values) => {
        saveBook(values);
    }

    let deleteItem = () => {
        toggleModal();
        deleteBook(itemId);
    }

    let setInitialValues = () => {  
        if (selectedItem !== "") {
          return {initialValues: {...selectedItem}}
        } else return {}
    }

    return(
        <ReactCSSTransitionGroup
            transitionName="modal-show"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}>
            {opened ? 
                <div key="1" className="Modal">
                {mode === "edit" ?
                <ModalForm toggleModal={toggleModal} onSubmit={submit} {...setInitialValues()}/>
                :
                <ModalAgreement onDelete={deleteItem} toggleModal={toggleModal} name={selectedItem.name}/>
                }
                </div>
            : null}
            </ReactCSSTransitionGroup>
        )
}

export default Modal