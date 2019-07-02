import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/Login";
import Cameras from "../pages/Cameras";
import Users from "../pages/Users";
import Home from "../pages/Home";
import Chats from "../pages/Chats";
import { store } from "@/store/index";

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,

        },
        {
            path: '/login',
            name: 'login',
            component: Login,

        },
        {
            path: '/cameras',
            name: 'cameras',
            component: Cameras,

        },
        {
            path: '/users',
            name: 'users',
            component: Users,

        },
        {
            path: '/chats',
            name: 'chats',
            component: Chats
        }
    ]
})
