import React from 'react';
import { connect } from 'react-redux'
import { requestTodos } from '../action/todo'
import Card from './Card'

class Content extends React.Component {
  constructor(){
    super()
    this.state = {
      sections: [{
        title:"Your Todo List",
        style_wrapper:"section_1 left_float gold",
        style_title_color:"title_content kuning",
      },{
        title:"Your Done Todo",
        style_wrapper:"section_2 left_float hijau_muda",
        style_title_color:"title_content hijau",
      },{
        title:"Your Passed Todo",
        style_wrapper:"section_3 left_float biru",
        style_title_color:"title_content dodgerblue",
      }]
    }
  }

  componentDidMount(){
    this.props.onRequestTodos()
  }

  componentDidUpdate(prevProps, prevState){
    console.log('prevprops', prevProps)
    console.log('prevstated', prevState)
    console.log('props', this.props)
  }

  render(){
    const { todos, isPending } = this.props
    return isPending ? <div>loading...</div> :
    (
      <article>
        {this.state.sections.map(section =>
          <section key={section.title} className={section.style_wrapper}>
            <div className="coba">
              <div className={section.style_title_color}>
                <h4>{section.title}</h4>
              </div>
              <Card  todos={todos}/>
              <Card  todos={todos}/>
            </div>
          </section>
        )}
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
})  

export default connect(mapStateToProps, mapDispatchToProps)(Content);
