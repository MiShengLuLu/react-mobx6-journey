import todoViewStore from './todoViewStore'
import { action, makeObservable, observable } from 'mobx'

class todoListStore {
  todos = []
  constructor (todos) {
    if (todos) this.todos = todos
    makeObservable(this, {
      todos: observable,
      addTodo: action
    })
  }
  addTodo (title) {
    this.todos.push(new todoViewStore(title))
  }
}

export default todoListStore
