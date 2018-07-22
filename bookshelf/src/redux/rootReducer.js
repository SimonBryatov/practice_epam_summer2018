import { createActions, handleActions, combineActions } from "redux-actions";

let initialState = {
  modal: 
  {opened: true, name: "", author: "", year: "", imageUrl: ""},
  items: [{name: "Why", author: "Me", year: "22", imageUrl: "..."}]
}
// let rootReducer = (state = initialState, actions) => {
//     return state
// }

const {toggleModal, addBook} = createActions({
    TOGGLE_MODAL: (name = "", author="", year = "", imageUrl = "") => ({name, author, year, imageUrl}),
    ADD_BOOK: (info) => (info)
  });  

//console.log(toggleModal())

  const rootReducer = handleActions(
    {
      [toggleModal]: (state, {payload}) => {
        return { ...state, modal: {...state.modal, opened: !state.modal.opened, ...payload}};
      },
      [addBook]: (state, {payload}) => {
        let items = [...state.items]
        items.push(payload)
        return { ...state, items};
      }
    },
    initialState
  );

export {toggleModal, addBook};
export default rootReducer