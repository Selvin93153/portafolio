import { Box, Typography, Avatar, useTheme, useMediaQuery } from '@mui/material';

export default function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(to right, #090708ff, #31b2e1ff)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      {/* Foto personal */}
      <Avatar
        alt="Foto de Selvin"
        src= "/images/perfil.jpeg" 
        sx={{
          width: isSmallScreen ? 150 : 300,
          height: isSmallScreen ? 150 : 300,
          mb: 3,
          boxShadow: 3,
          border: '4px solid white',
        }}
      />

      {/* Nombre */}
      <Typography variant={isSmallScreen ? 'h4' : 'h2'} fontWeight="bold">
        ¡Hola!  Soy Selvin
      </Typography>

      {/* Descripción */}
      <Typography
        variant={isSmallScreen ? 'body1' : 'h5'}
        mt={2}
        maxWidth="800px"
      >
        Soy estudiante de Ingeniería en Sistemas con enfoque en el desarrollo web fullstack.
        He trabajado en diversos proyectos utilizando tecnologías modernas como <strong>React</strong> y <strong>TypeScript</strong> para el frontend, y <strong>NestJS</strong> con <strong>PostgreSQL</strong> o <strong>MySQL</strong> en el backend.
        Me apasiona construir soluciones funcionales, limpias y escalables, y disfruto aprender continuamente nuevas herramientas que me permitan mejorar como desarrollador.
        Tengo experiencia colaborando en proyectos académicos y personales, aplicando buenas prácticas de programación y estructuración de código.
      </Typography>
    </Box>
  );
}
