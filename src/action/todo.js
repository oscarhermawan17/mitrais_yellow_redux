import { 
    REQUEST_TODO_PENDING, 
    REQUEST_TODO_SUCCESS, 
    REQUEST_TODO_FAILED
    } from '../constant.js'

import axios from 'axios'

export const requestTodos = todo => dispatch => {
    dispatch({type: REQUEST_TODO_PENDING })
    axios.get(`https://cdc-web-frontend.herokuapp.com/todos`)
    .then(response => {
        dispatch({type: REQUEST_TODO_SUCCESS, payload:response.data})
    })
    .catch(err => {
        dispatch({type: REQUEST_TODO_FAILED, payload:err})
    });
}
   