import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useTasks } from "./useTasks.js";

const taskSchema = z.object({
  title: z
    .string()
    .min(1, "Titulo no debe estar vacio")
    .max(100, "Titulo excede el limite de (100) caracteres"),
  description: z
    .string()
    .max(300, "Descripcion excede el limite de (300) caracteres").nullish(),
});

export const useTaskForm = ({onSuccess = null,initalTaskData = null} = {} ) => {
  const { createTask, updateTask } = useTasks();
  const form = useForm({
    resolver: zodResolver(taskSchema),
    // defaultValues: {
    //   title: "",
    //   description: "",
    // },
    values: initalTaskData || { title: "", description: "" },
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    try {
      if (initalTaskData) {
        await updateTask.mutateAsync({
          id: initalTaskData.id,
          ...data,
        });
        if(onSuccess) {onSuccess()}
      } else {
        await createTask.mutateAsync({ ...data });
        form.reset()
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
    Controller,
    // Exportamos los estados de React Query hacia la UI
    isPendingMutation: createTask.isPending || updateTask.isPending,
    serverErrors: createTask.error || updateTask.error,
  };
};
