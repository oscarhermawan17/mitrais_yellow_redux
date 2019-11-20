import React from 'react';

const Card = (props) => {

    return(
        <div>{props.todos.map(todo =><div key={todo.id}>{todo.description}</div>)}</div>
    )
}
    

export default Card