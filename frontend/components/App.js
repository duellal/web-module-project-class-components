import React from 'react'

import Form from './Form'
import TodoList from './TodoList'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }



  render() {
    return (
      <div>
        <div>
          Todos:
          <TodoList todo={this.state}/>
        </div>
        <div>
          <Form />
        </div>
      </div>
    )
  }
}
