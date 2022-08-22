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
      todos: todos,
      input: ''
    }
  }

  //TodoList Component Handlers:
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

  //Form Component Handlers: 
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

  //input changes:
  handleFormChanges = e => {
    this.setState({ input: e.target.value })
  }

  //submit changes:
  handleFormSubmit = e => {
    e.preventDefault()

    //prevents adding nothing as a todo
    if(this.state.input === ""){
      null
    }
    else(this.addTodo(this.state.input))

    //resets the input + placeholder text
    e.target.reset()
    this.setState({input: ''})
  }

  //Clearing completed todos:
  clearCompletedTodos = (e) => {
    e.preventDefault()

    const newTodos = this.state.todos.filter(item => {
      return(item.completed === false)
    })

    this.setState({
      todos: newTodos
    })
  }

  
  render() {
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
          handleFormChanges={this.handleFormChanges}
          handleFormSubmit={this.handleFormSubmit}
          clearTodos={this.clearCompletedTodos}
          />
        </div>
      </div>
    )
  }
}
