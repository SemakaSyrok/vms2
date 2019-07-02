import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/Login";
import Home from "../pages/Home";
import Chats from "../pages/Chats";
import { store } from "@/store/index";

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [

        {
            path: '/login',
            name: 'login',
            component: Login,

        },
        {
            path: '/chats',
            name: 'chats',
            component: Chats
        },
        {
            path: '/',
            name: 'home',
            component: Home,

        }
    ]
})
