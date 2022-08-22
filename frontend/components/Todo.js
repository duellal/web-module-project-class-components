import React from 'react'

//This will render the todo + allow the user to either check or uncheck the todo on the list
export default class Todo extends React.Component {
  render() {
    console.log('In Todo:', this.props.todo)
    return (
      <div>
        <p>
          {this.props.todo.name}
        </p>
      </div>
    )
  }
}
