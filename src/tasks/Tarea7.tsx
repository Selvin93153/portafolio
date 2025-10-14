// src/tasks/Tarea7.tsx
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Tarea7() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#f4f6f8", py: 6 }}>
      <Container maxWidth="md">
        {/* Título principal */}
        <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
          🧪 Tarea 7 – PRUEBAS UNITARIAS
        </Typography>

        {/* Subtítulo 1 */}
        <Typography variant="h5" fontWeight="bold" align="center" gutterBottom sx={{ mt: 4 }}>
          CAPTURAS DE PANTALLA DE LA EJECUCIÓN DE PRUEBAS UNITARIAS
        </Typography>

        {/* Imagen de pruebas unitarias */}
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <img
            src="/images/pruebas-unitarias.png" // reemplaza con tu ruta real
            alt="Ejecución de pruebas unitarias"
            style={{ width: "100%", maxWidth: "700px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
          />
        </Box>

        {/* Subtítulo 2 */}
        <Typography variant="h5" fontWeight="bold" align="center" gutterBottom sx={{ mt: 6 }}>
          IMPLEMENTACIÓN EN NUBE
        </Typography>

        {/* Imágenes de la implementación */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap", my: 4 }}>
          <img
            src="/images/nube1.png" //  reemplaza con tus imágenes reales
            alt="Implementación en la nube 1"
            style={{ width: "100%", maxWidth: "400px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
          />
          <img
            src="/images/nube2.png"
            alt="Implementación en la nube 2"
            style={{ width: "100%", maxWidth: "400px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
          />
        </Box>

        {/* Enlaces */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            🔗 ENLACE DE REPOSITORIO
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            href="https://github.com/Selvin93153/pruebas_unitarias.git"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mb: 3 }}
          >
            Ver en GitHub
          </Button>

          <Typography variant="h6" fontWeight="bold" gutterBottom>
            ☁️ ENLACE DE IMPLEMENTACIÓN
          </Typography>
          <Button
            variant="contained"
            color="success"
            href="https://pruebas-unitarias-1.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver implementación en Render
          </Button>
        </Box>

        {/* Botón volver */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Button variant="contained" color="primary" onClick={() => navigate("/")}>
            ← Volver a Inicio
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
