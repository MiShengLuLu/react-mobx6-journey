class todoViewStore {
  id = Math.random()
  title = ''
  completed = false
  constructor (title) {
    this.title = title
  }
}

export default todoViewStore
