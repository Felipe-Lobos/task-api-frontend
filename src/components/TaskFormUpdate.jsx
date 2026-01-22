import { Controller } from "react-hook-form";
import { Input } from "./ui/input.jsx";
import { Textarea } from "./ui/textarea.jsx";
import { Button } from "./ui/button.jsx";
import { useTaskForm } from "../hooks/useTasksForm.js";
import { Check, Loader2, X } from "lucide-react";

function TaskFormUpdate({task, closeEdit}) {
  const {
    onSubmit,
    control,
    isPendingMutation,
    formState: { errors },
  } = useTaskForm({initalTaskData: task, onSuccess:closeEdit});

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <Controller
          name="title"
          control={control}
          rules={{ required: "El titulo es obligatorio" }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Titulo"
              disabled={isPendingMutation}
            />
          )}
        />
        {errors.title && (
          <p className="text-sm text-destructive mt-1">
            {errors.title.message}
          </p>
        )}
      </div>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Textarea
            {...field}
            placeholder="Descripcion"
            rows={2}
            disabled={isPendingMutation}
          />
        )}
      />
      <div className="flex gap-2">
        <Button type="submit" size="sm" disabled={isPendingMutation}>
          {isPendingMutation ? (
            <Loader2 className="mr-1 h-4 w-4 animate-spin" />
          ) : (
            <Check className="mr-1 h-4 w-4" />
          )}
          Guardar
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={closeEdit}
          disabled={isPendingMutation}
        >
          <X className="mr-1 h-4 w-4" />
          Cancelar
        </Button>
      </div>
    </form>
  );
}

export default TaskFormUpdate;
