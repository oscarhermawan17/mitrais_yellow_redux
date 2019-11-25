import React from 'react'
import DateTimePicker from 'react-datetime-picker'

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
                            <td><DateTimePicker onChange={this.props.onChangeDate} value={this.props.form_todo.deadline}/> </td>
                        </tr>
                        {/* <tr>
                            <td>Is Done ? </td>
                            <td>
                                <input type="radio" name="done" value={false} /> Not Yet<br/>
                                <input type="radio" name="done" value={true} /> Done
                            </td>
                        </tr> */}
                    </tbody>
                </table>
                
                <button onClick={this.props.create_single_todo} className="btn">Create Todo</button>
                <button onClick={this.props.cancel_modal} className="btn">Cancel</button>
                </div>
            </div>
        )
    }
}


export default Modal
