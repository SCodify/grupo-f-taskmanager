import React, { useState, useEffect } from 'react'
import AddTaskButton from './components/AddTaskButton/AddTaskButton'
import TaskList from './components/TaskList/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("tasks")) == null) {
      localStorage.setItem("tasks", "[]")
    }

    setTasks(JSON.parse(localStorage.getItem("tasks")))
  }, [])

  function saveInLocalStorage(arr) {
    localStorage.setItem("tasks", JSON.stringify(arr))
  }

  useEffect(() => {
    saveInLocalStorage(tasks)

  }, [tasks])

  function countCompletedTasks(tasks) {
    const completedTasks = tasks.filter(task => task.completed === true)
    return completedTasks.length
  }

  return (
    <>
      <header className='bg-secondary mb-4'>
        <h6 className="text-center py-2 m-0">taskmanager grupo-f</h6>
      </header>
      <main className="container d-flex flex-column">
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
        />
      </main>
      <div className='container d-flex align-items-center justify-content-between py-2 border-top'>
        <span>Completadas: {countCompletedTasks(tasks)}/{tasks.length}</span>
        <AddTaskButton onAddTask={handleAddTask} />
      </div>
      <footer className='bg-secondary'>
        <h6 className="text-center py-2 m-0">UTN</h6>
      </footer>
    </>
  )
}

export default App
