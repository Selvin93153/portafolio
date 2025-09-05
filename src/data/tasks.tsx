// src/data/tasks.tsx
import Tarea1 from "../tasks/Tarea1";
import React from "react"; // Asegúrate de importar React
import Tarea2 from "../tasks/Tarea2";


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
  // Puedes agregar más tareas aquí siguiendo el mismo patrón
];
