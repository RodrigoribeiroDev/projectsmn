import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Tasks = () => {
    const location = useLocation();
    const submitTaks = Array.isArray(location.state?.showValue) ? location.state.showValue : [];
    const [onSubmit, setOnSubmit] = useState({
      tasks: submitTaks,
    })
  return (
    <div>
      <h1>Tarefas</h1>
      {onSubmit.taks?.map((item, index) => (
        <ul>
          <li key={index}>{item}</li>
        </ul>
      ))}

    </div>
  )
}

export default Tasks
