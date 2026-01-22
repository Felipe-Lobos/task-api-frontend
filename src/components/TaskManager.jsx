import TaskList from "./TaskList.jsx";
import TaskFormCreate from "./TaskFormCreate.jsx";
import { useTasks } from "../hooks/useTasks.js";
import { Loader2 } from "lucide-react";

function TaskManager() {
  const { isLoading, isError } = useTasks();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-12 text-destructive">
        Error al cargar las tareas. Verifica la conexion con la API.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <TaskFormCreate />
      <TaskList />
    </div>
  );
}

export default TaskManager;
