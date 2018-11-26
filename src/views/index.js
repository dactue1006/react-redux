import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { Input, Button } from 'mdbreact';
import { addTodo } from '../redux/actions/todoActions';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    const { todoList, addTodo } = this.props;
    console.log(this.props);
    return (
      <div>
        <input ref={this.myRef} label="Enter your task" />
        <Button onClick={()=>
          addTodo(this.myRef.current.value)}>
        Add</Button>
        { todoList.map((todo, index)=>
            <React.Fragment key={index}>
              <Task id={todo.id}>{todo.task}</Task>
            </React.Fragment>)}
      </div>
    )
  }
}

export default connect(
  state => ({
    todoList: state.todoList
  }),
  {
    addTodo
  }
)(Index);