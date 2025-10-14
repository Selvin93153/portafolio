// src/pages/tasks/Tarea1.tsx
import {
  Button,
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function Tarea1() {
   const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: "#f4f6f8", py: 6 }}>
      <Container maxWidth="md">
        {/* Título principal */}
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          align="center"
          sx={{ color: "#1976d2" }}
        >
          📘 Aserciones en Chai
        </Typography>

        {/* Imagen del mapa conceptual */}
        <Box sx={{ textAlign: "center", my: 4 }}>
          <img
            src="/images/mapa_conceptual.png"
            alt="Mapa conceptual de Aserciones en Chai"
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          />
          <Typography variant="caption" display="block" mt={1} color="text.secondary">
            Mapa conceptual de aserciones en Chai
          </Typography>
        </Box>

        {/* Introducción */}
        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Introducción
            </Typography>
            <Typography variant="body1" paragraph>
              Las <strong>aserciones en Chai</strong> son declaraciones que permiten verificar que una condición
              sea verdadera durante una prueba de software. Si la condición es falsa, la prueba falla.
              Chai es una librería de aserciones para JavaScript usada comúnmente con frameworks como{" "}
              <strong>Mocha</strong>, y permite escribir pruebas claras y expresivas.
            </Typography>
          </CardContent>
        </Card>

        {/* ¿Para qué sirven? */}
        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              ¿Para qué sirven?
            </Typography>
            <ul style={{ marginLeft: "20px" }}>
              <li>Verificar el comportamiento esperado del código.</li>
              <li>Automatizar pruebas (<strong>TDD</strong> / <strong>BDD</strong>).</li>
              <li>Detectar errores temprano en el desarrollo.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Estilos */}
        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Estilos de Aserciones en Chai
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" color="primary">
              Estilo assert (clásico)
            </Typography>
            <Typography variant="body2" component="pre" sx={{ bgcolor: "#eee", p: 2, borderRadius: 2 }}>
              {`const assert = require('chai').assert;
assert.equal(5, 5); // Pasa
assert.typeOf('Hola', 'string'); // Pasa`}
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" color="primary" mt={2}>
              Estilo expect (más legible)
            </Typography>
            <Typography variant="body2" component="pre" sx={{ bgcolor: "#eee", p: 2, borderRadius: 2 }}>
              {`const expect = require('chai').expect;
expect(5).to.equal(5);
expect('Hola').to.be.a('string');
expect([1, 2, 3]).to.include(2);`}
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" color="primary" mt={2}>
               Estilo should (modo natural)
            </Typography>
            <Typography variant="body2" component="pre" sx={{ bgcolor: "#eee", p: 2, borderRadius: 2 }}>
              {`require('chai').should();
(10).should.be.a('number');
'abc'.should.have.lengthOf(3);`}
            </Typography>
          </CardContent>
        </Card>

        {/* Ejemplos prácticos */}
        <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Ejemplos prácticos
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" color="primary">
              Ejemplo 1: Comprobando el tipo de datos
            </Typography>
            <Typography variant="body2" component="pre" sx={{ bgcolor: "#eee", p: 2, borderRadius: 2 }}>
              {`expect(123).to.be.a('number');
expect('Texto').to.be.a('string');`}
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" color="primary" mt={2}>
              Ejemplo 2: Comparando valores
            </Typography>
            <Typography variant="body2" component="pre" sx={{ bgcolor: "#eee", p: 2, borderRadius: 2 }}>
              {`expect(2 + 2).to.equal(4);
assert.notEqual(3, 5);`}
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" color="primary" mt={2}>
              Ejemplo 3: Verificando arrays y objetos
            </Typography>
            <Typography variant="body2" component="pre" sx={{ bgcolor: "#eee", p: 2, borderRadius: 2 }}>
              {`expect([1, 2, 3]).to.include(2);
expect({ nombre: 'Juan' }).to.have.property('nombre');`}
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" color="primary" mt={2}>
              Ejemplo 4: Prueba con funciones
            </Typography>
            <Typography variant="body2" component="pre" sx={{ bgcolor: "#eee", p: 2, borderRadius: 2 }}>
              {`function sumar(a, b) {
  return a + b;
}
expect(sumar(3, 2)).to.equal(5);`}
            </Typography>
          </CardContent>
        </Card>

        {/* Conclusión */}
        <Card sx={{ borderRadius: 3, boxShadow: 3, background: "#e3f2fd" }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Conclusión
            </Typography>
            <Typography variant="body1">
              Las <strong>aserciones en Chai</strong> son clave para garantizar la calidad del código.
              Permiten validar resultados esperados de forma clara y automatizada, y sus estilos
              adaptables facilitan pruebas más naturales y expresivas.
            </Typography>
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
