import React from 'react'

class Modal extends React.Component{
    render(){
        return (
            <div className={this.props.modal}>
                <div className="modal-content">
                <table>
                    <tbody>
                        <tr>
                            <td>Description</td>
                            <td><input type="text" value={this.props.form_todo.description} name="name" onChange={(e) => this.props.onChangeValueTodo(e.target.value, "description")} /> </td>
                        </tr> 
                        <tr>
                            <td>Deadline </td>
                            <td>{this.props.children}</td>
                        </tr>
                        {this.props.choose_page === "upd" ? 
                            <tr>                               
                                <td>Is Done ? </td>
                                <td>
                                    <input type="radio" name="done" value={false} onChange={(e) => this.props.onChangeValueTodo(false, "done")} checked={this.props.form_todo.done === false} /> Not Yet<br/>
                                    <input type="radio" name="done" value={true}  onChange={(e) => this.props.onChangeValueTodo(true, "done")} checked={this.props.form_todo.done === true}/> Done
                                </td>
                            </tr> : null }
                    </tbody>
                </table>
                    {this.props.choose_page === 'upd' ? 
                    <button onClick={() => this.props.create_and_update_todo("upd")} className="btn">Update Todo</button> : 
                    <button onClick={() => this.props.create_and_update_todo("cre")} className="btn">Create Todo</button>}
                    
                    <button onClick={this.props.cancel_modal} className="btn">Cancel</button>
                </div>
            </div>
        )
    }
}


export default Modal
