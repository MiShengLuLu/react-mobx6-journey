import { useRootStore } from '../../stores/rootStore'
import { observer } from 'mobx-react-lite'

function TodoFooter () {
  const { todoListStore } = useRootStore()
  return (
    <footer className="footer">
      <span className="todo-count"><strong>{todoListStore.unCompletedTodoCount}</strong> item left</span>
      <ul className="filters">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
      
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default observer(TodoFooter)
