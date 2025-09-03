import { Box, Typography, Avatar, useTheme, useMediaQuery } from "@mui/material";

export default function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        animation: "fadeIn 2s ease-in-out",
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {/* Foto personal */}
      <Avatar
        alt="Foto de Selvin"
        src="/images/perfil.jpeg"
        sx={{
          width: isSmallScreen ? 140 : 220,
          height: isSmallScreen ? 140 : 220,
          mb: 3,
          border: "5px solid #ffffff",
          boxShadow: "0px 0px 25px rgba(255,255,255,0.3)",
          transition: "transform 0.4s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 0px 35px rgba(49,178,225,0.6)",
          },
        }}
      />

      {/* Nombre */}
      <Typography
        variant={isSmallScreen ? "h4" : "h2"}
        fontWeight="bold"
        sx={{
          background: "linear-gradient(90deg, #31b2e1, #00ffcc)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 1,
        }}
      >
        ¡Hola! Soy Selvin
      </Typography>

      {/* Subtítulo */}
      <Typography
        variant={isSmallScreen ? "body1" : "h5"}
        sx={{ color: "#e0e0e0", fontStyle: "italic", mb: 3 }}
      >
        Estudiante de Ingeniería en Sistemas | Fullstack Developer
      </Typography>

      {/* Descripción */}
      <Typography
        variant={isSmallScreen ? "body2" : "h6"}
        maxWidth="800px"
        lineHeight={1.8}
        sx={{ color: "#f5f5f5" }}
      >
        Me apasiona construir soluciones funcionales, limpias y escalables usando{" "}
        <strong>React</strong>, <strong>TypeScript</strong>, <strong>NestJS</strong>{" "}
        y bases de datos como <strong>PostgreSQL</strong> y <strong>MySQL</strong>.
        Siempre estoy en búsqueda de aprender nuevas tecnologías y aplicar buenas
        prácticas en cada proyecto en el que participo.
      </Typography>
    </Box>
  );
}
