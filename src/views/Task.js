import React from 'react';
import { connect } from 'react-redux';
import { Card, Fa, Button } from 'mdbreact';
import { deleteTodo, updateTodo } from '../redux/actions/todoActions';

class Task extends React.Component{
  render() {
    const { deleteTodo, updateTodo, id } = this.props;

    return (
      <Card className="d-flex flex-row align-items-center" style={{width: '50%'}}>
          <div className='h3-responsive' style={{flex: 1}}>{this.props.children}</div>
          <Button onClick={()=>deleteTodo(id)}><Fa icon='far fa-times-circle'/></Button>
          <Button onClick={()=>updateTodo(id)}><Fa icon='fas fa-edit'/></Button>
      </Card>
    )
  }
}

export default connect(
  state=>({
    todoList: state.todoList
  }),
  { deleteTodo, updateTodo }
)(Task);