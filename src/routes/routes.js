import Projects from "../components/Portfolio/Projects/Projects";
import Experience from "../components/Portfolio/Exp/Experience";
import Home from "../components/Portfolio/Home/Home";
import Skills from "../components/Portfolio/Skills/Skills";
import About from "../components/Portfolio/About/About";

import routes from "../utils/constant";

export const publicRoutes = [
  { id: 1, path: routes.HOME, component: Home },
  { id: 2, path: routes.SKILLS, component: Skills },
  { id: 3, path: routes.EXPERIENCE, component: Experience },
  { id: 4, path: routes.PROJECTS, component: Projects },
  { id: 5, path: routes.ABOUT, component: About },
];

export const privateRoutes = [];
