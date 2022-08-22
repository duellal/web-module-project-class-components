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

  //Crossing out an item once clicked on
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

  //Adding an item to the list:
  addTodo = (item) => {
    const newTodo = {
      name: item,
      id: this.state.todos.length, 
      completed: false
    }

    const newTodos = [...this.state.todos, newTodo]

    this.setState({
      todos: newTodos
    })
  }

  //Clearing completed todos:
  clearCompletedTodos = () => {
    const newTodos = this.state.todos.filter(item => {
      return(item.completed === false)
    })

    this.setState({
      todos: newTodos
    })
  }


  render() {
    console.log('In App:', this.state.todos)
    return (
      <div>
        <div>
          <h2>Todos:</h2>
          <TodoList 
          allTodos={this.state.todos}
          toggleTodo={this.toggleTodo}
          />
        </div>
        <div>
          <Form 
          addTodo={this.addTodo}
          allTodos={this.state.todos}
          clearTodos={this.clearCompletedTodos}
          />
        </div>
      </div>
    )
  }
}
