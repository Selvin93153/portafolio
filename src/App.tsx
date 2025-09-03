// src/App.tsx
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TaskDetail from './pages/TaskDetails';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tarea/:id" element={<TaskDetail />} />
    </Routes>
  );
}
