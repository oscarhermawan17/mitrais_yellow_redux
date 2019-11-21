import React from 'react';

const Card = (props) => 
    props.todos.map(todo => 
        <div className="todo_content" key={todo.id}>
            <div>{todo.description}</div>
            <div>{todo.deadline}</div>
            <div className="manage_btn">
                <button className="btn gold">Edit</button> &nbsp;
                <button onClick={() => props.deleteSingleTodo(todo)} className="btn merah">Delete</button>
            </div>
        </div>
    )
    

export default Card