import todoListStore from './todoListStore'
import topStore from './topStore'
import { createContext, useContext } from 'react'

class RootStore {
  constructor () {
    this.todoListStore = new todoListStore()
    this.topStore = new topStore()
  }
}

const rootStoreContext = createContext()

const RootStoreProvider = ({ store, children }) => {
  return (
    <rootStoreContext.Provider value={store}>
      {children}
    </rootStoreContext.Provider>
  )
}

const useRootStore = () => {
  return useContext(rootStoreContext)
}

export default RootStore
export {
  RootStoreProvider,
  useRootStore
}
