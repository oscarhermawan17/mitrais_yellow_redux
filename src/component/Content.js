import React from 'react';
import { connect } from 'react-redux'
import { requestTodos, deleteSingleTodo, createSingleTodo, updateSingleTodo, sortingTodo } from '../action/todo'
import Card from './Card'
import Modal from './Modal'
import DateTimePicker from 'react-datetime-picker'
import moment from 'moment'

class Content extends React.Component {
  constructor(){
    super()
    this.state = {
      modal_action:"",
      form_todo:{ // FOR UPDATE AND CREATE TODO
        id:"",
        description:"",
        deadline:new Date(),
        done:true,
      },
      choose_page:"",
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
    var tmpHours = moment(new Date()).add(2, 'hours');
    return date > tmpHours
  }

  validationTodoDescription(description){
    let reg = /^(?=.{1,30}$)[0-9a-zA-Z&/.,!?@ ]+$/
    return reg.test(description)
  }
  // ADD or EDIT TODO
  popUpModalTodo(choose_page, value){
    if(choose_page === "upd"){
      console.log("masuk upd", choose_page, value)
      this.setState({form_todo:value}, () => console.log(this.state.form_todo))
    } else {
      let obj = {
        description:"",
        deadline:new Date(),
        done:false, 
      }
      this.setState({form_todo:obj})
    }
    this.setState({choose_page}, () => this.setState({modal:"modal"})) 
  }

  test(value){
    return value === "done" ? this.props.todos.filter(todo => todo.done) : 
    value === "passed" ? this.props.todos.filter(todo => new Date(todo.deadline) < new Date() && !todo.done) :
    value === "todo" ?  this.props.todos.filter(todo => new Date(todo.deadline) > new Date() && !todo.done) : []
  }

  sendPropsTodos(value, sortBy){
      return this.test(value)
  }

  // INITIALIZE TODO DATA, REQUEST FROM SERVER with this.props.onRequestTodos()
  componentDidMount(){
    this.props.onRequestTodos()
  }

  deleteSingleTodo(todo_id){
    var ask_confirm = window.confirm("Are you sure delete this Todo ?");
    if (ask_confirm === true) {
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
  createAndUpdateTodo(value){
    if(!this.validationDate(this.state.form_todo.deadline))
      alert("Please input Deadline minimum 2 hours Later")
    else if(!this.validationTodoDescription(this.state.form_todo.description))
      alert("Description incorect, maximum letter is 30 and just use a-Z 0-9 and &/.,!?@[space]")
    else{
      if(value === "upd")
        this.props.onUpdateSingleTodo(this.state.form_todo)
      else if(value === "cre")
        this.props.onCreateSingleTodo(this.state.form_todo)
      else
        alert('wrong')
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
          onChangeValueTodo={(value, target_state) => this.onChangeValueTodo(value, target_state)} create_and_update_todo={(value) => this.createAndUpdateTodo(value)}
          onChangeDate={this.onChangeDate} choose_page={this.state.choose_page}>
            <DateTimePicker onChange={this.onChangeDate} value={new Date(this.state.form_todo.deadline)}/>
        </Modal>
            
        {this.state.sections.map(section =>         
          <section key={section.title} className={section.style_wrapper}>
            <div className="coba">
              <div className={section.style_title_color}>
                <h4>{section.title}</h4>
              </div>
              <div>
                <button className="btn width_50" onClick={() => this.props.onSortingTodo({section:section.type, sortingValue:"asc"})}>Sort Asc Date</button>
                <button className="btn width_50" onClick={() => this.props.onSortingTodo({section:section.type, sortingValue:"desc"})}>Sort Desc Date</button>
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
  onUpdateSingleTodo: (todo)=>dispatch(updateSingleTodo(todo)),
  onRequestTodos:()=>dispatch(requestTodos()),
  onDeleteSingleTodo:(todo_id)=>dispatch(deleteSingleTodo(todo_id)),
  onSortingTodo:(value)=>dispatch(sortingTodo(value)),
})  

export default connect(mapStateToProps, mapDispatchToProps)(Content);
