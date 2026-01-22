import TaskList from "./TaskList.jsx";
import TaskFormCreate from "./TaskFormCreate.jsx";

function TaskPage() {
  return (
    <>
      <TaskFormCreate />
      <TaskList />
    </>
  );
}

export default TaskPage;
