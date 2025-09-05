import { Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import { tasks } from "./data/tasks";

function TaskPage() {
  const { id } = useParams<{ id: string }>();
  const task = tasks.find((t) => t.id === id);
  if (!task) return <p>Tarea no encontrada</p>;
  return task.content;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tarea/:id" element={<TaskPage />} />
    </Routes>
  );
}
