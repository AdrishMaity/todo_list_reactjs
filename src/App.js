import React, { Component } from 'react';
import Todos from './Todos'
import AddForm from './AddForm'


class App extends Component {
  state = {
    todos : [
      {id:1, content: 'buy some rice'},
      {id:2, content: 'read react'}
    ]
  }

  addTodo = (todo) => {
    console.log(todo)
    todo.id = Math.random();
    // "..." is called spread operator 
    let todos = [...this.state.todos, todo];
    console.log(todos);
    this.setState({
      todos: todos
    })
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo} />
        <AddForm addTodo={ this.addTodo }/>
      </div>
    );
  }
}

export default App;
