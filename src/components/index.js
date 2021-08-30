import TodoHeader from './todoHeader'
import TodoList from './todoList'
import TodoExtra from './todoExtra'
import { observer } from 'mobx-react-lite'

function App ({ store }) {
  return (
    <section className="todoapp">
      <TodoHeader addTodo={title => store.addTodo(title)} />
      <TodoList todos={store.todos} />
      <TodoExtra />
    </section>
  )
}

export default observer(App);
