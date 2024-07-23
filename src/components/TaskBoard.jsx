import TaskColumn from './TaskColumn'
import './TaskBoard.css'

const TaskBoard = ({ tasks }) => {
  const columns = [
    { name: 'To Do', status: 'To Do' },
    { name: 'In Progress', status: 'In Progress' },
    { name: 'Completed', status: 'Completed' }
  ]

  return (
    <div className="task-board">
      {columns.map((column) => (
        <TaskColumn
          key={column.status}
          name={column.name}
          tasks={tasks.filter((task) => task.status === column.status)}
        />
      ))}
    </div>
  )
}

export default TaskBoard
