import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../stores/rootStore';
import './style.scss'

function List() {
  const { listStore } = useRootStore()
  const { list, eatApple } = listStore

  return (
    <div className="appleList">
      {
        list.length
          ? list.map(item => (
            <div className="appleItem" key={item.id}>
              <div className="apple"><img src={require('../../images/apple.png')} alt="" /></div>
              <div className="info">
                <div className="name">红苹果 - {item.id}号</div>
                <div className="weight">{item.weight}克</div>
              </div>
              <div className="btn-div">
                <button onClick={() => eatApple(item.id)}> 吃掉 </button>
              </div>
            </div>
          ))
          : <div className="empty-tip" key="empty">苹果篮子空空如也</div>
      }
    </div>
  )
}

export default observer(List)