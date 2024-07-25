import DataField from './DataField'

const TaskCard = ({ task, onClick }) => {
  return (
    <div className="task-card" onClick={onClick}>
      <div className="task-card-header">
        <h4>{task.taskName}</h4>
      </div>
      <div className="task-card-body">
        <DataField label="Due Date" value={task.dueDate} />
        <DataField label="Project" value={task.projectName} />
        <DataField label="Customer" value={task.customer} />
      </div>
    </div>
  )
}

export default TaskCard
