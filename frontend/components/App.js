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

  toggleTodo = (id) => {
   const newTodoList = this.state.todos.map(item => {
    if(item.id === id){
      return {
        ...item, completed: !item.completed
      }
    }
    else{
      return(item)
    }
   })

   this.setState({
    todos: newTodoList
   })
  }

  render() {
    console.log('In App:', this.state.todos)
    return (
      <div>
        <div>
          Todos:
          <TodoList 
          allTodos={this.state.todos}
          toggleTodo={this.toggleTodo}
          />
        </div>
        <div>
          <Form />
        </div>
      </div>
    )
  }
}
