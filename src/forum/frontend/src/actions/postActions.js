import axios from 'axios';

import {GET_POSTS, ADD_POST, DELETE_POST, LOAD_POST, GET_POST } from './types'
//This file defines how we interface with the backend.

//get all posts
export const getPosts = () => dispatch =>{
    dispatch(setPostsLoading());
    axios.get('/api/forum').then(res => 
        dispatch({
            type:GET_POSTS,
            payload:res.data    
        })
    ) 
}

// remove a post from the collection if authenticated user
export const deletePost = id => {
    return{
        type: DELETE_POST,
        payload: id
    }
}

//Get single post based on ID
export const getPost = id => dispatch => {
    axios.get(`/api/forum/${id}`).then(res => {
        dispatch({
            type:GET_POST,
            payload: res.data
        })
    })
}

//Add a post to the database
export const addPost = post => dispatch => {
    axios.post('/api/forum', post).then(res => 
        dispatch({
            type:ADD_POST,
            payload:res.data    
        })
    ) 
}

// change status to loading
export const setPostsLoading = () =>{
    return {
        type: LOAD_POST        
    }
}