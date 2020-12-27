import { useReducer } from 'react'
import { combineReducers } from 'redux'
import userReducer from './reducers/userReducers'

export default combineReducers({
    user:userReducer
})