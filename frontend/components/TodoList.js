import React from 'react'

import Todo from './Todo'

//Renders the complete todo list
export default class TodoList extends React.Component {
  render() {
    console.log('In TodoList:', this.props.allTodos)
    return (
      <div>
        {this.props.allTodos.map(item => {
          // console.log('Mapping through items on todo list:', item)
          return(<Todo key={item.id} todo={item}/>)
        })
        }
      </div>
    )
  }
}
