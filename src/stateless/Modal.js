import React from 'react'
import PropTypes from 'prop-types';

const Modal = (props) =>
(
    <div className={props.modal}>
        <div className="modal-content">
        <table>
            <tbody>
                <tr>
                    <td>Description</td>
                    <td><input type="text" value={props.form_todo.description} name="name" onChange={(e) => props.onChangeValueTodo(e.target.value, "description")} /> </td>
                </tr> 
                <tr>
                    <td>Deadline </td>
                    <td>{props.children}</td>
                </tr>
                {props.choose_page === "upd" ? 
                    <tr>                               
                        <td>Is Done ? </td>
                        <td>
                            <input type="radio" name="done" value={false} onChange={(e) => props.onChangeValueTodo(false, "done")} checked={props.form_todo.done === false} /> Not Yet<br/>
                            <input type="radio" name="done" value={true}  onChange={(e) => props.onChangeValueTodo(true, "done")} checked={props.form_todo.done === true}/> Done
                        </td>
                    </tr> : null }
            </tbody>
        </table>
            {props.choose_page === 'upd' ? 
            <button onClick={() => props.create_and_update_todo("upd")} className="btn">Update Todo</button> : 
            <button onClick={() => props.create_and_update_todo("cre")} className="btn">Create Todo</button>} 
            <button onClick={props.cancel_modal} className="btn">Cancel</button>
        </div>
    </div>
)

Modal.propTypes = {
    form_todo: PropTypes.object,
    create_and_update_todo: PropTypes.func,
    onChangeValueTodo: PropTypes.func,
};

export default Modal
