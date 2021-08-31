import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../stores/rootStore'
import classnames from 'classnames'
import Editing from './editing'

function TodoList () {
  const { todoListStore } = useRootStore()
  const { removeTodo } = todoListStore

  return (
    <ul className="todo-list">
      {
        todoListStore.filterTodo.map(todo => {
          return (
            <li key={todo.id} className={ classnames({
              completed: todo.completed,
              editing: todo.isEdit
            })}>
              <div className="view">
                <input
                  checked={todo.completed}
                  onChange={todo.toggle}
                  className="toggle"
                  type="checkbox" />
                <label onDoubleClick={todo.modifyTodoIsEdit}>{todo.title}</label>
                <button className="destroy" onClick={() => removeTodo(todo.id)}></button>
              </div>
              <Editing todo={todo} />
            </li>
          )
        })
      }
    </ul>
  )
}

export default observer(TodoList)
