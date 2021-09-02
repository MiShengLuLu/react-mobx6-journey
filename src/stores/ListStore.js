import { action, makeObservable, observable, runInAction, computed } from 'mobx'
import ItemStore from './ItemStore'

class ListStore {
  constructor () {
    this.buttonText = '摘苹果'
    this.isPicking = false
    this.list = []
    this.eatList = [] // 吃掉的苹果
    makeObservable(this, {
      buttonText: observable,
      isPicking: observable,
      list: observable,
      pickApple: action.bound,
      eatApple: action.bound,
      caculateTotal: computed,
      eatList: observable,
      eatCaculateTotal: computed
    })
  }

  async pickApple () {
    // const weight = Math.ceil(Math.random() * 10)
    this.isPicking = true
    this.buttonText = '正在采摘...'
    await setTimeout(() => {
      runInAction(() => {
        this.list.push(new ItemStore({
          id: this.createId(),
          weight: 200 + this.randomNum(1, 46)
        }))
        this.isPicking = false
        this.buttonText = '采摘'
      })
    }, 300);    
  }

  createId () {
    return this.list.reduce((id, item) => id < item.id ? item.id : id, 0) + 1
  }

  // 生成 min - max 的随机数
  randomNum (min, max) {
    return parseInt(Math.random() * (max - min + 1) + min, 10)
  }

  eatApple (id) {
    this.list.forEach((item, index) => {
      if (item.id === id) {
        this.eatList.push(item)
        this.list.splice(index, 1)
        return
      }
    })
  }

  get caculateTotal () {
    return this.list.reduce((prev, next) => prev + next.weight, 0)
  }

  get eatCaculateTotal () {
    return this.eatList.reduce((prev, next) => prev + next.weight, 0)
  }

  caculate (list) {
    if (!list.length) return 0
    return this.list.reduce((prev, next) => prev + next.weight, 0)
  }
}

export default ListStore
