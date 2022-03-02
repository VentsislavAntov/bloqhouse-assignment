import { createRouter, createWebHistory } from "vue-router";
import PropertiesView from "../views/clientA/PropertiesView.vue";
import PropertiesCheckoutView from "../views/clientA/PropertiesCheckoutView.vue";
import ProjectsView from "../views/clientB/ProjectsView.vue";
import ProjectsCheckoutView from "../views/clientB/ProjectsCheckoutView.vue";
import NotFound from "../views/NotFound.vue";
import HomeView from "../views/HomeView.vue";

// import FiltersView from "../components/FiltersView";

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
  // {
  //   path: "/properties",
  //   name: "Filters",
  //   component: FiltersView,
  // },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
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
