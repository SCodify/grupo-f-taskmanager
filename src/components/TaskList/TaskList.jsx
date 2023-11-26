import React from "react"
import TaskItem from '../TaskItem/TaskItem'
//import './TaskList.css'

function TaskList({ tasks, setTasks }) {
  function handleDeleteTask(taskId) {
    let filteredTasks = tasks.filter(element => element.id != taskId)
    setTasks(filteredTasks)
  }

  function handleCompletedTask(taskId) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  return (
    <>
      
      {tasks.length == 0 ?
        <p className="m-5 text-center text-danger">No hay tareas</p>
        :
        tasks.map((item, index) => (
          <TaskItem
            key={index}
            taskId={item.id}
            taskName={item.name}
            taskCompleted={item.completed}
            handleDeleteTask={() => handleDeleteTask(item.id)}
            handleCompletedTask={() => handleCompletedTask(item.id)}
          />
        ))
      }
      
    </>
  )
}

export default TaskList
