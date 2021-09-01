import Top from '../Top'
import List from '../List'
import Foot from '../Foot'
import './style.scss'

function App () {
  return (
    <div className="appleBusket">
      <div className="title">苹果篮子</div>
      <Top />
      <List />
      <Foot />
    </div>
  )
}

export default App