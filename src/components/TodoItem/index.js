import {MdDeleteForever} from 'react-icons/md'

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, onChangeTodoStatus} = props
  const {id, title, isChecked} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onChangeStatus = () => {
    onChangeTodoStatus(id)
  }

  const titleStyle = isChecked && 'strike'

  return (
    <li className="todo-list-item">
      <input
        type="checkbox"
        id={id}
        className="checkbox"
        onChange={onChangeStatus}
      />
      <div className="label-container">
        <label htmlFor={id} className={`title ${titleStyle}`}>
          {title}
        </label>
        <button type="button" className="ds-delete-btn" onClick={onDeleteTodo}>
          Delete
        </button>
        <button type="button" className="mb-delete-btn" onClick={onDeleteTodo}>
          <MdDeleteForever />
        </button>
      </div>
    </li>
  )
}

export default TodoItem
