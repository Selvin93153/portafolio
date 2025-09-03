import type { Task } from "../data/tasks";

const LandingPage: Task = {
  id: "1",
  title: "Landing Page con React",
  summary: "Diseñé y desarrollé una landing page responsiva con React y Tailwind.",
  content: (
    <div>
      <p>
        Esta tarea consistió en crear una landing page totalmente responsiva usando React y Tailwind.
        Se utilizaron hooks para manejar el estado y React Router para la navegación.
      </p>
      <ul>
        <li>Diseño mobile-first</li>
        <li>Optimización de performance</li>
        <li>Uso de componentes reutilizables</li>
      </ul>
    </div>
  ),
};

export default LandingPage;
