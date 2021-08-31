import { useState } from 'react'
import { useRootStore } from '../../stores/rootStore'

function TodoHeader () {
  const [title, setTitle] = useState('')
  const { todoListStore } = useRootStore()
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={event => setTitle(event.target.value)}
        onKeyUp={event => {
          if (event.key === 'Enter') {
            todoListStore.addTodo(title)
            setTitle('')
          }
        }}
      />
    </header>
  )
}

export default TodoHeader
