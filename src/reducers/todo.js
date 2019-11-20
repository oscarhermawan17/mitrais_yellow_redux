import { 
    REQUEST_TODO_PENDING, 
    REQUEST_TODO_SUCCESS, 
    REQUEST_TODO_FAILED
    } from '../constant.js'

const initialStateTodos = {
    isPending: false,
    todos: [],
    error: ""
}

export const requestTodos = (state = initialStateTodos, action={}) =>{
    switch(action.type){
        case REQUEST_TODO_PENDING :
            return {...state, isPending:true }
        case REQUEST_TODO_SUCCESS :
            return {...state, todos:action.payload, isPending: false}
        case REQUEST_TODO_FAILED :
            return {...state, error:action.payload}
        default:
            return state
    }
}