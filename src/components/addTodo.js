import { Component } from 'react'

class addTodo extends Component {
  render () {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" />
      </header>
    )
  }
}

export default addTodo
