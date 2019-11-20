import React from 'react';
import { connect } from 'react-redux'
import { requestTodos } from '../action/todo'
import Card from './Card'

class Content extends React.Component {

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
      <Card todos={todos} />
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
