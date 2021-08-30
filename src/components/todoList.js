import { Component } from 'react'

class todoList extends Component {
  render () {
    return (
      <ul class="todo-list">
        <li class="completed">
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label>Taste JavaScript</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" />
        </li>
        <li>
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label>Buy a unicorn</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" />
        </li>
      </ul>
    )
  }
}

export default todoList
