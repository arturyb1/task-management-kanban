import TaskCard from './TaskCard'

const TaskColumn = ({ name, tasks }) => {
  return (
    <div className="task-column">
      <h2>{name}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.taskID} task={task} />
      ))}
    </div>
  )
}

export default TaskColumn
