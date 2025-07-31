// src/App.tsx
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TaskDetail from './pages/TaskDetails';
import AddTask from './pages/AddTask';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tarea/:id" element={<TaskDetail />} />
      <Route path="/nueva-tarea" element={<AddTask />} />
    </Routes>
  );
}
