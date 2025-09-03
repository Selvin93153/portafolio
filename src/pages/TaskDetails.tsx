import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import { tasks } from '../data/tasks';

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);

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

      <Box sx={{ mt: 2 }}>{task.content}</Box>
    </Container>
  );
}
