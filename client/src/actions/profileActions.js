import axios from 'axios';
import {GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS, SET_CURRENT_USER, GET_PROFILES} from './types';
import Swal from 'sweetalert2';

// Get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('/api/profile')
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        );
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
    axios.post('/api/profile', profileData)
        .then(res => history.push('/dashboard'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })    
        )
}

// Add experience
export const addExperience = (expData, history) => dispatch => {
    axios.post('/api/profile/experience', expData)    
        .then(res => {
            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Experience saved',
                text: 'The experience was save succesfully.',
                showConfirmButton: false,
                timer: 2000
            })   
            history.push('/dashboard')
        })
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

// Add experience
export const addEducation = (eduData, history) => dispatch => {
    axios.post('/api/profile/education', eduData)    
        .then(res => {
            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Education saved',
                text: 'Your achievement was save succesfully.',
                showConfirmButton: false,
                timer: 2000
            })   
            history.push('/dashboard')
        })
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

// Remove an education credential
export const removeEducationCredential = id => dispatch => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove credential!'
    }).then((result) => {
        if (result.value) {
            axios.delete(`/api/profile/education/${id}`)
                .then(res =>
                    dispatch({
                        type: GET_PROFILE,
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
                'The credential has been deleted.',
                'success'
            )
        }
    })
}

// Remove an experience credential
export const removeExperienceCredential = id => dispatch => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove credential!'
    }).then((result) => {
        if (result.value) {
            axios.delete(`/api/profile/experience/${id}`)
                .then(res =>
                    dispatch({
                        type: GET_PROFILE,
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
                'The credential has been deleted.',
                'success'
            )
        }
    })
}

// Delete full account
export const deleteAccount = () => dispatch => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete account!'
    }).then((result) => {
        if (result.value) {
            axios.delete('/api/profile')
                .then(res =>
                    dispatch({
                        type: SET_CURRENT_USER,
                        payload: {}
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
                'Your account has been deleted.',
                'success'
            )
        }
    })
}

// Get all profiles
export const getProfiles = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('/api/profile/all')
        .then(res => 
            dispatch({
                type: GET_PROFILES,
                payload: res.data
            })    
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILES,
                payload: null
            })    
        )
}

// Get a specific profile by handle
export const getProfileHandle = handle => dispatch => {
    dispatch(setProfileLoading());
    axios.get(`/api/profile/handle/${handle}`)
        .then(res => 
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })    
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: null
            })    
        )
}

// Profile loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    };
};
  
// Clear profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    };
};