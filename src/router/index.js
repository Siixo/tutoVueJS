import { createMemoryHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import Exercices from "../views/Exercices.vue";
import Cours from "../views/Cours.vue";
import Contact from "../views/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/exercices", component: Exercices },
  { path: "/cours", component: Cours },
  { path: "/contact", component: Contact },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
