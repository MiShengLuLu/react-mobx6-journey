import { makeAutoObservable } from 'mobx';

export default class CouterStore {
  count = 10

  constructor () {
    makeAutoObservable(this)
  }

  increment () {
    this.count += 1
  }

  reset () {
    this.count = 0
  }
}