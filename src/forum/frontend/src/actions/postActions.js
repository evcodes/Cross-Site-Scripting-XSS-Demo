import {GET_POSTS, ADD_POST, DELETE_POST } from './types'
//This file defines how we interface with the backend.

export const getPosts = () =>{
    return {
        type: GET_POSTS
    }
}

export const deletePost = id => {
    return{
        type: DELETE_POST,
        payload: id
    }
}

export const addPost = post => {
    return{
        type: ADD_POST,
        payload: post
    }
}