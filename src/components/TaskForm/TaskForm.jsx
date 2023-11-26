import React, { useState } from 'react'
import './TaskForm.css'

function TaskForm({ onAddTask, onCancel }) {
  const [newTask, setNewTask] = useState('')
  const [msj, setMsj] = useState('')

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTask.trim() !== '') {
      onAddTask({
        id: new Date().getTime(),
        name: newTask,
        completed: false
      })
      onCancel()
    } else {
      setMsj('Ingrese una tarea')
    }

  }
  return (
    <>
      <div className="oncancelScreen" onClick={onCancel}></div>

      <form className="formTask z-1 d-flex flex-column bg-body-tertiary p-3 gap-3 rounded border" onSubmit={handleSubmit}>
        <input type="text"
          className='form-control'
          value={newTask}
          onChange={handleChange}
          placeholder="Nueva tarea" 
        />
        <small className='msj text-center text-danger'>{msj}</small>
        <div className='d-flex gap-2'>

          <button type="submit" className='btn btn-success'>
            Agregar tarea
          </button>
          <button type="button" className="btn btn-danger" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </>
  )
}

export default TaskForm
