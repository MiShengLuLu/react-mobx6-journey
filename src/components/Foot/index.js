import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../stores/rootStore';

function Foot() {
  const { listStore } = useRootStore()
  const { buttonText, isPicking, pickApple } = listStore
  return (
    <div className="btn-div">
      <button className={isPicking ? 'disabled' : ''} onClick={pickApple}>{buttonText}</button>
    </div>
  )
}

export default observer(Foot)