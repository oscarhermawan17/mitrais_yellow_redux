import { 
    REQUEST_TODO_PENDING, 
    REQUEST_TODO_SUCCESS, 
    REQUEST_TODO_FAILED,
    POST_CREATE_TODO_PENDING,
    POST_CREATE_TODO_SUCCESS,
    POST_CREATE_TODO_FAILED,
    PUT_UPDATE_TODO_PENDING,
    PUT_UPDATE_TODO_SUCCESS,
    PUT_UPDATE_TODO_FAILED,
    DELETE_TODO_PENDING,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAILED,
    URL,
} from '../constant_todo.js'

import axios from 'axios'

export const createSingleTodo = (todo) => dispatch => {
    dispatch({type: POST_CREATE_TODO_PENDING })
    axios.post(URL, todo)
    .then(response => {
        dispatch({type: POST_CREATE_TODO_SUCCESS, payload:response.data})
    })
    .catch(err => {
        dispatch({type: POST_CREATE_TODO_FAILED, payload:err})
    });
}


export const requestTodos = () => dispatch => {
    dispatch({type: REQUEST_TODO_PENDING })
    axios.get(URL)
    .then(response => {
        dispatch({type: REQUEST_TODO_SUCCESS, payload:response.data})
    })
    .catch(err => {
        dispatch({type: REQUEST_TODO_FAILED, payload:err})
    });
}

export const updateSingleTodo = (todo) => dispatch => {
    dispatch({type: PUT_UPDATE_TODO_PENDING })
    axios.put(`${URL}${todo.id}`, todo)
    .then(response => {
        dispatch({type: PUT_UPDATE_TODO_SUCCESS, payload:todo})
    })
    .catch(err => {
        dispatch({type: PUT_UPDATE_TODO_FAILED, payload:err})
    });
}

export const deleteSingleTodo = (todo_id) => dispatch => {
    dispatch({type: DELETE_TODO_PENDING })
    axios.delete(`${URL}${todo_id}`)
    .then(response => {
        dispatch({type: DELETE_TODO_SUCCESS, payload:todo_id})
    })
    .catch(err => {
        dispatch({type: DELETE_TODO_FAILED, payload:err})
    });
}

export const sortingTodo = (value) => dispatch => {
    dispatch({type: "SORTING", payload:value})
}
   