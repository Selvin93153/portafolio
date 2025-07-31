import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

type Task = {
  id: string;
  title: string;
  content: string;
};

export default function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState<Task | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      const tasks: Task[] = JSON.parse(stored);
      const found = tasks.find(t => t.id === id);
      setTask(found || null);
    }
  }, [id]);

  if (!task) return <Typography>Tarea no encontrada</Typography>;

  return (
    <Container sx={{ py: 4 }}>
      <Button onClick={() => navigate(-1)}>← Volver</Button>
      <Typography variant="h4" gutterBottom>{task.title}</Typography>
      <Typography variant="body1" whiteSpace="pre-line">{task.content}</Typography>
    </Container>
  );
}
