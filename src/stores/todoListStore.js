import todoViewStore from './todoViewStore'
import { action, computed, makeObservable, observable, runInAction } from 'mobx'
import axios from 'axios'

class todoListStore {
  todos = []
  constructor (todos) {
    if (todos) this.todos = todos
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      unCompletedTodoCount: computed
    })
    this.loadTodos()
  }

  get unCompletedTodoCount () {
    return this.todos.filter(item => !item.completed).length
  }

  async loadTodos () {
    const { data } = await axios
      .get('http://localhost:3001/todos')
      .then(res => res)
    runInAction(() => {
      data.forEach(item => this.addTodo(item.title))
    })
  }

  addTodo (title) {
    this.todos.push(new todoViewStore(title))
  }
}

export default todoListStore
