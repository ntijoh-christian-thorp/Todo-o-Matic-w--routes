import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/home.vue";
import TodosView from "../views/todos.vue";
import CompletedView from "../views/completed.vue";

const routes = [
  { name: "home", path: "/", component: HomeView },
  { name: "todos", path: "/todos", component: TodosView },
  { name: "completed", path: "/completed", component: CompletedView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
