import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ModalForm = ({handleSubmit, toggleModal, reset}) => {
  return <form onSubmit={handleSubmit} className="Modal-content">
  <div className="Modal-header">Book editor</div>
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
  <button className="Modal-btn--cancel"  type="button" onClick={() => {toggleModal(); reset()}}>Cancel</button>
  </div>
  </form>
}

ModalForm = reduxForm({
  form: 'bookSettings',
  enableReinitialize: true,
})(ModalForm)

export default ModalForm
