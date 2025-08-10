import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); // ahora contiene HTML
  const navigate = useNavigate();

  const handleAdd = () => {
    const summary = content.replace(/<[^>]+>/g, '').slice(0, 100) + '...'; // resumen texto plano

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
        <TextField 
          label="Título" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
        />
        <Box>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            style={{ height: '300px', marginBottom: '20px' }}
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ align: [] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image', 'table'],
                ['clean'],
              ],
            }}
          />
        </Box>
        <Button variant="contained" onClick={handleAdd}>Guardar</Button>
      </Box>
    </Container>
  );
}
