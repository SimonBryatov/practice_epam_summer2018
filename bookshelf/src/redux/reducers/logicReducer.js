import { handleActions } from "redux-actions" 
import { toggleModal, saveBook, deleteBook } from "../actions/logicActions"

let initialState = {}

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

  export default logicReducer;