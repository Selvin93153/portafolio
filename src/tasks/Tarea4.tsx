// src/tasks/Tarea3.tsx
import { 
  Box, 
  Container, 
  Typography, 
  Divider, 
  Button 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Tarea4() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#fafafa", py: 6 }}>
      <Container maxWidth="md">
        {/* Título principal */}
        <Typography variant="h3" fontWeight="bold" gutterBottom align="center">
          Guía práctica para mitigar las 10 principales vulnerabilidades del OWASP (2021)
        </Typography>

        <Typography variant="subtitle1" gutterBottom align="center">
          Esta guía está diseñada para ayudar a personas sin conocimientos técnicos
          a entender y prevenir los problemas de seguridad más comunes en aplicaciones web.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Vulnerabilidades */}
        {[
          {
            num: "1",
            title: "Control de Acceso Roto (Broken Access Control)",
            desc: "Cuando los usuarios pueden acceder a partes del sistema que no deberían.",
            prev: [
              "Solo permitir el acceso a lo que el usuario necesita.",
              "Usar roles (administrador, usuario normal).",
              "Nunca confiar en lo que el navegador envía (botones ocultos, enlaces).",
            ],
          },
          {
            num: "2",
            title: "Fallas Criptográficas (Cryptographic Failures)",
            desc: "Los datos importantes (como contraseñas) no están protegidos correctamente.",
            prev: [
              "Usar siempre HTTPS.",
              "Guardar contraseñas cifradas, no en texto plano.",
              "Usar sistemas de seguridad probados, no inventados.",
            ],
          },
          {
            num: "3",
            title: "Inyección (Injection)",
            desc: "Cuando se insertan comandos maliciosos en formularios o URLs.",
            prev: [
              "Validar y limpiar los datos recibidos.",
              "Nunca confiar en lo que los usuarios escriben.",
              "Usar herramientas que detecten ataques de inyección.",
            ],
          },
          {
            num: "4",
            title: "Diseño Inseguro (Insecure Design)",
            desc: "El sistema fue mal planeado desde el inicio sin considerar la seguridad.",
            prev: [
              "Planear la seguridad desde el diseño.",
              "Revisar la seguridad durante el desarrollo.",
              "Usar metodologías que incluyan controles de seguridad.",
            ],
          },
          {
            num: "5",
            title: "Configuración Incorrecta de Seguridad",
            desc: "El sistema está mal configurado, dejando puertas abiertas.",
            prev: [
              "Eliminar funciones innecesarias.",
              "Mantener software actualizado.",
              "Usar configuraciones recomendadas.",
            ],
          },
          {
            num: "6",
            title: "Componentes Vulnerables y Desactualizados",
            desc: "Uso de librerías o programas antiguos con errores conocidos.",
            prev: [
              "Actualizar librerías y componentes con frecuencia.",
              "Evitar software sin soporte.",
            ],
          },
          {
            num: "7",
            title: "Fallos de Identificación y Autenticación",
            desc: "El sistema permite suplantar usuarios.",
            prev: [
              "Usar contraseñas seguras.",
              "Habilitar verificación en dos pasos.",
              "Bloquear tras varios intentos fallidos.",
            ],
          },
          {
            num: "8",
            title: "Fallos en la Integridad de Software y Datos",
            desc: "Software o datos pueden modificarse sin permiso.",
            prev: [
              "Verificar origen de actualizaciones.",
              "Usar firmas digitales.",
              "Restringir modificaciones a usuarios autorizados.",
            ],
          },
          {
            num: "9",
            title: "Fallos en el Registro y Monitoreo",
            desc: "Los ataques no se registran ni se detectan.",
            prev: [
              "Registrar eventos clave (inicios de sesión, errores).",
              "Revisar registros periódicamente.",
              "Configurar alertas automáticas.",
            ],
          },
          {
            num: "10",
            title: "Falsificación de Peticiones del Lado del Servidor (SSRF)",
            desc: "El atacante hace que el sistema acceda a direcciones internas.",
            prev: [
              "Validar enlaces y direcciones.",
              "Restringir direcciones internas.",
              "Evitar que usuarios controlen peticiones directas.",
            ],
          },
        ].map((item) => (
          <Box key={item.num} sx={{ mb: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {item.num}. {item.title}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>¿Qué es?</strong> {item.desc}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>¿Cómo prevenirlo?</strong>
            </Typography>
            <ul>
              {item.prev.map((p, idx) => (
                <li key={idx}>
                  <Typography variant="body2">{p}</Typography>
                </li>
              ))}
            </ul>
          </Box>
        ))}

        <Divider sx={{ my: 4 }} />

        {/* Glosario */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Glosario
        </Typography>
        <ul>
          {[
            "Actualización: Nueva versión de un programa que soluciona errores y mejora la seguridad.",
            "Cifrado: Técnica para proteger datos haciéndolos ilegibles sin clave correcta.",
            "HTTPS: Protocolo seguro para proteger la información en internet.",
            "Librerías: Conjunto de funciones listas para reutilizar en programas.",
            "Roles de usuario: Permisos asignados (ej: administrador, invitado).",
            "SSRF: Ataque que manipula al sistema para conectarse a sitios internos.",
            "Validar datos: Revisar que la información ingresada sea correcta y segura.",
            "Verificación en dos pasos: Pedir dos identificaciones (ej: contraseña + código SMS).",
          ].map((g, i) => (
            <li key={i}>
              <Typography variant="body2">{g}</Typography>
            </li>
          ))}
        </ul>

        <Divider sx={{ my: 4 }} />

        {/* Planes de prueba */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Segunda Parte: Planes de prueba y casos de prueba
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>¿Qué son los Planes de Prueba?</strong> Documento que describe cómo
          se revisará que un sistema funcione correctamente.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>¿Qué son los Casos de Prueba?</strong> Situaciones específicas que
          verifican funciones del sistema. Incluyen pasos y resultados esperados.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Ejemplo de Plan de Pruebas
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>Nombre del módulo:</strong> Catálogo de productos <br />
          <strong>Objetivo:</strong> Validar creación, edición, eliminación y visualización
          de productos. <br />
          <strong>Versión:</strong> 1.0 <br />
          <strong>Responsable:</strong> Equipo de pruebas <br />
          <strong>Fecha:</strong> 5 de agosto de 2025 <br />
          <strong>Herramientas:</strong> Navegador web, sistema en ambiente de prueba
        </Typography>

        <Typography variant="body2" gutterBottom>
          <strong>Funciones a probar:</strong>
        </Typography>
        <ul>
          <li>Crear producto</li>
          <li>Editar producto</li>
          <li>Eliminar producto</li>
          <li>Visualizar productos</li>
        </ul>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
          CASOS DE PRUEBA
        </Typography>
         <Box sx={{ textAlign: "center", my: 4 }}>
          <img
            src="/images/cuadro_owasp.png"
            alt="Mapa conceptual de Aserciones en Chai"
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          />
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Glosario extra */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Glosario (Planes de prueba)
        </Typography>
        <ul>
          {[
            "Ambiente de prueba: Sistema para pruebas sin afectar datos reales.",
            "Aprobado: La prueba fue exitosa.",
            "Catálogo: Lista de productos u objetos dentro del sistema.",
            "Formulario: Pantalla para ingresar datos.",
            "Validar: Revisar que algo funcione correctamente.",
          ].map((g, i) => (
            <li key={i}>
              <Typography variant="body2">{g}</Typography>
            </li>
          ))}
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
