//This file combines all the reducers that we use in the app
import {combineReducers} from 'redux';
import postReducer from './postReducer'

export default combineReducers({
    post:postReducer
})