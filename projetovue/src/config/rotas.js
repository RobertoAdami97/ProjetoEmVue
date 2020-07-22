import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../components/home/Home";
import Cadastro from "../components/cadastro/Cadastro";
import Login from "../components/login/Login";

Vue.use(VueRouter)

const routes = [{
    name: "home",
    path: "/",
    component: Home
}, {
    name: "cadastro",
    path: "/cadastro",
    component: Cadastro
}, {
    name: "login",
    path: "/login",
    component: Login
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;