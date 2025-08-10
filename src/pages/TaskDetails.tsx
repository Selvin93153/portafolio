import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

type Task = {
  id: string;
  title: string;
  content: string; // HTML
};

export default function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState<Task | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const stored = localStorage.getItem('tasks');
      if (stored) {
        const tasks: Task[] = JSON.parse(stored);
        const found = tasks.find((t) => t.id === id);
        setTask(found || null);
      }
    } catch (error) {
      console.error('Error leyendo tareas desde localStorage', error);
      setTask(null);
    }
  }, [id]);

  if (!task) {
    return (
      <Container sx={{ py: 4 }}>
        <Button onClick={() => navigate(-1)}>← Volver</Button>
        <Typography variant="h6">Tarea no encontrada</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Button onClick={() => navigate(-1)}>← Volver</Button>
      <Typography variant="h4" gutterBottom>
        {task.title}
      </Typography>

      {/* Renderizamos el HTML con formato */}
      <Box
        sx={{
          mt: 2,
          p: 2,
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflowX: 'auto', // Para tablas anchas
          '& table': { borderCollapse: 'collapse', width: '100%' },
          '& th, & td': { border: '1px solid #999', padding: '8px' },
        }}
        dangerouslySetInnerHTML={{ __html: task.content || '' }}
      />
    </Container>
  );
}
