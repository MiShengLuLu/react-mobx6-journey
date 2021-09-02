import { createContext, useContext } from 'react'
import ListStore from './ListStore'

export default class RootStore {
  constructor () {
    this.listStore = new ListStore()
  }
}

const rootStoreContext = createContext()

export const RootStoreProvider = ({ store, children }) => {
  return (
    <rootStoreContext.Provider value={store}>
      {children}
    </rootStoreContext.Provider>
  )
}

export const useRootStore = () => useContext(rootStoreContext)