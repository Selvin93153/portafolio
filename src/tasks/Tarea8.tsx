// src/tasks/Tarea8.tsx
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Tarea8() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#f4f6f8", py: 6 }}>
      <Container maxWidth="md">
        {/* Título principal */}
        <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
          📘 HOJA DE TRABAJO
        </Typography>

        {/* Clases de equivalencia y análisis de frontera */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 6 }}>
          Clases de equivalencia y Análisis de valores en la frontera
        </Typography>
        <Typography variant="body1" paragraph>
          Elabore un ejemplo práctico de clases de equivalencia y análisis de valores frontera,
          desarrolle la documentación necesaria, el código correspondiente y realice las pruebas unitarias.
        </Typography>

        {/* Tablas de decisión */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 6 }}>
          Tablas de decisión
        </Typography>
        <Typography variant="body1" paragraph>
          Elabore un ejemplo práctico de tablas de decisión. Puede utilizar cualquier enunciado de su elección,
          desarrolle el código necesario y realice las pruebas unitarias.
        </Typography>

        {/* Enlace al repositorio */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 6 }}>
          Enlace a repositorio de GitHub
        </Typography>

        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Button
            variant="contained"
            color="secondary"
            href="https://github.com/Selvin93153/validador-de-contrase-as"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver repositorio en GitHub
          </Button>
        </Box>

        {/* Botón volver */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button variant="contained" color="primary" onClick={() => navigate("/")}>
            ← Volver a Inicio
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
