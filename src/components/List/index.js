import './style.scss'

function List() {
  return (
    <div className="appleItem">
      <div className="apple"><img src={require('../../images/apple.png')} alt="" /></div>
      <div className="info">
        <div className="name">红苹果 - 号</div>
        <div className="weight">克</div>
      </div>
      <div className="btn-div">
        <button> 吃掉 </button>
      </div>
    </div>
    // <div className="empty-tip" key="empty">苹果篮子空空如也</div>
  )
}

export default List