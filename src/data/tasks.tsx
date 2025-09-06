// src/data/tasks.tsx
import Tarea1 from "../tasks/Tarea1";
import React from "react"; 
import Tarea2 from "../tasks/Tarea2";
import Tarea4 from "../tasks/Tarea4";
import Tarea3 from "../tasks/Tarea3";
import Tarea5 from "../tasks/Tarea5";


export type Task = {
  id: string;
  title: string;
  summary: string;
 content: React.ReactNode;
};

export const tasks: Task[] = [

  {
    id: "tarea1",
    title: "Aserciones en Chai",
    summary: "Introducción a aserciones con ejemplos",
    content: <Tarea1 />,
  },

    {
    id: "tarea2",
    title: "Análisis crítico del aseguramiento de la calidad de software basado en estándares internacionales y buenas prácticas",
    summary: "Investigacion de Estandares internacionales y calidad de software",
    content: <Tarea2 />,
  },
  {
    id: "tarea3",
    title: "Guia OWASP",
    summary: "Guia dirigida a usuarios no tecnicos",
    content: <Tarea3 />,
  },

   {
    id: "tarea4",
    title: "Tipos de Prueba",
    summary: "Investigacion de Herramientas para pruebas de Software esenciales",
    content: <Tarea4 />,
  },
  {
    id: "tarea5",
    title: "Tecnicas de Prueba",
    summary: "Video explicando pruebas unitarias",
    content: <Tarea5 />,
  },

];
