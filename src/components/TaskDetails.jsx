import DataField from './DataField'

const TaskDetails = ({ task, onClose }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="task-details">
        <div className="task-details-header">
          <h2>{task.taskName}</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="task-details-content">
          <div className="task-info">
            <h3>Info</h3>
            <DataField label="Priority" value={task.priority} />
            <DataField label="Status" value={task.status} />
            <DataField label="Task ID" value={task.taskID} />
            <DataField label="Project Name" value={task.projectName} />
            <DataField label="Customer Name" value={task.customer} />
            <DataField label="Description" value={task.description} />
            <DataField
              label="Dependencies"
              value={task.dependencies.join(', ')}
            />
          </div>
          <div className="task-schedule">
            <h3>Schedule</h3>
            <DataField label="Start Date" value={task.startDate} />
            <DataField label="Due Date" value={task.dueDate} />
            <DataField label="Estimated Hours" value={task.estimatedHours} />
            <DataField label="Actual Hours" value={task.actualHours} />
            <h3>Logs</h3>
            {task.taskLogs.map((log, index) => (
              <div key={index}>
                <p>{log.date}</p>
                <p>{log.log}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskDetails
