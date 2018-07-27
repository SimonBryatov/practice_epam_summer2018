import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux"

let ModalForm = ({handleSubmit, toggleModal, reset}) => {
  return <form onSubmit={handleSubmit} className="Modal-content">
  <p className="Modal-header">Book editor</p>
  <div className="Modal-formfield__container">
  <div>Name</div>
  <Field name="name" component="input" type="text" />
  </div>
  <div className="Modal-formfield__container">
  <div>Author</div>
  <Field name="author" component="input" type="text" />
  </div>
  <div className="Modal-formfield__container"> 
  <div>Year</div>
  <Field name="year" component="input" type="text" />
  </div>
  <div className="Modal-formfield__container">
  <div>Image Url</div>
  <Field name="imageUrl" component="input" type="text" />
  </div>
  <div className="Modal-controls">
  <button className="Modal-btn--save" type="submit">Save</button>
  <button className="Modal-btn--cancel" onClick={() => {toggleModal(); reset()}}>Cancel</button>
  </div>
  </form>
}

ModalForm = reduxForm({
  form: 'bookSettings',
  enableReinitialize: true,
 // keepDirtyOnReinitialize: true
})(ModalForm)

let mstp = (state) => {
  let index = state.logic.itemIndex  
  //console.log(state)
  if (index !== "") {
    let item = state.logic.items[index]
    console.log({...item})
    return {initialValues: {...item}}
  } else return {}
}

ModalForm = connect(mstp)(ModalForm)


export default ModalForm

// import React from 'react'
// import { Field, reduxForm } from 'redux-form'
// import {toggleModal, addBook} from "../redux/rootReducer"

// let ModalForm = ({handleSubmit, dispatch, reset}) => {
//   return <form onSubmit={handleSubmit} className="Modal-content">
//   <p className="Modal-header">Book editor</p>
//   <div className="Modal-formfield__container">
//   <div>Name</div>
//   <Field name="name" component="input" type="text" />
//   </div>
//   <div className="Modal-formfield__container">
//   <div>Author</div>
//   <Field name="author" component="input" type="text" />
//   </div>
//   <div className="Modal-formfield__container"> 
//   <div>Year</div>
//   <Field name="year" component="input" type="text" />
//   </div>
//   <div className="Modal-formfield__container">
//   <div>Image Url</div>
//   <Field name="imageUrl" component="input" type="text" />
//   </div>
//   <div className="Modal-controls">
//   <button className="Modal-btn--save" type="submit" onClick={() => {dispatch(toggleModal())}}>Save</button>
//   <button className="Modal-btn--cancel" onClick={() => {dispatch(toggleModal()); reset()}}>Cancel</button>
//   </div>
//   </form>
// }

// ModalForm = reduxForm({
//   form: 'bookSettings'
// })(ModalForm)

// export default ModalForm