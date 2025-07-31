import { Box, Button, Container, Typography,  Stack } from '@mui/material';
import Header from '../components/Header';
import TechCard from '../components/TechCard';
import TaskCard from '../components/TaskCard';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



type Task = {
  id: string;
  title: string;
  summary: string;
  content: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  const deleteTask = (id: string) => {
    const updated = tasks.filter(task => task.id !== id);
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

 const technologies = [
  { 
    name: 'React', 
    description: 'Biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables. La he utilizado en proyectos para crear componentes dinámicos y manejar estados de forma eficiente.',
    image: 'src/images/reac.jpeg', 
  },
  { 
    name: 'TypeScript', 
    description: 'Superset de JavaScript que añade tipado estático. Me ha permitido trabajar con mayor seguridad en proyectos React, detectando errores en tiempo de desarrollo.',
    image: 'src/images/typescript.jpeg',
  },
  { 
    name: 'JavaScript', 
    description: 'Lenguaje base del desarrollo web. Lo he utilizado para manipular el DOM, manejar eventos y construir lógicas básicas en aplicaciones frontend',
    image: 'src/images/javascript.jpeg',
  },
  { 
    name: 'C#', 
    description: 'Lenguaje moderno y versátil de Microsoft. Lo he usado en el desarrollo de aplicaciones de escritorio y en proyectos que requieren integración con bases de datos usando .NET.',
    image: 'src/images/csharp.jpeg',
  },
  { 
    name: 'MySQL', 
    description: 'Sistema de gestión de bases de datos relacional. Lo he utilizado para crear y consultar bases de datos en proyectos académicos y CRUD simples.',
    image: '/images/mysql-logo.png',
  },
  { 
    name: 'PostgreSQL', 
    description: 'Base de datos relacional avanzada y robusta. La he usado en proyectos donde se requería integridad de datos y relaciones complejas.',
    image: '/images/postgresql-logo.png',
  },
  { 
    name: 'SQL Server', 
    description: 'Plataforma de bases de datos de Microsoft. La he empleado para manejar datos, realizar consultas y crear procedimientos almacenados en entornos empresariales',
    image: '/images/sqlserver-logo.png',
  },
  { 
    name: 'Postman', 
    description: 'Herramienta para probar APIs REST. La he utilizado para enviar peticiones, verificar respuestas y depurar endpoints durante el desarrollo de aplicaciones backend.',
    image: 'src/images/postman.jpeg',
  },
];


  return (
    <Box sx={{ position: 'relative' }}>
      {/* 🟦 Botones flotantes tipo pestañas */}
      <Box
        sx={{
          position: 'fixed',
          top: '40%',
          left: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          zIndex: 999,
        }}
      >
        <Button variant="contained" onClick={() => scrollTo('info')}>Información</Button>
        <Button variant="contained" onClick={() => scrollTo('tech')}>Tecnologías</Button>
        <Button variant="contained" onClick={() => scrollTo('tasks')}>Tareas</Button>
        <Button variant="contained" onClick={() => scrollTo('projects')}>Proyectos</Button>
      </Box>

      {/* Encabezado / Información */}
      <section id="info">
        <Header />
      </section>


<section id="tech">
  <Container sx={{ py: 8 }}>
    <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
      🛠 Tecnologías
    </Typography>

    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={3}
    >
      {technologies.map((tech) => (
        <Box
          key={tech.name}
          sx={{
            flex: '1 1 calc(25% - 24px)', // 4 tarjetas por fila con gap
            minWidth: 250,
            maxWidth: 300,
          }}
        >
          <TechCard
            name={tech.name}
            description={tech.description}
            image={tech.image}  // pasamos la imagen aquí
          />
        </Box>
      ))}
    </Box>
  </Container>
</section>

      {/* Tareas / Investigaciones */}
      <section id="tasks">
        <Container sx={{ py: 8 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4">📚 Investigaciones</Typography>
            <Button variant="contained" onClick={() => navigate('/nueva-tarea')}>
              Agregar tarea
            </Button>
          </Box>
  <Stack spacing={2} mt={2}>
  {tasks.map((task) => (
    <TaskCard key={task.id} task={task} onDelete={deleteTask} />
  ))}
</Stack>


        </Container>
      </section>

      {/* Proyectos */}
      <section id="projects">
        <Container sx={{ py: 8 }}>
          <Typography variant="h4" gutterBottom>💡 Proyectos</Typography>
          <Typography>Ninguno agregado.</Typography>
        </Container>
      </section>
    </Box>
  );
}
