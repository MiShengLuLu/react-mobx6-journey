import { Component } from 'react'

class addTodo extends Component {
  render () {
    return (
      <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" />
      </header>
    )
  }
}

export default addTodo
