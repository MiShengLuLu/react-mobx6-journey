import { makeAutoObservable } from 'mobx'

class topStore {
  person = {
    name: '张三'
  }
  constructor (name) {
    makeAutoObservable(this, {}, { autoBind: true })
  }
}

export default topStore
