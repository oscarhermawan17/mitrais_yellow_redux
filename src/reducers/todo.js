import { 
    REQUEST_TODO_PENDING, 
    REQUEST_TODO_SUCCESS, 
    REQUEST_TODO_FAILED,
    DELETE_SINGLE_TODO,
    POST_CREATE_TODO_PENDING,
    POST_CREATE_TODO_SUCCESS,
    POST_CREATE_TODO_FAILED
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
            // let tmp = action.payload.map(todo => todo.hasOwnProperty("status") ? todo : {...todo, status:"not_yet"})
            return {...state, todos:action.payload, isPending: false}
        case REQUEST_TODO_FAILED :
            return {...state, error:action.payload, isPending: false}
        case POST_CREATE_TODO_PENDING :
            return {...state, isPending:true }
        case POST_CREATE_TODO_SUCCESS :
            let tmp = [...state.todos, action.payload]
            return {...state, todos:tmp, isPending: false }
        case POST_CREATE_TODO_FAILED :
            return {...state, isPending: false }
        case DELETE_SINGLE_TODO :
            // let tmp = []
            let test = state.todos.filter(todo => todo.id !== action.payload.id)
            // state.todos.forEach(todo => todo.id !== action.payload.id ? tmp.push(todo) : null)
            return {...state, todos:test}
        default:
            return state
    }
}