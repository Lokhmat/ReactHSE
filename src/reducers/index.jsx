import { combineReducers } from "redux"
import { themeReducer } from './theme'
import { taskReducer } from './projects'

export const rootReducer = combineReducers({
  theme : themeReducer,
  tasks : taskReducer
})