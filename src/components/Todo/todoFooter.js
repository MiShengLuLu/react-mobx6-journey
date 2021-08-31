import { useRootStore } from '../../stores/rootStore'
import { observer } from 'mobx-react-lite'

function TodoFooter () {
  const { todoListStore } = useRootStore()
  return (
    <footer className="footer">
      <span className="todo-count"><strong>{todoListStore.unCompletedTodoCount}</strong> item left</span>
      <ul className="filters">
        {
          ['All', 'Active', 'Completed'].map(item => (
            <li key={item}>
              <button className={item === todoListStore.condition ? 'selected' : ''} onClick={() => todoListStore.filterCondition(item)}>{item}</button>
            </li>
          ))
        }
      </ul>
      
      <button className="clear-completed" onClick={todoListStore.clearCompletedTodos}>Clear completed</button>
    </footer>
  )
}

export default observer(TodoFooter)
