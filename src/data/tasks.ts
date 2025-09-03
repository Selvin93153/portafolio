import type { JSX } from "react";
import LandingPage from "../tasks/LandingPage";


export type Task = {
  id: string;
  title: string;
  summary: string;
  content: JSX.Element; // ahora es JSX en vez de string
};

export const tasks: Task[] = [
  LandingPage,

];
