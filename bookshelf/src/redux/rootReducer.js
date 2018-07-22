import { createActions, handleActions, combineActions } from "redux-actions";

let initialState = {modal: {opened: false, name: "", author: "", year: "", imageUrl: ""}}
// let rootReducer = (state = initialState, actions) => {
//     return state
// }

const {toggleModal} = createActions({
    TOGGLE_MODAL: (amount = 1) => ({ amount }),
  });

//console.log(toggleModal())

  const rootReducer = handleActions(
    {
      [toggleModal]: (state) => {
        return { ...state, modal: {...state.modal, opened: !state.modal.opened}};
      }
    },
    initialState
  );

export {toggleModal};
export default rootReducer