import React from 'react';
import '../styles/Modal.css';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import ModalForm from "./ModalForm"

import { toggleModal, saveBook } from "../redux/rootReducer"

let Modal = ({dispatch, opened}) => {
    let submit = (values) => {
        console.log(values);
        dispatch(saveBook({...values}))
    }    
    return(
            opened ?
            <div className="Modal">
            <ModalForm dispatch={dispatch} onSubmit={submit}/>
            </div>
            : null
        )
}

let getCurrentItem = (state) => {
    let index = state.logic.itemIndex
    return index === "" ? "" : state.logic.items[index] 
}

const mapStateToProps = (state) => ({
    opened: state.logic.modal.opened,
    selectedItem: getCurrentItem(state)
  })

Modal = connect(mapStateToProps)(Modal)

export default Modal