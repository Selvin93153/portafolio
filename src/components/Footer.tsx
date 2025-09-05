import { Box, Container, Typography, Link, Stack, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #1e1e1e, #3a3a3a)", // Fondo oscuro elegante
        color: "white",
        mt: 8,
        pt: 6,
        pb: 3,
      }}
    >
      <Container>
        {/* Parte superior */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          {/* Marca / Nombre */}
          <Box>
            <Typography variant="h6" fontWeight="bold">
              🚀 Mi Portafolio
            </Typography>
            <Typography variant="body2" color="gray">
              Mostrando mis habilidades y proyectos con estilo.
            </Typography>
          </Box>

          {/* Enlaces rápidos */}
          <Stack direction="row" spacing={4}>
            <Link href="#info" underline="hover" color="inherit">
              Información
            </Link>
            <Link href="#tasks" underline="hover" color="inherit">
              Tareas
            </Link>
            <Link href="#projects" underline="hover" color="inherit">
              Proyectos
            </Link>
            <Link href="#contact" underline="hover" color="inherit">
              Contacto
            </Link>
          </Stack>

          {/* Redes sociales */}
          <Stack direction="row" spacing={3}>
            <Link
              href="https://github.com/Selvin93153"
              target="_blank"
              rel="noopener"
              underline="none"
              color="inherit"
              sx={{ fontSize: "20px" }}
            >
              🐙
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener"
              underline="none"
              color="inherit"
              sx={{ fontSize: "20px" }}
            >
              💼
            </Link>
            <Link
              href="mailto:selvin.franco@outlook.com"
              underline="none"
              color="inherit"
              sx={{ fontSize: "20px" }}
            >
              📧
            </Link>
          </Stack>
        </Stack>

        {/* Separador */}
        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />

        {/* Derechos reservados */}
        <Typography variant="body2" color="gray" align="center">
          © {new Date().getFullYear()} Mi Portafolio. Todos los derechos
          reservados.
        </Typography>
      </Container>
    </Box>
  );
}
