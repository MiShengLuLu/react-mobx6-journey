import { observer } from 'mobx-react-lite'

function TodoList ({ todos }) {
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

export default observer(TodoList)
