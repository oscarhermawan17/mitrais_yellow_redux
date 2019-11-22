import React from 'react';

function date_fe(value){
    return `${new Date(value).getDate()}/${new Date(value).getMonth() + 1}/${new Date(value).getFullYear()} ${new Date(value).getHours()}:${new Date(value).getMinutes()}`
}

const Card = (props) => {
    return(
        props.todos.map(todo => 
            <div className="todo_content" key={todo.id}>
                <div>{todo.description}</div>
                <div>{date_fe(todo.deadline)}</div>
                <div className="manage_btn">
                    <button onClick={() => props.updateSingleTodo(todo)} className="btn gold">Edit</button> &nbsp;
                    <button onClick={() => props.deleteSingleTodo(todo.id)} className="btn merah">Delete</button>
                </div>
            </div>
    ))}
    
    

export default Card