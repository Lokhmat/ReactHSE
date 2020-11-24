import { combineReducers } from "redux"
import { themeReducer } from './theme'
import { taskReducer } from './task'

export const rootReducer = combineReducers({
  theme : themeReducer,
  tasks : taskReducer
})