import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Fab,
  Tooltip,
} from "@mui/material";
import Header from "../components/Header";
import TaskCard from "../components/TaskCard";
import { tasks } from "../data/tasks";
import Slider from "react-slick"; // Carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";

export default function Home() {
  // Función para hacer scroll suave
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Configuración del carrusel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 4000,  //velocidad del carrusel
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, //velocidad de transicion de tarjetas
    responsive: [
      {
        breakpoint: 960, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Móviles
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ position: "relative" }}>
      {/* Header */}
      <section id="info">
        <Header />
      </section>

      {/* Tecnologías */}
      <section id="tech">
        <Box
          sx={{
            py: 8,
            background: "linear-gradient(#ffffff)",
            color: "black",
          }}
        >
          <Container>
            <Typography
              variant="h4"
              align="center"
              sx={{ mb: 6, fontWeight: "bold" }}
            >
              🛠 Tecnologías que domino
            </Typography>

            <Slider {...sliderSettings}>
              {[
                { name: "React", desc: "UI moderna y dinámica.",img: "/images/reac.jpeg"   },
                { name: "TypeScript", desc: "Tipado fuerte y seguro.",img: "/images/typescript.webp" },
                { name: "NestJS", desc: "Backend modular y escalable.", img: "/images/javascript.png" },
                { name: "PostgreSQL", desc: "Base de datos robusta.", img: "/images/postgres.png" },
                { name: "MySQL", desc: "Gestión relacional de datos.",img: "/images/mysql.png" },
                { name: "JavaScript", desc: "Lenguaje base para la web.", img: "/images/javascript.png" },
                { name: "C#", desc: "Lenguaje versátil para aplicaciones y juegos.", img: "/images/csharp.png" },
                { name: "Postman", desc: "Herramienta para probar APIs.", img: "/images/postman.jpeg" },
                { name: "SQL Server", desc: "Base de datos empresarial de Microsoft.", img: "/images/sqlserver.jpg" },
              ].map((tech) => (
                <Box key={tech.name} sx={{ px: 2 }}>
                  <Card
                    sx={{
                      textAlign: "center",
                      borderRadius: 3,
                      boxShadow: 4,
                      background: "#fafafa",
                      color: "#1a237e",
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    {/* Imagen */}
                  <CardMedia
                  component="img"
                   height="120"
                  image={tech.img}
                    alt={tech.name}
                    sx={{ objectFit: "contain", p: 2 }}
                  />
             
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        {tech.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {tech.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Container>
        </Box>
      </section>

      {/* Tareas */}
      <section id="tasks">
        <Container sx={{ py: 8 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{ mb: 4, fontWeight: "bold" }}
          >
            📚 Tareas realizadas
          </Typography>

          {tasks.length === 0 ? (
            <Typography align="center" color="text.secondary">
              Aún no hay tareas registradas.
            </Typography>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                justifyContent: "center",
              }}
            >
              {tasks.map((task) => (
                <Box
                  key={task.id}
                  sx={{
                    flex: "1 1 calc(33% - 24px)",
                    minWidth: 280,
                    maxWidth: 350,
                  }}
                >
                  <TaskCard task={task} onDelete={() => {}} />
                </Box>
              ))}
            </Box>
          )}
        </Container>
      </section>

      {/* Proyectos personales */}
      <section id="projects">
        <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
          <Container>
            <Typography
              variant="h4"
              align="center"
              sx={{ mb: 6, fontWeight: "bold" }}
            >
              💡 Proyectos personales
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 3,
              }}
            >
              {[
                {
                  name: "Portafolio Web",
                  desc: "Sitio personal construido con React + TS.",
                },
                {
                  name: "Sistema de notas",
                  desc: "CRUD académico con NestJS y PostgreSQL.",
                },
              ].map((project) => (
                <Box
                  key={project.name}
                  sx={{
                    flex: "1 1 calc(33% - 24px)",
                    minWidth: 280,
                    maxWidth: 350,
                  }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: 3,
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        {project.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        mb={2}
                      >
                        {project.desc}
                      </Typography>
                      <Button variant="contained" size="small">
                        Ver proyecto
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </section>

      {/* Botones flotantes con emojis */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          zIndex: 1000,
        }}
      >
        <Tooltip title="Información">
          <Fab color="primary" size="small" onClick={() => handleScroll("info")}>
            <span style={{ fontSize: "18px" }}>ℹ️</span>
          </Fab>
        </Tooltip>

        <Tooltip title="Tareas">
          <Fab
            color="secondary"
            size="small"
            onClick={() => handleScroll("tasks")}
          >
            <span style={{ fontSize: "18px" }}>📚</span>
          </Fab>
        </Tooltip>

        <Tooltip title="Proyectos">
          <Fab
            color="success"
            size="small"
            onClick={() => handleScroll("projects")}
          >
            <span style={{ fontSize: "18px" }}>💡</span>
          </Fab>
        </Tooltip>
      
      </Box>
        <Footer />
    </Box>
  );
}
