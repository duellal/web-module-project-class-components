import React from 'react'

//this allows the user to add to the todo + hide completed items or show all of the todos
export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  handleChanges = e => {
    this.setState({ input: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    //prevents adding nothing as a todo
    if(this.state.input === ""){
      null
    }
    else(this.props.addTodo(this.state.input))

    //resets the input + placeholder text
    e.target.reset()
    this.setState({input: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div>
        <input 
        type = 'text'
        onChange={this.handleChanges} 
        placeholder='Todo'/>
        <button> Submit </button>
      </div>
      <br/>
        <div>
          <button onClick={this.props.clearTodos}> 
            Clear Completed
          </button>
        </div>
      </form>
    )
  }
}
