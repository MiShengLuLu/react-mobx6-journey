import { Component } from 'react'

class todoExtra extends Component {
  render () {
    return (
      <footer class="footer">
        <span class="todo-count"><strong>0</strong> item left</span>
        <ul class="filters">
          <li>
            <button class="selected">All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>
        
        <button class="clear-completed">Clear completed</button>
      </footer>
    )
  }
}

export default todoExtra
