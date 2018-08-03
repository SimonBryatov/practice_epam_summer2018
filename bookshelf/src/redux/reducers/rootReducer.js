import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'
import logicReducer from "./logicReducer"

  const rootReducer = combineReducers({
   logic: logicReducer,
   form: formReducer
  })  

export default rootReducer