// 使用 observer 将目标对象的属性和方法设置为 observable state 和 action
import { observer } from 'mobx-react-lite'
import './style.css'

function Couter ({store}) {
  return (
    <div className="couter">
      <p>{store.count}</p>
      <button onClick={() => store.increment()}>+1</button>
      <button onClick={() => store.reset()}>重 置</button>
    </div>
  )
}

export default observer(Couter)
