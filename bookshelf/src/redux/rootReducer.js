import { createActions, handleActions} from "redux-actions";
import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'

let initialState = {}

const {toggleModal, saveBook, deleteBook} = createActions({
    TOGGLE_MODAL: (itemIndex, mode="edit") => ({itemIndex, mode}),
    SAVE_BOOK: (data) => (data),
    DELETE_BOOK: (id) => (id)
  });  

  const logicReducer = handleActions(
    {
      [toggleModal]: (state, {payload: {itemIndex, mode}}) => {
        if (itemIndex === undefined) itemIndex = "";
        return { ...state, modal: {...state.modal, opened: !state.modal.opened, mode}, itemIndex: itemIndex};
      },
      [saveBook]: (state, {payload}) => {
        let items = [...state.items]
        if (state.itemIndex === "") {
        items.push({...payload})
        } else {
          items[state.itemIndex] = {...payload}
        }
        return { ...state, items, modal: {opened: false}};
      },
      [deleteBook]: (state, {payload}) => {
        let items = [...state.items]
        items.splice(payload, 1);
        return {...state, items}
      }
    },
    initialState
  );

  const rootReducer = combineReducers({
   logic: logicReducer,
   form: formReducer
  })  

export {toggleModal, saveBook, deleteBook};
export default rootReducer