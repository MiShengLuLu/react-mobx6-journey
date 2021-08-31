import TodoHeader from './todoHeader'
import TodoList from './todoList'
import TodoFooter from './todoFooter'

function App () {
  return (
    <section className="todoapp">
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </section>
  )
}

export default App;
