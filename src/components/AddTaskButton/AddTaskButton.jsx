import React, { useState } from 'react'
import TaskForm from '../TaskForm/TaskForm'
import './AddTaskButton.css'

function AddTaskButton({ onAddTask }) {
  const [showForm, setShowForm] = useState(false)

  const handleVisibilityForm = () => {
    setShowForm(!showForm)
  }

  return (
    <>
      <button  className="btn btn-primary" onClick={handleVisibilityForm}>
        <span className="bi bi-file-earmark-plus"></span> Agregar tarea
      </button>

      {showForm &&
        <TaskForm
          onAddTask={onAddTask}
          onCancel={() => setShowForm(false)}
        />
      }
    </>
  )
}

export default AddTaskButton
