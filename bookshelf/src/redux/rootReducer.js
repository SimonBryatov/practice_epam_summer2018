import { createActions, handleActions, combineActions } from "redux-actions";
import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'

let initialState = {
  modal: 
  {opened: false, name: "", author: "", year: "", imageUrl: ""},
  items: [{name: "Why", author: "Me", year: "22", imageUrl: "..."}],
  itemIndex: ""
}
// let rootReducer = (state = initialState, actions) => {
//     return state
// }

const {toggleModal, addBook} = createActions({
    TOGGLE_MODAL: (itemIndex) => (itemIndex),
    ADD_BOOK: (info) => (info)
  });  

//console.log(toggleModal())

  const logicReducer = handleActions(
    {
      [toggleModal]: (state, {payload}) => {
        return { ...state, modal: {...state.modal, opened: !state.modal.opened}, ...payload};
      },
      [addBook]: (state, {payload}) => {
        let items = [...state.items]
        items.push(payload)
        return { ...state, items};
      }
    },
    initialState
  );

  const rootReducer = combineReducers({
   logic: logicReducer,
   form: formReducer
  })  

export {toggleModal, addBook};
export default rootReducer