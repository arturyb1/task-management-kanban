import TaskCard from './TaskCard'

const TaskColumn = ({ status, tasks, onTaskClick }) => {
  return (
    <div className="task-column">
      <h2>{status}</h2>
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
  )
}

export default TaskColumn
