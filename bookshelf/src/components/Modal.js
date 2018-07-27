import React, { Component } from 'react';
import '../styles/Modal.css';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import ModalForm from "./ModalForm"

import {toggleModal, addBook} from "../redux/rootReducer"

let Modal = ({dispatch, opened}) => {
    let submit = (values) => {
        console.log(values);
        dispatch(toggleModal())
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
    return index == "" ? null : state.items[index] 
}

const mapStateToProps = (state) => ({
    opened: state.logic.modal.opened,
    selectedItem: getCurrentItem(state)
  })

Modal = connect(mapStateToProps)(Modal)

export default Modal