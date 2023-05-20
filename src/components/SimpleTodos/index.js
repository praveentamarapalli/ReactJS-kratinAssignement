import {Component} from 'react'
import {v4} from 'uuid'
import {MdTask, MdDelete, MdNoteAlt} from 'react-icons/md'
import {BsFillCalendarHeartFill} from 'react-icons/bs'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Do Morning Walk for 30 minutes',
    isChecked: false,
  },
  {
    id: 2,
    title: 'Do Yoga for 30 minutes in the morning',
    isChecked: false,
  },
  {
    id: 3,
    title: 'Medicines to be taken during the fasting',
    isChecked: false,
  },
  {
    id: 4,
    title: 'Blood test for diabetics while fasting',
    isChecked: false,
  },
  {
    id: 5,
    title: 'Sprouts and breakfast with boiled eggs',
    isChecked: false,
  },
  {
    id: 6,
    title: 'Post breakfast medicine',
    isChecked: false,
  },
  {
    id: 7,
    title: 'Blood test for diabetics after breakfast',
    isChecked: false,
  },
  {
    id: 8,
    title: 'Daily Blood Pressure check-up',
    isChecked: false,
  },
  {
    id: 9,
    title: 'Spend time with children and grand-children',
    isChecked: false,
  },
  {
    id: 10,
    title: 'Post lunch medicine',
    isChecked: false,
  },
  {
    id: 11,
    title: '30 min power nap during afternoon',
    isChecked: false,
  },
  {
    id: 12,
    title: 'Do evening walk for 30 minutes',
    isChecked: false,
  },
  {
    id: 13,
    title: 'Interact with neighbors in the evening',
    isChecked: false,
  },
  {
    id: 14,
    title: 'Nuts and Fiber content for the supper',
    isChecked: false,
  },
  {
    id: 15,
    title: 'Include fruits in the dinner',
    isChecked: false,
  },
  {
    id: 16,
    title: 'Post dinner medicine and noise free environment to sleep',
    isChecked: false,
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    newTodoInput: '',
  }

  onChangeUserInput = event => {
    this.setState({
      newTodoInput: event.target.value,
    })
  }

  onClickAddBtn = () => {
    const {newTodoInput} = this.state
    if (newTodoInput === '') {
      alert('Please enter a valid task')
    } else {
      const newTodo = {
        id: v4(),
        title: newTodoInput,
        isChecked: false,
      }

      this.setState(prevState => ({
        todosList: [...prevState.todosList, newTodo],
      }))

      this.setState({
        newTodoInput: '',
      })

      setTimeout(() => {
        // eslint-disable-next-line no-alert
        alert('Task added to the list')
      }, 500)
    }
  }

  onChangeTodoStatus = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.map(eachTodo => {
      if (eachTodo.id === id) {
        return {...eachTodo, isChecked: !eachTodo.isChecked}
      }
      return eachTodo
    })
    this.setState({
      todosList: updatedTodosList,
    })
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })

    setTimeout(() => {
      // eslint-disable-next-line no-alert
      alert('Task removed from the list')
    }, 500)
  }

  completingTodoList = () => {
    const {todosList} = this.state
    if (todosList.length === 0) {
      // eslint-disable-next-line no-alert
      setTimeout(() => {
        // eslint-disable-next-line no-alert
        alert('You did it! You have completed all tasks')
      }, 500)
    }
  }

  render() {
    const {todosList, newTodoInput} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Sunita Sharma's Todo List</h1>
        <p className="tag-line">Let's make the tasks more easy</p>
        <ul className="tutorial-container">
          <div className="tutorial-icon-container">
            <li className="list-item">Step-1: Add your todo to the list</li>
            <MdNoteAlt className="tutorial-icon" />
          </div>
          <div className="tutorial-icon-container">
            <li className="list-item">
              Step-2: Check the todo to strike it off if you have completed
            </li>
            <MdTask className="tutorial-icon" />
          </div>
          <div className="tutorial-icon-container">
            <li className="list-item">
              Step-3: Deleted the todo if you don't want to display
            </li>
            <MdDelete className="tutorial-icon" />
          </div>
          <div className="tutorial-icon-container">
            <li className="list-item">Step-4: Have a healthy life</li>
            <BsFillCalendarHeartFill className="tutorial-icon" />
          </div>
        </ul>
        <div className="todos-container">
          <div>
            <label htmlFor="newTodo" className="input-label-text">
              Add a Task to your list
            </label>
            <br />
            <input
              id="newTodo"
              placeholder="Is there anything to be completed?"
              className="input-box"
              value={newTodoInput}
              onChange={this.onChangeUserInput}
            />
            <button
              type="button"
              className="add-btn"
              onClick={this.onClickAddBtn}
            >
              Add
            </button>
          </div>
          <h1 className="todo-list-heading">To-do:</h1>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                onChangeTodoStatus={this.onChangeTodoStatus}
              />
            ))}
          </ul>
          {this.completingTodoList()}
          <div className="save-btn-position">
            <button type="button" className="add-btn">
              Save
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
