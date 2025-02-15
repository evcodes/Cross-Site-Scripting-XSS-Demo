import {GET_POSTS, ADD_POST, DELETE_POST, POSTS_LOADING, LOAD_POST,GET_POST } from '../actions/types'

// handles all types of state changes to the posts
// we must define action types
//"id :uuid(), title: "<img onerror='alert(\"Hacked!\");' src='invalid-image' />""

const initialState = {
    posts : [],
    post: null,
    loading: false
};

export default function (state= initialState, action ){
    switch(action.type){
        case GET_POSTS:
            return {
                ...state, 
                posts:action.payload,
                loading:false
            }
            
        case DELETE_POST:
            return{
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            }

        case GET_POST:
            return{
                ...state,
                posts: state.posts.filter(post => post.id === action.payloads)
            }

        case ADD_POST:
                return{
                    ...state,
                    posts: [action.payload, ...state.posts]
            }
        case LOAD_POST:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}