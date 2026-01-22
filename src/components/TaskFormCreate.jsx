import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import { Input } from "./ui/input.jsx";
import { Textarea } from "./ui/textarea.jsx";
import { Button } from "./ui/button.jsx";
import { Loader2, Plus } from "lucide-react";
import { useTaskForm } from "../hooks/useTasksForm.js";
import { Controller } from "react-hook-form";

function TaskFormCreate() {
  const {
    isLoading,
    isError,
    onSubmit,
    control,
    isPendingMutation,
    formState: { errors },
  } = useTaskForm();

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
      {/* Formulario para agregar tarea */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Nueva Tarea</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
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
                  placeholder="Descripcion (opcional)"
                  rows={2}
                  disabled={isPendingMutation}
                />
              )}
            />
            <Button
              type="submit"
              className="w-full"
              disabled={isPendingMutation}
            >
              {isPendingMutation ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Plus className="mr-2 h-4 w-4" />
              )}
              Agregar Tarea
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default TaskFormCreate;
