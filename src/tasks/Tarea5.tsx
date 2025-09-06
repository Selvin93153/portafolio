// src/tasks/Tarea5.tsx
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Tarea5() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#f4f6f8", py: 6 }}>
      <Container maxWidth="md">
        {/* Título */}
        <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
          🎥 Tarea 5 – Video de Presentacion
        </Typography>

        <Typography variant="body1" paragraph align="center">
          A continuacion se presenta video explicando pruebas unitarias en Jest con cobertura del 100% de las funciones creadas..
        </Typography>

        {/* Video embebido */}
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <iframe
            src="https://drive.google.com/file/d/10vvUo3KICpaXD9mlTNOn38ksxHuZSyE_/preview"
            width="100%"
            height="480"
            allow="autoplay"
            style={{ border: 0, borderRadius: "12px" }}
          ></iframe>
        </Box>

        {/* Botón extra para abrir en Drive */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Button
            variant="contained"
            color="secondary"
            href="https://drive.google.com/file/d/10vvUo3KICpaXD9mlTNOn38ksxHuZSyE_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir en Google Drive
          </Button>
        </Box>

        {/* Botón volver */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button variant="contained" color="primary" onClick={() => navigate("/")}>
            ← Volver a Inicio
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
