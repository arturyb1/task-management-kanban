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
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
            <p>Task ID: {task.taskID}</p>
            <p>Project Name: {task.projectName}</p>
            <p>Customer Name: {task.customer}</p>
            <p>Description: {task.description}</p>
            <p>Dependencies: {task.dependencies.join(', ')}</p>
          </div>
          <div className="task-schedule">
            <h3>Schedule</h3>
            <p>Start Date: {task.startDate}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Estimated Hours: {task.estimatedHours}</p>
            <p>Actual Hours: {task.actualHours}</p>
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
