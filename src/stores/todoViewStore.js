import { action, makeObservable, observable } from 'mobx'

class todoViewStore {
  constructor (todo) {
    this.title = todo.title
    this.id = todo.id
    this.completed = todo.completed || false
    this.isEdit = false
    makeObservable(this, {
      completed: observable,
      id: observable,
      isEdit: observable,
      // toggle: action
      toggle: action.bound,
      modifyTodoIsEdit: action.bound,
      modifyTodoTitle: action.bound
    })
  }

  toggle () {
    this.completed = !this.completed
  }

  modifyTodoIsEdit () {
    this.isEdit = !this.isEdit
  }

  modifyTodoTitle (title) {
    this.title = title
    this.modifyTodoIsEdit()
  }
}

export default todoViewStore
