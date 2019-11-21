import { 
    REQUEST_TODO_PENDING, 
    REQUEST_TODO_SUCCESS, 
    REQUEST_TODO_FAILED,
    DELETE_SINGLE_TODO,
    POST_CREATE_TODO_PENDING,
    POST_CREATE_TODO_SUCCESS,
    POST_CREATE_TODO_FAILED
} from '../constant_todo.js'

import axios from 'axios'

export const requestTodos = () => dispatch => {
    dispatch({type: REQUEST_TODO_PENDING })
    axios.get(`https://cdc-web-frontend.herokuapp.com/todos`)
    .then(response => {
        dispatch({type: REQUEST_TODO_SUCCESS, payload:response.data})
    })
    .catch(err => {
        dispatch({type: REQUEST_TODO_FAILED, payload:err})
    });
}

export const createSingleTodo = (todo) => dispatch => {
    dispatch({type: POST_CREATE_TODO_PENDING })
    axios.post(`https://cdc-web-frontend.herokuapp.com/todos`, {...todo})
    .then(response => {
        console.log(response)
        dispatch({type: POST_CREATE_TODO_SUCCESS, payload:response.data})
    })
    .catch(err => {
        dispatch({type: POST_CREATE_TODO_FAILED, payload:err})
    });
}

export const deleteSingleTodo = todo => ({
    type: DELETE_SINGLE_TODO,
    payload: todo
})
   