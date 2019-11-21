import { 
    REQUEST_TODO_PENDING, 
    REQUEST_TODO_SUCCESS, 
    REQUEST_TODO_FAILED,
    DELETE_SINGLE_TODO,
    } from '../constant_todo.js'

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
        case DELETE_SINGLE_TODO :
            // let tmp = []
            let test = state.todos.filter(todo => todo.id !== action.payload.id)
            // state.todos.forEach(todo => todo.id !== action.payload.id ? tmp.push(todo) : null)
            return {...state, todos:test}
        default:
            return state
    }
}