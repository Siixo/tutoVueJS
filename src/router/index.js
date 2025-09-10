import { createMemoryHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Exercices from "../views/Exercices.vue";
import Cours from "../views/Cours.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  {path: "/exercices", component: Exercices},
  {path: "/cours", component: Cours }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
