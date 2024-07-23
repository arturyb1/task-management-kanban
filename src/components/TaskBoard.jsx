import TaskColumn from './TaskColumn'

const TaskBoard = ({ tasks, onTaskClick }) => {
  const statuses = ['To Do', 'In Progress', 'Completed'] // Adjust the statuses based on your data

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
