import { Component } from 'react'

class todoList extends Component {
  render () {
    const { todos } = this.props
    return (
      <ul className="todo-list">
        {
          todos.map(todo => {
            return (
              <li key={todo.id}>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{todo.title}</label>
                  <button className="destroy"></button>
                </div>
                <input className="edit" />
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default todoList
