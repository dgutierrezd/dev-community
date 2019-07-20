import axios from 'axios';
import Swal from 'sweetalert2';

import {GET_ERRORS} from './types';

// Register User
export const registerUser = (userData,history) => dispatch => {
    axios.post('/api/users/register', userData)
            .then(res => {
                Swal.fire({
                    position: 'center',
                    type: 'success',
                    title: 'Success registration',
                    text: 'You have been registered successfully. Please login with your credentials.',
                    showConfirmButton: false,
                    timer: 3000
                })   
                history.push('/login')
            })
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            )
}