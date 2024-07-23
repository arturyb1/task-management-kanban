const TaskCard = ({ task, onClick }) => {
  return (
    <div className="task-card" onClick={onClick}>
      <h3>{task.taskName}</h3>
      <p>{task.projectName}</p>
    </div>
  )
}

export default TaskCard
