import React from 'react'
import { Card } from './ui/card.jsx'

function Task({task}) {

  return (
    <div>
        <h1>{task.title}</h1>
        <p>
            {task.description}
        </p>
        <span>{task.completed ? 'true' : 'false'}</span>
    </div>
  )
}

export default Task