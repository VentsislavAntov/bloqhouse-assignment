import { createRouter, createWebHistory } from "vue-router";
import PropertiesView from "../views/clientA/PropertiesView.vue";
import PropertiesCheckoutView from "../views/clientA/PropertiesCheckoutView.vue";
import ProjectsView from "../views/clientB/ProjectsView.vue";
import AboutView from "../views/AboutView.vue";

import ProjectsCheckoutView from "../views/clientB/ProjectsCheckoutView.vue";
import NotFound from "../views/NotFound.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/properties",
    name: "Properties",
    component: PropertiesView,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/properties/checkout/:id",
    name: "PropertiesCheckout",
    component: PropertiesCheckoutView,
  },
  {
    path: "/projects/checkout/:id",
    name: "ProjectsCheckout",
    component: ProjectsCheckoutView,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
