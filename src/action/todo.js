import { SET_DATA } from '../constant.js'
import { CREATE_TODO } from '../constant.js'
import { UPDATE_TODO } from '../constant.js'
import { DELETE_TODO } from '../constant.js'

export const setData = (todo) => ({
    type: SET_DATA,
    payload: todo
})

export const createTodo = (todo) => ({
    type: CREATE_TODO,
    payload: todo
})

export const updateTodo = (todo) => ({
    type: UPDATE_TODO,
    payload: todo
})

export const deleteTodo = (todo) => ({
    type: DELETE_TODO,
    payload: todo
})