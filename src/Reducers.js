import { combineReducers } from 'redux'
//import { userReducer } from 'react'
import userReducer from './reducers/userReducers'

export default combineReducers({
    user:userReducer
})