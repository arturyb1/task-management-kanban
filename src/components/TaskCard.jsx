import DataField from './DataField'

const TaskCard = ({ task, onClick }) => {
  return (
    <div className="task-card" onClick={onClick}>
      <h3>{task.taskName}</h3>
      <DataField label="Due Date" value={task.dueDate} />
      <DataField label="Project" value={task.projectName} />
      <DataField label="Customer" value={task.customer} />
    </div>
  )
}

export default TaskCard
