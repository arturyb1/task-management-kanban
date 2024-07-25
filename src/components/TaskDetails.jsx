import DataField from './DataField'
import StatusChip from './StatusChip'

const TaskDetails = ({ task, onClose }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="task-details">
        <div className="task-details-header">
          <div className="task-details-header-name-status">
            <h2>{task.taskName}</h2>
            <StatusChip status={task.status} />
          </div>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="task-details-content">
          <div className="task-info">
            <p className="task-details-group-header">Info</p>
            <div className="task-info-content">
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
          </div>
          <div className="task-schedule">
            <p className="task-details-group-header">Schedule</p>
            <div className="task-schedule-items">
              <DataField label="Start Date" value={task.startDate} />
              <DataField label="Due Date" value={task.dueDate} />
              <DataField label="Estimated Hours" value={task.estimatedHours} />
              <DataField label="Actual Hours" value={task.actualHours} />
            </div>
            <p className="task-details-group-header">Logs</p>
            <ul className="task-logs">
              {task.taskLogs.map((log, index) => (
                <li key={index} className="data-field">
                  <strong>{log.date}</strong>
                  <p>{log.log}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskDetails
