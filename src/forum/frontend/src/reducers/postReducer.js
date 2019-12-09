import uuid from 'uuid';
import {GET_POSTS, ADD_POST, DELETE_POST } from '../actions/types'

// handles all types of state changes to the posts
// we must define action types

const initialState = {
    posts : [
        {id :uuid(), title: "Hacking the system"},
        {id : uuid(), title: "Hacking the password"},
        {id : uuid(), title: "Hacking the manager"},
        {id : uuid(), title: "Hacking the car"}
    ]

    
}

export default function (state= initialState, action ){
    switch(action.type){
        case GET_POSTS:
            return {...state}
        default:
            return state;
    }
}