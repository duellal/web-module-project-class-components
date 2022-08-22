import React from 'react'

import Form from './Form'
import TodoList from './TodoList'

const todos = [{
  name: 'Do dishes',
  id: 0,
  completed: false
}, 
{
  name: 'Clean room',
  id: 1, 
  completed: false
}]

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todos
    }
  }

  render() {
    console.log('In App:', this.state.todos)
    return (
      <div>
        <div>
          Todos:
          <TodoList allTodos={this.state.todos}/>
        </div>
        <div>
          <Form />
        </div>
      </div>
    )
  }
}
