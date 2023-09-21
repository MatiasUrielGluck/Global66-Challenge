import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import AllPokemonsView from "../views/AllPokemonsView.vue";
import FavoritesPokemonsView from "../views/FavoritesPokemonsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeView,
    },
    {
      path: "/all",
      name: "all",
      component: AllPokemonsView,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavoritesPokemonsView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFoundView,
    },
  ],
});

export default router;
