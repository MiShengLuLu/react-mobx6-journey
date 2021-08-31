import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../stores/rootStore';

function TodoList () {
  const { todoListStore } = useRootStore()
  return (
    <ul className="todo-list">
      {
        todoListStore.todos.map(todo => {
          return (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <div>
                <input
                  checked={todo.completed}
                  onChange={todo.toggle}
                  className="toggle" type="checkbox" />
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
