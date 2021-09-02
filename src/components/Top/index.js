import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../stores/rootStore'

function Top() {
  const { listStore } = useRootStore()
  const { list, caculateTotal, eatList, eatCaculateTotal } = listStore
  return (
    <div className="stats">
      <div className="section">
        <div className="head">当前</div>
        <div className="content">{list.length}个苹果，{caculateTotal}克</div>
      </div>
      <div className="section">
        <div className="head">已吃掉</div>
        <div className="content">{eatList.length}个苹果，{eatCaculateTotal}克</div>
      </div>
    </div>
  )
}

export default observer(Top)
