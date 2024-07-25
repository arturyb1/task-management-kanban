import TaskCard from './TaskCard'

const TaskColumn = ({ status, tasks, onTaskClick }) => {
  return (
    <div className="task-column">
      <div className="task-column-header">
        <h3>{status}</h3>
      </div>
      <div className="task-column-body">
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <TaskCard
              key={task.taskID}
              task={task}
              onClick={() => onTaskClick(task)}
            />
          ))}
      </div>
    </div>
  )
}

export default TaskColumn
