//split TODOS from REDUCER to VIEW
export const splitTodoDonePasses = (value, todos) =>{
    return value === "done" ? todos.filter(todo => todo.done) : 
    value === "passed" ? todos.filter(todo => new Date(todo.deadline) < new Date() && !todo.done) :
    value === "todo" ?  todos.filter(todo => new Date(todo.deadline) > new Date() && !todo.done) : []
  }