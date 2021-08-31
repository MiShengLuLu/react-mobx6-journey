import { useRootStore } from '../../stores/rootStore'
import { useEffect } from 'react'
// import { autorun, reaction, runInAction } from 'mobx'
import { reaction, runInAction } from 'mobx'
import { observer } from 'mobx-react-lite'

function Top () {
  const { topStore } = useRootStore()
  useEffect(() => {
    // let person = topStore.person
    // autorun(() => {
    //   console.log(person.name)
    // })
    reaction(
      () => topStore.person.name,
      (current, previous) => {
        console.log(current, previous)
      }
    )
  })
  return (
    <div>
      <p>{topStore.person.name}</p>
      <button className="button" onClick={() => runInAction(() => topStore.person.name = '李四')}>按钮</button>
    </div>
  )
}

export default observer(Top)