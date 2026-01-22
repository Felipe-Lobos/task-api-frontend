import { Card, CardContent } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";
import { useTasks } from "../hooks/useTasks.js";
import { Checkbox } from "./ui/checkbox.jsx";
import TaskFormUpdate from "./TaskFormUpdate.jsx";

import { Loader2, Pencil, Trash2 } from "lucide-react";

function Task({ task, onEdit, onCancel, editingTask = false }) {
  const { updateTask, deleteTask } = useTasks();

  const toggleCompleted = async (task) => {
    try {
      await updateTask.mutateAsync({
        id: task.id,
        title: task.title,
        description: task.description || null,
        completed: !task.completed,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask.mutateAsync(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className={task.completed ? "opacity-60" : ""}>
      <CardContent className="p-4">
        {editingTask ? (
          <TaskFormUpdate task={task} closeEdit={onCancel} />
        ) : (
          <div className="flex items-start gap-3">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleCompleted(task)}
              className="mt-1"
              disabled={updateTask.isPending}
            />
            <div className="flex-1 min-w-0">
              <h3
                className={`font-medium ${
                  task.completed ? "line-through text-muted-foreground" : ""
                }`}
              >
                {task.title}
              </h3>
              {task.description && (
                <p
                  className={`text-sm mt-1 ${
                    task.completed
                      ? "line-through text-muted-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {task.description}
                </p>
              )}
            </div>
            <div className="flex gap-1">
              <Button
                size="icon"
                variant="ghost"
                onClick={onEdit}
                disabled={updateTask.isPending || deleteTask.isPending}
              >
                <Pencil className="h-4 w-4" />
                <span className="sr-only">Editar</span>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleDeleteTask(task.id)}
                disabled={deleteTask.isPending}
              >
                {deleteTask.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="h-4 w-4 text-destructive" />
                )}
                <span className="sr-only">Eliminar</span>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Task;
