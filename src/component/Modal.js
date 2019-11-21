import React from 'react'
import { connect } from 'react-redux'
import { createSingleTodo } from '../action/todo'

class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description:"",
            deadline:new Date(),
            done:false,
        }
    }

    onChangeValue(e, target_state){
        this.setState({[target_state]:e.target.value})
    }
    cancelModal(){
        this.setState({description:""}, () => this.props.cancel_modal())
    }

    createSingleTodo(){
        this.props.onCreateSingleTodo(this.state)
    }

    render(){
        return (
            <div className={this.props.modal}>
                <div className="modal-content">
                Description: <input type="text" value={this.state.description} name="name" onChange={(e) => this.onChangeValue(e, "description")} /> <br/>
                Deadline :
                <br/>
                <button onClick={() => this.createSingleTodo()}>Create Todo</button>
                <button onClick={() => this.cancelModal()}>Cancel</button>
                </div>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    onCreateSingleTodo: (todo)=>dispatch(createSingleTodo(todo))
})  

export default connect(null, mapDispatchToProps)(Modal);
