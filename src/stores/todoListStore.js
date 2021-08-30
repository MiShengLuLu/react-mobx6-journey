import todoViewStore from './todoViewStore'

class todoListStore {
  todos = []
  constructor (todos) {
    if (todos) this.todos = todos
  }
  addTodo (title) {
    this.todos.push(new todoViewStore(title))
  }
}

export default todoListStore
