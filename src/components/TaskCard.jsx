const TaskCard = ({ task, onClick }) => {
  return (
    <div className="task-card" onClick={onClick}>
      <h3>{task.taskName}</h3>
      <p>{task.dueDate}</p>
      <p>{task.projectName}</p>
      <p>{task.customer}</p>
    </div>
  )
}

export default TaskCard
