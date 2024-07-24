import React, { useState } from 'react'
import TaskBoard from './components/TaskBoard'
import TaskDetails from './components/TaskDetails'
import tasks from './tasks.json'
import './App.css'

const App = () => {
  const [selectedTask, setSelectedTask] = useState(null)

  const handleTaskClick = (task) => {
    setSelectedTask(task)
  }

  const handleCloseDetails = () => {
    setSelectedTask(null)
  }

  return (
    <div className="App">
      <nav>
        <h1>My tasks</h1>
      </nav>
      <TaskBoard tasks={tasks} onTaskClick={handleTaskClick} />
      {selectedTask && (
        <TaskDetails task={selectedTask} onClose={handleCloseDetails} />
      )}
    </div>
  )
}

export default App
