import { createActions } from "redux-actions";

const {toggleModal, saveBook, deleteBook} = createActions({
    TOGGLE_MODAL: (itemIndex, mode="edit") => ({itemIndex, mode}),
    SAVE_BOOK: (data) => (data),
    DELETE_BOOK: (id) => (id)
  }); 

  export {toggleModal, saveBook, deleteBook};  