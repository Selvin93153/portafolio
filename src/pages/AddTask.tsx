import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleAdd = () => {
    const summary = content.slice(0, 100) + '...';
    const newTask = { id: uuidv4(), title, content, summary };

    const stored = localStorage.getItem('tasks');
    const tasks = stored ? JSON.parse(stored) : [];
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    navigate('/');
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Nueva tarea</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Título" value={title} onChange={e => setTitle(e.target.value)} />
        <TextField
          label="Contenido"
          multiline
          rows={8}
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd}>Guardar</Button>
      </Box>
    </Container>
  );
}
