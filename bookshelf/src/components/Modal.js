import React, { Component } from 'react';
import '../styles/Modal.css';
import { connect } from 'react-redux'
import {toggleModal, addBook} from "../redux/rootReducer"

let Modal = ({dispatch, modalState}) => {
        return(
            modalState.opened ?
            <div className="Modal">
            <div className="Modal-content">
            <p className="Modal-header">Book editor</p>
            <div className="Modal-formfield__container">
            <div>Name</div>
            <input value={modalState.name}/>
            </div>
            <div className="Modal-formfield__container">
            <div>Author</div>
            <input value={modalState.author}/>
            </div>
            <div className="Modal-formfield__container"> 
            <div>Year</div>
            <input value={modalState.year}/>
            </div>
            <div className="Modal-formfield__container">
            <div>Image link</div>
            <input value={modalState.imageUrl}/>
            </div>
            <div className="Modal-controls">
            <button className="Modal-btn--save" onClick={() => {dispatch(toggleModal()); dispatch(addBook())}}>Save</button>
            <button className="Modal-btn--cancel" onClick={() => dispatch(toggleModal())}>Cancel</button>
            </div>
            </div>
            </div>
            : null
        )
}

const mapStateToProps = (state) => ({
    modalState: state.modal
  })
  
Modal = connect(mapStateToProps)(Modal)

export default Modal