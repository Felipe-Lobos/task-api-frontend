import { useState } from "react";
import { useTasks } from "../hooks/useTasks.js";

import Task from "./Task.jsx";
import { Loader2 } from "lucide-react";

function TaskList() {
  const { tasks, isLoading } = useTasks();
  const  [editingId, setEditingId ] = useState(null);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }
  return (
    <div className="space-y-3">
      {tasks.data.length === 0 ? (
        <p className="text-center text-muted-foreground py-8">
          No hay tareas. Agrega una nueva tarea para comenzar.
        </p>
      ) : (
        tasks.data.map((task) => (
          <Task key={task.id} task={task} onEdit={()=>setEditingId(task.id)} onCancel={()=>{setEditingId(null)}} editingTask={editingId === task.id} />
        ))
      )}
    </div>
  );
}

export default TaskList;
