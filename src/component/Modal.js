import React from 'react'

class Modal extends React.Component{
    render(){
        return (
            <div className={this.props.modal}>
                <div className="modal-content">
                Description: <input type="text" value={this.props.form_todo.description} name="name" onChange={(e) => this.props.onChangeValueTodo(e.target.value, "description")} /> <br/>
                Deadline :
                <br/>
                <button onClick={this.props.create_single_todo}>Create Todo</button>
                <button onClick={this.props.cancel_modal}>Cancel</button>
                </div>
            </div>
        )
    }
}


export default Modal
