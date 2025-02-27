import React from 'react';
import { connect } from 'react-redux'
import { requestTodos, deleteSingleTodo, createSingleTodo, updateSingleTodo, sortingTodo } from '../action/todo'
import { validationDate, validationTodoDescription } from '../function/validation'
import { splitTodoDonePasses } from '../function/split_board'
import Card from '../stateless/Card'
import Modal from '../stateless/Modal'
import DateTimePicker from 'react-datetime-picker'

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

  // Create or Update TODO
  popUpModalTodo(choose_page, value){
    if(choose_page === "upd"){
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

  

  // INITIALIZE TODO DATA, REQUEST FROM SERVER with this.props.onRequestTodos()
  componentDidMount(){
    this.props.onRequestTodos()
  }


  // delete single TODO
  deleteSingleTodo(todo_id){
    var ask_confirm = window.confirm("Are you sure delete this Todo ?");
    if (ask_confirm === true) {
      this.props.onDeleteSingleTodo(todo_id)
    }
  }

  // Close Modal
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
    if(!validationTodoDescription(this.state.form_todo.description))
      alert("Description incorect, maximum letter is 10 and just use a-Z 0-9 and &/.,!?@[space]")
    else{
      if(value === "upd"){
        this.props.onUpdateSingleTodo(this.state.form_todo)
        this.setState({modal:"display_none modal"})
      }
      else if(value === "cre"){
        if(!validationDate(this.state.form_todo.deadline))
          alert("Please input Deadline minimum 2 hours Later")
        else {
          this.props.onCreateSingleTodo(this.state.form_todo)
          this.setState({modal:"display_none modal"})
        }
      }
    }
  }

  // Change Todo, (description, and done)
  onChangeValueTodo(value, target_state){
    let obj = {
        ...this.state.form_todo,
        [target_state]:value
    }
    this.setState({form_todo:obj})
  }

  // Function native from react-datetime-picker
  onChangeDate = deadline => {
    let tmp = {...this.state.form_todo, deadline }
    return this.setState({ form_todo: tmp })
  }

  render(){
    const { isPending } = this.props
    return isPending ? <div>loading...</div> :
    (
      <article>
        <div className="goto_center">
          <button className="btn" onClick={() => this.popUpModalTodo("cre")}>CREATE NEW TODO</button>
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
              <div className="goto_center">
                <button className="btn" onClick={() => this.props.onSortingTodo({section:section.type, sortingValue:"asc"})}>Sort Asc Date</button> &nbsp;
                <button className="btn" onClick={() => this.props.onSortingTodo({section:section.type, sortingValue:"desc"})}>Sort Desc Date</button>
              </div>
              <Card  deleteSingleTodo={(todo_id) => this.deleteSingleTodo(todo_id)} updateSingleTodo={(todo) => this.popUpModalTodo("upd", todo)} todos={splitTodoDonePasses(section.type, this.props.todos)}/>
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
