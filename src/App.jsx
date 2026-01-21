import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button.jsx";
import { useTasks } from "./hooks/useTasks.js";
import Task from "./components/Task.jsx";
import TaskFormBasico from "./components/TaskFormBasico.jsx";

function App() {
  const { tasks, isLoading } = useTasks();
  console.log(!isLoading ? tasks.data : "sin tasks");

  return (
    <>
      <main className=" bg-background text-primary min-h-screen">
        <TaskFormBasico    />
        <Button >shadcn</Button>
        {isLoading ? (
          <div>cargando</div>
        ) : (
          tasks.data.map((task,index) => {
            return(<Task key={task.title + index} task={task} />);
          })
        )}
      </main>
    </>
  );
}

export default App;
