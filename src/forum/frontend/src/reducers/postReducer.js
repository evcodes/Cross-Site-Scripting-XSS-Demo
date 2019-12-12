import uuid from 'uuid';
import {GET_POSTS, ADD_POST, DELETE_POST } from '../actions/types'

// handles all types of state changes to the posts
// we must define action types

const initialState = {
    posts : [
        {id :uuid(), title: "<img onerror='alert(\"Hacked!\");' src='invalid-image' />"}
    ]
}

export default function (state= initialState, action ){
    switch(action.type){
        case GET_POSTS:
            return {...state}
            
        case DELETE_POST:
            return{
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            }

        case ADD_POST:
                return{
                    ...state,
                    posts: [action.payload, ...state.posts]
            }
        default:
            return state;
    }
}