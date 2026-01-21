import React, { useState } from "react";
import { Card } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";
import { useTasks } from "../hooks/useTasks.js";
import TaskFormBasico from "./TaskFormBasico.jsx";


function Task({ task }) {
  const { toggleUpdate, setToggleUpdate } = useState(false);
  const { updateTask } = useTasks();

  

  const handleToggle = async (task) => {
    try {
      await updateTask.mutateAsync({
        id: task.id,
        ...task,
        completed: !task.completed,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <Button onClick={() => handleToggle(task)}>
        {task.completed ? "true" : "false"}
      </Button>
      <Button>Actualizar</Button>
      <TaskFormBasico  key={task.id} taskData={task} />
    </div>
  );
}

export default Task;
