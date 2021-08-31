import { useEffect, useRef } from 'react'

function Editing ({ todo }) {
  const ref = useRef(null)
  useEffect(() => {
    if (todo.isEdit) {
      ref.current.focus()
    }
  }, [todo.isEdit])

  return (
    <input ref={ref} defaultValue={todo.title} className="edit" onBlur={() => todo.modifyTodoTitle(ref.current.value)} />
  )
}

export default Editing