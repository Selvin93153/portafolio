// src/data/tasks.tsx
import Tarea1 from "../tasks/Tarea1";
import React from "react"; 
import Tarea2 from "../tasks/Tarea2"
import Tarea3 from "../tasks/Tarea3";
import Tarea5 from "../tasks/Tarea5";
import Tarea4 from "../tasks/Tarea4";
import Tarea6 from "../tasks/Tarea6";
import Tarea7 from "../tasks/Tarea7";
import Tarea8 from "../tasks/Tarea8";
import Tarea9 from "../tasks/Tarea9";


export type Task = {
  id: string;
  title: string;
  summary: string;
 content: React.ReactNode;
};

export const tasks: Task[] = [

  {
    id: "tarea1",
    title: "ASERCIONES EN CHAI",
    summary: "Introducción a aserciones con ejemplos",
    content: <Tarea1 />,
  },
{
    id: "tarea2",
    title: "CALCULADORA UNIT TEST",
    summary: "Video explicando las pruebas unitarias en funciones de calculadora",
    content: <Tarea2 />,
  },

    {
    id: "tarea3",
    title: "ASEGURAMIENTO DE CALIDAD DE SOFTWARE",
    summary: "Investigacion de Estandares internacionales y calidad de software",
    content: <Tarea3 />,
  },
  {
    id: "tarea4",
    title: "GUIA OWASP",
    summary: "Guia dirigida a usuarios no tecnicos",
    content: <Tarea4 />,
  },

   {
    id: "tarea5",
    title: "TIPOS DE PRUEBA",
    summary: "Investigacion de Herramientas para pruebas de Software esenciales",
    content: <Tarea5 />,
  },
  {
    id: "tarea6",
    title: "TECNICAS DE PRUEBA",
    summary: "Video explicando pruebas unitarias",
    content: <Tarea6 />,
  },
  {
    id: "tarea7",
    title: "Unit test - JS/TS",
    summary: "Desarrollar una funcion en javascript o typescript con sus pruebas unitarias",
    content: <Tarea7 />,
  },
  {
    id: "tarea8",
    title: "HOJA DE TRABAJO",
    summary: "Desarrollar un ejemplo practico aplicando clases de equivalencia, analisis de valores de frontera y tabla de decisiones",
    content: <Tarea8 />,
  },
  {
    id: "tarea9",
    title: "Registro de errores",
    summary: "Usar herramienta de seguimiento de bugs de las sugeridas en clase, para registrar los bugs y realizar el seguimiento correspondiente.",
    content: <Tarea9 />,
  },

];
