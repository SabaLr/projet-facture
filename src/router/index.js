import Vue from "vue";
import VueRouter from "vue-router";
import Devis from "../views/Devis.vue";
import Login from "../views/Authentification/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Devis",
    component: Devis
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
