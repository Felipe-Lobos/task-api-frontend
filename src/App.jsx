import "./App.css";
import TaskManager from "./components/TaskManager.jsx";

function App() {
  

  return (
    <>
    <main className="dark min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-2xl font-bold text-foreground">Gestor de Tareas</h1>
        <TaskManager />
      </div>
    </main>
    </>
  );
}

export default App;
