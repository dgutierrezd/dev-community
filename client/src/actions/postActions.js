import axios from "axios";
import Swal from 'sweetalert2';

import {ADD_POST, GET_ERRORS, GET_POSTS, POST_LOADING, DELETE_POST, GET_POST, CLEAR_ERRORS} from './types';

// Add a post
export const addPost = postData => dispatch => {
    dispatch(clearErrors());
    axios.post('/api/posts', postData)
        .then(res => 
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })    
        )
}

// Get posts
export const getPosts = () => dispatch => {
    dispatch(setPostLoading());
    axios.get('/api/posts')
        .then(res => 
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_POSTS,
                payload: null
            })    
        )
}

// Delete post
export const deletePost = id => dispatch => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove post!'
    }).then((result) => {
        if (result.value) {
            axios.delete(`api/posts/${id}`)
                .then(res => 
                    dispatch({
                        type: DELETE_POST,
                        payload: id
                    })
                )
                .catch(err => 
                    dispatch({
                        type: GET_POSTS,
                        payload: err.response.data
                    })    
                )
                Swal.fire(
                    'Deleted!',
                    'The post has been deleted.',
                    'success'
                )
        }
    })
}

// Add like
export const addLike = id => dispatch => {
    axios.post(`/api/posts/like/${id}`)
        .then(res => 
            dispatch(getPosts())
        )
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })    
        )
}

// Remove like
export const removeLike = id => dispatch => {
    axios.post(`/api/posts/unlike/${id}`)
        .then(res => 
            dispatch(getPosts())
        )
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })    
        )
}

// Get a specific post by id
export const getPost = id => dispatch => {
    dispatch(setPostLoading());
    axios.get(`/api/posts/${id}`)
        .then(res => 
            dispatch({
                type: GET_POST,
                payload: res.data
            })    
        )
        .catch(err =>
            dispatch({
                type: GET_POST,
                payload: null
            })    
        )
}

// Add a comment to a post
export const addComment = (id, newComment) => dispatch => {
    dispatch(clearErrors());
    axios.post(`/api/posts/comment/${id}`, newComment)
        .then(res => 
            dispatch(getPost(id))
        )
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })    
        )
}

// Delete comment from a post
export const deleteComment = (postId, idComment) => dispatch => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove comment!'
    }).then((result) => {
        if (result.value) {
            axios.delete(`/api/posts/comment/${postId}/${idComment}`)
                .then(res => 
                    dispatch({
                        type: GET_POST,
                        payload: res.data
                    })
                )
                .catch(err => 
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data
                    })    
                )
                Swal.fire(
                    'Deleted!',
                    'The comment has been deleted.',
                    'success'
                )
        }
    })
}

// Set loading state
export const setPostLoading = () => {
    return {
        type: POST_LOADING
    }
}

// CLear erros
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}