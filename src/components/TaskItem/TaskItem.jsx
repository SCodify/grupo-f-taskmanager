import React from "react"
//import './TaskItem.css'

function TaskItem({ taskId, taskName, taskCompleted, handleDeleteTask, handleCompletedTask }) {

  return (
    <>
      <div className="mb-4 bg-body-tertiary d-flex justify-content-between border border-1 rounded p-3 gap-3">
        <p className={`overflow-y-auto w-100 ${taskCompleted && "text-decoration-line-through text-secondary-emphasis"}`} id={taskId}>{taskName}</p>
        <div className="d-flex flex-column gap-2">
          <button className="btn btn-warning" onClick={handleDeleteTask}>
            <i className="bi bi-trash3"></i>
          </button>
          <button className="btn btn-success " onClick={handleCompletedTask}>
            {
              taskCompleted ?
                <i class="bi bi-check-square"></i>
                :
                <i class="bi bi-square"></i>
            }
          </button>
        </div>
      </div>
    </>
  )
}

export default TaskItem

