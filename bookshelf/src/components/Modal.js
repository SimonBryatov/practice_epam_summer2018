import React, { Component } from 'react';
import '../styles/Modal.css';
import { connect } from 'react-redux'
import {toggleModal} from "../redux/rootReducer"

class Modal extends Component {
    render() {
        return(
            this.props.opened ?
            <div className="Modal">
            <div className="Modal-content">
            <p className="Modal-header">Book editor</p>
            <div className="Modal-formfield__container">
            <div>Name</div>
            <input />
            </div>
            <div className="Modal-formfield__container">
            <div>Author</div>
            <input />
            </div>
            <div className="Modal-formfield__container"> 
            <div>Year</div>
            <input />
            </div>
            <div className="Modal-formfield__container">
            <div>Image link</div>
            <input />
            </div>
            <div className="Modal-controls">
            <button className="Modal-btn--save">Save</button>
            <button className="Modal-btn--cancel" onClick={() => this.props.dispatch(toggleModal())}>Cancel</button>
            </div>
            </div>
            </div>
            : null
        )
    }
}

const mapStateToProps = (state) => ({
    opened: state.modal.opened
  })
  
Modal = connect(mapStateToProps)(Modal)

export default Modal