import TaskBoard from './components/TaskBoard'
import tasks from './tasks.json'
import './App.css'

function App() {
  return (
    <div className="App">
      <TaskBoard tasks={tasks} />
    </div>
  )
}

export default App
