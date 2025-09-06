import { Box, Container, Typography, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Tarea3() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#f4f6f8", py: 6, minHeight: "100vh" }}>
      <Container maxWidth="md">
        {/* Título principal */}
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          align="center"
          sx={{ color: "#1976d2" }}
        >
          📊 NORMA ISO/IEC 25010 y Estándares de QA
        </Typography>

        {/* Contenido completo */}
        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="body1" paragraph>
              La norma <strong>ISO/IEC 25010</strong> es la última versión del estándar internacional para la calidad de productos de software. Define un modelo de calidad compuesto por ocho características: idoneidad funcional, eficiencia de rendimiento, compatibilidad, usabilidad, fiabilidad, seguridad, mantenibilidad y portabilidad. Cada característica se subdivide en subcaracterísticas que describen aspectos específicos de la calidad. Por ejemplo, la usabilidad incluye subcaracterísticas como la facilidad de aprendizaje, la operatividad, la protección contra errores del usuario, la estética de la interfaz de usuario y la accesibilidad.
            </Typography>
            <Typography variant="body1" paragraph>
              La norma también define un modelo de calidad en uso compuesto por cinco características: eficacia, eficiencia, satisfacción, ausencia de riesgos y cobertura del contexto. Estas características reflejan el grado en que el producto de software satisface los objetivos y necesidades del usuario en un contexto de uso específico.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Beneficios de utilizar la norma ISO/IEC 25010
            </Typography>
            <Typography variant="body1" paragraph>
              El uso de la norma ISO/IEC 25010 para el modelado de calidad puede ofrecer diversas ventajas a sus proyectos de software, como establecer un lenguaje y una comprensión comunes de la calidad entre las partes interesadas, obtener y validar requisitos de calidad, seleccionar métricas y métodos de calidad aplicables, comparar la calidad de diferentes productos o alternativas de software, y supervisar y mejorar la calidad del sistema a lo largo de su ciclo de vida. Este marco puede ayudar a garantizar que los requisitos de calidad estén alineados con los objetivos de negocio y las necesidades de los usuarios, además de demostrar el valor y el impacto de las iniciativas de calidad.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Desafíos del uso de la norma ISO/IEC 25010
            </Typography>
            <Typography variant="body1" paragraph>
              Aplicar la norma de forma personalizada y adaptada al alcance, tamaño, complejidad, dominio, tecnología, metodología y cultura de su proyecto puede resultar difícil y requerir mucho tiempo. Además, puede resultar complicado medir y cuantificar algunas de las características y subcaracterísticas de calidad. Para equilibrar y priorizar las compensaciones y dependencias entre las diferentes características de calidad, puede ser necesario un análisis de decisiones multicriterio o una técnica de puntuación ponderada. Por último, implementar y mantener un modelo de calidad integral y consistente para su sistema requiere importantes recursos e inversiones en formación, herramientas, procesos, documentación y gobernanza.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Consejos para utilizar la norma ISO/IEC 25010
            </Typography>
            <Typography variant="body1" paragraph>
              Partir de una visión y un propósito claros para su modelo de calidad. Defina el significado de la calidad para su sistema y las partes interesadas, y cuáles son los resultados y beneficios esperados de sus esfuerzos de calidad. Utilice un enfoque orientado a las partes interesadas y centrado en el usuario. Use una estructura modular y jerárquica para organizar su modelo de calidad en capas o niveles de abstracción. Aplique la norma ISO/IEC 25010 de forma flexible y refine su modelo a medida que evoluciona.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              ISO/IEC/IEEE 29119: Estándares de pruebas de software
            </Typography>
            <Typography variant="body1" paragraph>
              Define un conjunto de estándares internacionalmente acordados para pruebas de software, cubriendo procesos, documentación, técnicas y gestión de pruebas. Es aplicable a desarrolladores, ingenieros de prueba, profesionales de QA, gestores de proyectos y cualquier grupo involucrado en el ciclo de vida del software.
            </Typography>
            <Typography variant="body1" paragraph>
              Partes del estándar:
            </Typography>
            <ul style={{ marginLeft: "20px" }}>
              <li>ISO/IEC 29119-1: Definiciones y conceptos.</li>
              <li>ISO/IEC 29119-2: Procesos organizacionales de prueba.</li>
              <li>ISO/IEC 29119-3: Documentación de prueba.</li>
              <li>ISO/IEC 29119-4: Técnicas de prueba (caja negra, blanca, basada en experiencia).</li>
              <li>ISO/IEC 29119-5: Procesos de pruebas basadas en riesgo.</li>
            </ul>
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              IEEE 730: Estándar de planes de aseguramiento de calidad
            </Typography>
            <Typography variant="body1" paragraph>
              Define el proceso de aseguramiento de calidad del software mediante planes de aseguramiento de calidad (SQAP). Incluye definición de requisitos, planes de prueba, metodologías de revisión, gestión de riesgos y ciclo de vida del software.
            </Typography>
          </CardContent>
        </Card>


        {/* Imagen del mapa conceptual */}
        <Box sx={{ textAlign: "center", my: 4 }}>
            
            CUADRO COMPARATIVO DE MODELOS DE CALIDAD DE SOFTWARE
          
          <img
            src="/images/cuadro_comparativo.png"
            alt="CUADRO COMPARATIVO DE MODELOS DE CALIDAD DE SOFTWARE"
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          />
          
        </Box>


        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Roles en el aseguramiento de calidad
            </Typography>
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Tester:</strong> Ejecuta pruebas manuales o automáticas, reporta bugs, colabora con desarrollo.</li>
              <li><strong>Ingeniero de QA:</strong> Diseña procesos y estrategias de calidad, trabaja con desarrollo y gerentes.</li>
              <li><strong>Líder de QA:</strong> Coordina equipo, define qué y cómo probar, supervisa el aseguramiento desde inicio hasta entrega final.</li>
            </ul>
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3, backgroundColor: "#e3f2fd" }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Análisis crítico
            </Typography>
            <Typography variant="body1" paragraph>
              La ausencia de un proceso formal de QA puede causar errores graves, afectar a los usuarios, perder dinero o dañar la reputación. Ejemplos:
            </Typography>
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Therac-25:</strong> Sobredosis de radiación por fallo en software.</li>
              <li><strong>App bancaria hipotética:</strong> Sin pruebas de seguridad, hackers accedieron a cuentas.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Bibliografía */}
        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Bibliografía
            </Typography>
            <ul style={{ marginLeft: "20px" }}>
              <li>ISO 25010: <a href="https://iso25000.com/index.php/normas-iso-25000/iso-25010" target="_blank">https://iso25000.com/index.php/normas-iso-25000/iso-25010</a></li>
              <li>Secureframe. ISO/IEC/IEEE 29119: <a href="https://secureframe.com/es-es/frameworks-glossary/iso-iec-ieee-29119" target="_blank">https://secureframe.com/es-es/frameworks-glossary/iso-iec-ieee-29119</a></li>
              <li>Prezi: Investigación sobre IEEE 730: <a href="https://prezi.com/p/b1glwreovdbc/investigacion-sobre-el-estandar-ieee-730/" target="_blank">https://prezi.com/p/b1glwreovdbc/investigacion-sobre-el-estandar-ieee-730/</a></li>
              <li>Ruck, D. Understanding the Roles in Quality Assurance: <a href="https://about.codecov.io/blog/understanding-the-roles-in-quality-assurance/" target="_blank">https://about.codecov.io/blog/understanding-the-roles-in-quality-assurance/</a></li>
              <li>LinkedIn: Beneficios y desafíos de ISO/IEC 25010: <a href="https://www.linkedin.com/advice/1/what-benefits-challenges-using-isoiec-25010?lang=es" target="_blank">https://www.linkedin.com/advice/1/what-benefits-challenges-using-isoiec-25010?lang=es</a></li>
            </ul>
          </CardContent>
        </Card>

        {/* Botón para regresar */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button variant="contained" color="primary" onClick={() => navigate("/")}>
            ← Volver a Inicio
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
