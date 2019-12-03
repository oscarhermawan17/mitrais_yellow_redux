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
    DELETE_TODO_FAILED
    } from '../constant_todo.js'

const initialStateTodos = {
    isPending: false,
    todos: [],
    error: ""
}

const sortingValue = (todos, sortingValue) => 
    (sortingValue === "asc" ? 
        todos.sort((a,b) => (a.deadline > b.deadline) ? 1 : -1) :
    sortingValue === "desc" ?
        todos.sort((a,b) => (a.deadline > b.deadline) ? -1 : 1) : [])

    
export const requestTodos = (state = initialStateTodos, action={}) =>{
    switch(action.type){
        case REQUEST_TODO_PENDING :
            return {...state, isPending:true }
        case REQUEST_TODO_SUCCESS :
            let req_tmp = action.payload.map(todo => ({...todo, deadline:new Date(todo.deadline)}))
            return {...state, todos:req_tmp, isPending: false}
        case REQUEST_TODO_FAILED :
            return {...state, error:action.payload, isPending: false}
        case POST_CREATE_TODO_PENDING :
            return {...state, isPending:false }
        case POST_CREATE_TODO_SUCCESS :
            let post_data = [...state.todos, action.payload]
            return {...state, todos:post_data, isPending: false }
        case POST_CREATE_TODO_FAILED :
            return {...state, isPending: false }
        case PUT_UPDATE_TODO_PENDING :
            return {...state, isPending:false }
        case PUT_UPDATE_TODO_SUCCESS :
            let update_data = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            return {...state, todos:update_data, isPending: false }
        case PUT_UPDATE_TODO_FAILED :
            return {...state, isPending: false }
        case DELETE_TODO_PENDING :
            return {...state, isPending:false }
        case DELETE_TODO_SUCCESS :
            let delete_data = state.todos.filter(todo => todo.id !== action.payload)
            return {...state, todos:delete_data, isPending: false }
        case DELETE_TODO_FAILED :
            return {...state, isPending: false }
        case "SORTING" :
            let sorting_done = state.todos.filter(todo => todo.done)
            let sorting_todo = state.todos.filter(todo => new Date(todo.deadline) > new Date() && !todo.done)
            let sorting_passed = state.todos.filter(todo => new Date(todo.deadline) < new Date() && !todo.done)
            if(action.payload.section === "done"){
                let tmp_sorting = sortingValue(sorting_done, action.payload.sortingValue)
                return {...state, todos:[...sorting_todo, ...sorting_passed, ...tmp_sorting]}
            } else if(action.payload.section === "todo"){
                let tmp_sorting = sortingValue(sorting_todo, action.payload.sortingValue)
                return {...state, todos:[...sorting_passed, ...sorting_done, ...tmp_sorting]}
            } else if(action.payload.section === "passed"){
                let tmp_sorting = sortingValue(sorting_passed, action.payload.sortingValue)
                return {...state, todos:[...sorting_todo, ...sorting_done, ...tmp_sorting]}
            }
            return {...state, todos:[]}
        default:
            return state
    }
}