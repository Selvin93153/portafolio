// src/tasks/Tarea9.tsx
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Tarea9() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#f4f6f8", py: 6 }}>
      <Container maxWidth="md">
        {/* Título principal */}
        <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
          🐞 Registro de errores
        </Typography>

        {/* Contenido descriptivo */}
        <Typography variant="body1" paragraph sx={{ mt: 4 }}>
          Utilice el documento que contiene el listado de bugs reportados y use una herramienta de seguimiento de bugs
          de las sugeridas en clase, para registrar los bugs y realizar el seguimiento correspondiente.
        </Typography>

        {/* Subtítulo - Repositorio */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 6 }}>
          Repositorio en GitHub
        </Typography>

        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Button
            variant="contained"
            color="secondary"
            href="https://github.com/Selvin93153/seguimiento-bugs2"
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
