const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.taskName}</h3>
      <p>
        <strong>Due Date:</strong> {task.dueDate}
      </p>
      <p>
        <strong>Customer:</strong> {task.customer}
      </p>
    </div>
  )
}

export default TaskCard
