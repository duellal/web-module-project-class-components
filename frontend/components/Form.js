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
    this.props.addTodo(this.state.input)

    //resets the input to the placeholder text
    e.target.reset()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div>
        <input 
        type = 'text'
        onChange={this.handleChanges} 
        placeholder='Todo'/>
        <button 
        > Submit </button>
      </div>
      <br/>
        <div>
          <button> Hide Completed </button>
        </div>
      </form>
    )
  }
}
