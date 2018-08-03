import { connect } from 'react-redux'
import React from 'react';

import { toggleModal, saveBook, deleteBook } from "../redux/actions/logicActions"
import Modal from "../components/Modal/Modal"

let ModalContainer = (props) => (
    <React.Fragment>
    <Modal {...props} />
    </React.Fragment>
)

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

ModalContainer = connect(mapStateToProps, mapDispatchToProps)(ModalContainer)

export default ModalContainer