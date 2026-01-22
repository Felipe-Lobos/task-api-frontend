import { useState } from "react";
import "./App.css";
import { useTasks } from "./hooks/useTasks.js";
import TaskPage from "./components/TaskPage.jsx";

function App() {
  const { isLoading } = useTasks();

  return (
    <>
      <main className="dark bg-background text-primary min-h-screen">
        {isLoading ? <div>cargando</div> : <TaskPage />}
      </main>
    </>
  );
}

export default App;
