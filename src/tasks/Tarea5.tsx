// src/tasks/Tarea4.tsx
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Tarea5() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#f4f6f8", py: 6 }}>
      <Container maxWidth="md">
        {/* Título principal */}
        <Typography
          variant="h3"
          fontWeight="bold"
          align="center"
          gutterBottom
        >
          📑 TIPOS DE PRUEBA – INTRODUCCIÓN
        </Typography>

        <Typography variant="body1" paragraph>
          El objetivo de este estudio es explorar y documentar herramientas esenciales
          que se utilizan ampliamente en el ámbito del aseguramiento de la calidad
          del software, específicamente en pruebas funcionales, de rendimiento y de
          seguridad. Esto permitirá comprender cómo estas herramientas contribuyen
          a mejorar la calidad general del producto.
        </Typography>
        <Typography variant="body1" paragraph>
          Las pruebas de software son fundamentales para garantizar que los sistemas
          cumplan con los requisitos definidos, respondan adecuadamente bajo diversas
          condiciones de uso, y estén protegidos frente a posibles amenazas. A través
          de pruebas estructuradas, se promueve la confiabilidad, la eficiencia
          operativa y la confianza del usuario final, elementos clave en el desarrollo
          de aplicaciones robustas y seguras.
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Pruebas funcionales" secondary="Confirman que cada funcionalidad cumple con las especificaciones definidas." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Pruebas de rendimiento" secondary="Evalúan la capacidad del software frente a cargas de trabajo reales o extremas." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Pruebas de seguridad" secondary="Identifican vulnerabilidades y evalúan la resistencia del sistema frente a ataques." />
          </ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        {/* Sección A */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          A) Pruebas Funcionales
        </Typography>
        <Typography variant="body1" paragraph>
          Consisten en verificar que el comportamiento del software corresponda
          exactamente con los requisitos establecidos, ya sean funcionales o de negocio,
          sin considerar cómo está implementado internamente.
        </Typography>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Herramientas
            </Typography>
            <ul>
              <li><b>Testim</b> (plataforma basada en IA): creación de pruebas sin código con auto-corrección.</li>
              <li><b>BrowserStack</b>: pruebas manuales y automatizadas en navegadores y dispositivos reales.</li>
              <li><b>Cypress</b>: pruebas end-to-end rápidas, interactivas y confiables.</li>
            </ul>
          </CardContent>
        </Card>

        <Typography variant="h6" gutterBottom>
          Ventajas y desventajas
        </Typography>
        <ul>
          <li><b>Testim</b>: + Creación rápida, accesible; – Costo, menos flexible que código puro.</li>
          <li><b>BrowserStack</b>: + Cobertura amplia; – Costos en la nube, latencia posible.</li>
          <li><b>Cypress</b>: + Moderno y veloz; – Limitado en navegadores antiguos.</li>
        </ul>

        <Typography variant="h6" gutterBottom>
          Aplicaciones prácticas
        </Typography>
        <ul>
          <li>Comprobación de flujos (login, compras, formularios).</li>
          <li>Pruebas regresivas tras actualizaciones.</li>
          <li>Aseguramiento de compatibilidad UI en web y móviles.</li>
        </ul>

        <Divider sx={{ my: 4 }} />

        {/* Sección B */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          B) Pruebas de Rendimiento
        </Typography>
        <Typography variant="body1" paragraph>
          Evalúan cómo se comporta el sistema bajo diferentes niveles de carga para
          garantizar estabilidad, tiempo de respuesta y escalabilidad.
        </Typography>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6">Herramientas</Typography>
            <ul>
              <li><b>Apache JMeter</b>: open-source para servicios web, APIs y BD.</li>
              <li><b>BlazeMeter</b>: en la nube, simula miles/millones de usuarios, compatible con JMeter y más.</li>
            </ul>
          </CardContent>
        </Card>

        <Typography variant="h6">Aplicaciones prácticas</Typography>
        <ul>
          <li>Medición bajo cargas normales y extremas.</li>
          <li>Pruebas sostenidas antes de despliegues.</li>
          <li>Detección de cuellos de botella.</li>
        </ul>

        <Divider sx={{ my: 4 }} />

        {/* Sección C */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          C) Pruebas de Seguridad
        </Typography>
        <Typography variant="body1" paragraph>
          Identifican vulnerabilidades en el software, como inyección SQL, XSS o
          autenticación débil.
        </Typography>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6">Herramientas</Typography>
            <ul>
              <li><b>OWASP ZAP</b>: escáner de seguridad automatizado.</li>
              <li><b>Burp Suite CE</b>: entorno interactivo para pruebas manuales.</li>
              <li><b>Testsigma</b>: pruebas funcionales de seguridad (autenticación, cifrado).</li>
            </ul>
          </CardContent>
        </Card>

        <Typography variant="h6">Aplicaciones prácticas</Typography>
        <ul>
          <li>Escaneo previo a despliegues.</li>
          <li>Pentesting manual en fases críticas.</li>
          <li>Validación de autenticación y cifrado.</li>
        </ul>

        <Divider sx={{ my: 4 }} />

        {/* Conclusión */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Conclusión
        </Typography>
        <Typography variant="body1" paragraph>
          Cada tipo de prueba aborda necesidades distintas: las funcionales validan que el
          sistema cumpla sus objetivos, las de rendimiento aseguran estabilidad bajo
          demanda, y las de seguridad protegen frente a amenazas. Elegir las herramientas
          adecuadas garantiza calidad y éxito del software.
        </Typography>

        {/* Recomendaciones */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Recomendaciones
        </Typography>
        <ul>
          <li><b>Funcionales</b>: Testim para agilidad sin código, Cypress o Selenium para mayor personalización.</li>
          <li><b>Rendimiento</b>: JMeter para evaluaciones generales, k6 o Gatling en CI/CD.</li>
          <li><b>Seguridad</b>: OWASP ZAP como defensa inicial, Burp Suite para análisis profundo.</li>
        </ul>

        {/* Bibliografía */}
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Bibliografía
        </Typography>
        <ul>
          <li>Apache Software Foundation. (2025). Apache JMeter. https://jmeter.apache.org/</li>
          <li>Atlassian. (2025). Guía de pruebas funcionales. https://www.atlassian.com/es/continuous-delivery/software-testing/types-of-software-testing#functional-testing</li>
          <li>BrowserStack. (2025). Functional Testing. https://www.browserstack.com/guide/functional-testing</li>
          <li>BrowserStack. (2025). Performance Testing Tools. https://www.browserstack.com/guide/performance-testing-tools</li>
          <li>Cypress Technologies. (2025). Cypress Docs. https://docs.cypress.io/</li>
        </ul>

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
