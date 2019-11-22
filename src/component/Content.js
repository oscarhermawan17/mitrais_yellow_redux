import React from 'react';
import { connect } from 'react-redux'
import { requestTodos, deleteSingleTodo } from '../action/todo'
import Modal from './Modal'
import Card from './Card'

class Content extends React.Component {
  constructor(){
    super()
    this.state = {
      modal:"display_none modal",
      sections: [{
        type:"todo",
        title:"Your Todo List",
        style_wrapper:"section_1 left_float gold",
        style_title_color:"title_content kuning",
      },{
        type:"done",
        title:"Your Done Todo",
        style_wrapper:"section_2 left_float hijau_muda",
        style_title_color:"title_content hijau",
      },{
        type:"passed",
        title:"Your Passed Todo",
        style_wrapper:"section_3 left_float biru",
        style_title_color:"title_content dodgerblue",
      }]
    }
  }

  sendPropsTodos(value){
    return value === "done" ? this.props.todos.filter(todo => todo.done) : 
    value === "passed" ? this.props.todos.filter(todo => new Date(todo.deadline) < new Date() && !todo.done) :
    value === "todo" ?  this.props.todos.filter(todo => new Date(todo.deadline) > new Date() && !todo.done) : []
  }

  componentDidMount(){
    this.props.onRequestTodos()
    console.log('hasil ', new Date('2019-11-22T06:00:00.000Z')) // compare time
  }

  updateSingleTodo(todo){
    
  }

  deleteSingleTodo(todo_id){
    var ask_confirm = window.confirm("Are you sure delete this Todo ?");
    if (ask_confirm == true) {
      this.props.onDeleteSingleTodo(todo_id)
    }
  }

  componentDidUpdate(prevProps, prevState){
    
  }

  render(){
    const { isPending } = this.props
    return isPending ? <div>loading...</div> :
    (
      <article>
        <div>
          <button onClick={() => this.setState({modal:"modal"})}>CREATE NEW TODO</button>
        </div>
        <Modal modal={this.state.modal} cancel_modal={() => this.setState({modal:"display_none modal"})}/>
        {this.state.sections.map(section =>         
          <section key={section.title} className={section.style_wrapper}>
            <div className="coba">
              <div className={section.style_title_color}>
                <h4>{section.title}</h4>
              </div>
              <Card  deleteSingleTodo={(todo_id) => this.deleteSingleTodo(todo_id)} todos={this.sendPropsTodos(section.type)}/>
            </div>
          </section>
        )}
        <div className="clear_left"></div>
      </article>
    )
  }
}

const mapStateToProps = state => ({
    todos:state.requestTodos.todos,
    isPending:state.requestTodos.isPending,
    error: state.requestTodos.error
})

const mapDispatchToProps = dispatch => ({
  onRequestTodos:()=>dispatch(requestTodos()),
  onDeleteSingleTodo:(todo_id)=>dispatch(deleteSingleTodo(todo_id)),
})  

export default connect(mapStateToProps, mapDispatchToProps)(Content);
