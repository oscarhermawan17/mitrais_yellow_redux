import React from 'react';
import { connect } from 'react-redux'
import { requestTodos, deleteSingleTodo } from '../action/todo'
import Modal from './Modal'
import Card from './Card'
import { createSingleTodo } from '../action/todo'

class Content extends React.Component {
  constructor(){
    super()
    this.state = {
      modal_action:"",
      form_todo:{ // FOR UPDATE AND CREATE TODO
        description:"",
        deadline:new Date(),
        done:false,
      }, 
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

  validationDate(date){
    console.log('hasil ', date)
    return false
  }

  validationTodoDescription(description){
    let reg = /^(?=.{1,30}$)[0-9a-zA-Z&/.,!?@ ]+$/
    return reg.test(description)
  }

  // ADD or EDIT TODO
  popUpModalTodo(choose, value){
    if(choose === "upd"){
      this.setState({form_todo:value}, () => this.setState({modal:"modal"}))
    } else {
      let obj = {
        description:"",
        deadline:new Date(),
        done:false, 
      }
      this.setState({form_todo:obj}, () => this.setState({modal:"modal"}))
    } 
  }

  sendPropsTodos(value){
    return value === "done" ? this.props.todos.filter(todo => todo.done) : 
    value === "passed" ? this.props.todos.filter(todo => new Date(todo.deadline) < new Date() && !todo.done) :
    value === "todo" ?  this.props.todos.filter(todo => new Date(todo.deadline) > new Date() && !todo.done) : []
  }

  // INITIALIZE TODO DATA, REQUEST FROM SERVER with this.props.onRequestTodos()
  componentDidMount(){
    this.props.onRequestTodos()
  }

  deleteSingleTodo(todo_id){
    var ask_confirm = window.confirm("Are you sure delete this Todo ?");
    if (ask_confirm == true) {
      this.props.onDeleteSingleTodo(todo_id)
    }
  }

  cancelModal(){
    let obj ={
      description:"",
      deadline:new Date(),
      done:false,
    }
    this.setState({form_todo:obj}, () => this.setState({modal:"display_none modal"}))
  }


  //CREATE NEW SINGLE TODO
  createSingleTodo(){
    if(!this.validationDate(this.state.form_todo.deadline))
      alert("Please input true Deadline")
    else if(!this.validationTodoDescription(this.state.form_todo.description))
      alert("Description incorect, maximum letter is 30 and just use a-Z 0-9 and &/.,!?@[space]")
    else{
      this.props.onCreateSingleTodo(this.state.form_todo)
      this.setState({modal:"display_none modal"})
    }
    
  }

  onChangeValueTodo(value, target_state){
    let obj = {
        ...this.state.form_todo,
        [target_state]:value
    }
    this.setState({form_todo:obj})
  }

  onChangeDate = deadline => {
    let tmp = {...this.state.form_todo, deadline }
    return this.setState({ form_todo: tmp })
  }

  render(){
    const { isPending } = this.props
    return isPending ? <div>loading...</div> :
    (
      <article>
        <div>
          <button onClick={() => this.popUpModalTodo("cre")}>CREATE NEW TODO</button>
        </div>
        <Modal modal={this.state.modal} cancel_modal={() => this.cancelModal()} modal_action={this.state.modal_action} form_todo={this.state.form_todo} 
          onChangeValueTodo={(value, target_state) => this.onChangeValueTodo(value, target_state)} create_single_todo={() => this.createSingleTodo()}
          onChangeDate={this.onChangeDate}
        />
        {this.state.sections.map(section =>         
          <section key={section.title} className={section.style_wrapper}>
            <div className="coba">
              <div className={section.style_title_color}>
                <h4>{section.title}</h4>
              </div>
              <Card  deleteSingleTodo={(todo_id) => this.deleteSingleTodo(todo_id)} updateSingleTodo={(todo) => this.popUpModalTodo("upd", todo)} todos={this.sendPropsTodos(section.type)}/>
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
  onCreateSingleTodo: (todo)=>dispatch(createSingleTodo(todo)),
  onRequestTodos:()=>dispatch(requestTodos()),
  onDeleteSingleTodo:(todo_id)=>dispatch(deleteSingleTodo(todo_id)),
})  

export default connect(mapStateToProps, mapDispatchToProps)(Content);
