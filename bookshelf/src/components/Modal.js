import React from 'react';
import '../styles/Modal.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux'
import ModalForm from "./ModalForm"
import ModalAgreement from "./ModalAgreement"

import { toggleModal, saveBook, deleteBook } from "../redux/rootReducer"

let Modal = ({toggleModal, deleteBook, saveBook, opened, mode, itemId, selectedItem}) => {
    let submit = (values) => {
        saveBook(values);
    } 
    let deleteItem = () => {
        toggleModal();
        deleteBook(itemId);
    }  
    return(
        <ReactCSSTransitionGroup
            transitionName="modal-show"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}>
            {opened ? 
            <div key="1" className="Modal">
            {mode === "edit" ?
            <ModalForm toggleModal={toggleModal} onSubmit={submit}/>
            :
            <ModalAgreement onDelete={deleteItem} toggleModal={toggleModal} name={selectedItem.name}/>
            }
            </div>
            : null}
            </ReactCSSTransitionGroup>
        )
}

let getCurrentItem = (state) => {
    let index = state.logic.itemIndex
    return index === "" ? "" : state.logic.items[index] 
}

const mapStateToProps = (state) => ({
    opened: state.logic.modal.opened,
    mode: state.logic.modal.mode,
    itemId: state.logic.itemIndex,
    selectedItem: getCurrentItem(state)
  })
const mapDispatchToProps = (dispatch) => ({
    toggleModal: () => dispatch(toggleModal()),
    saveBook: (values) => dispatch(saveBook(values)),
    deleteBook: (id) => dispatch(deleteBook(id))
})  

Modal = connect(mapStateToProps, mapDispatchToProps)(Modal)

export default Modal