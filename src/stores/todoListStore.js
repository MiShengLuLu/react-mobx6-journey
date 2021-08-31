import todoViewStore from './todoViewStore'
import { action, computed, makeObservable, observable, runInAction } from 'mobx'
import axios from 'axios'

class todoListStore {
  constructor () {
    this.todos = []
    this.condition = 'All'
    // if (todos) this.todos = todos
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      unCompletedTodoCount: computed,
      removeTodo: action.bound,
      condition: observable,
      filterCondition: action.bound,
      filterTodo: computed,
      clearCompletedTodos: action.bound
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
    this.todos.push(new todoViewStore({
      title,
      id: this.createId()
    }))
  }

  removeTodo (id) {
    this.todos = this.todos.filter(item => item.id !== id)
  }

  createId () {
    if (!this.todos.length) return 1
    return this.todos.reduce((id, todo) => (id < todo.id ? todo.id : id), 0) + 1
  }

  // 过滤
  filterCondition (condition) {
    this.condition = condition
  }

  get filterTodo () {
    switch (this.condition) {
      case 'Active':
        return this.todos.filter(item => !item.completed)
      case 'Completed':
        return this.todos.filter(item => item.completed)
      default:
        return this.todos
    }
  }

  // 清除
  clearCompletedTodos () {
    this.todos = this.todos.filter(item => !item.completed)
  }
}

export default todoListStore
