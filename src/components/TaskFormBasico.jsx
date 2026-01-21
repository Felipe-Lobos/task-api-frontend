import { useTaskForm } from "../hooks/useTasksForm.js";

import React from "react";

function TaskFormBasico( {taskData = null}) {
  const {
    register,
    onSubmit,
    formState: { errors },
  } = useTaskForm(taskData);
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 bg-amber-500">
      <div>
        <input {...register("title")} placeholder="Usuario" />
        {errors.title && (
          <p className="text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div>
        <input {...register("description")} placeholder="description" />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default TaskFormBasico;
