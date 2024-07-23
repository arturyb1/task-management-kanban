import TaskColumn from './TaskColumn'

const TaskBoard = ({ tasks, onTaskClick }) => {
  const statuses = ['To Do', 'In Progress', 'Completed']

  return (
    <div className="task-board">
      {statuses.map((status) => (
        <TaskColumn
          key={status}
          status={status}
          tasks={tasks}
          onTaskClick={onTaskClick}
        />
      ))}
    </div>
  )
}

export default TaskBoard
