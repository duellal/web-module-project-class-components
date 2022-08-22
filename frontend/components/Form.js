import React from 'react'

//this allows the user to add to the todo + hide completed items or show all of the todos
export default class Form extends React.Component {
  render() {
    return (
      <div>
      <div>
        <input placeholder='Todo'/>
        <button> Submit </button>
      </div>

        <div>
          <button> Hide Completed </button>
        </div>
      </div>
    )
  }
}
