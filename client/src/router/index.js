import Vue from 'vue'
import Router from 'vue-router'

import Login from "../pages/Login";
import Cameras from "../pages/Cameras";
import Users from "../pages/Users";
import Home from "../pages/Home";
import Chats from "../pages/Chats";
import Chat from "../pages/Chat";
import Coasts from "../pages/Coasts";
import Questions from "../pages/Questions";
import Benefit from "../pages/Benefit";
import Works from "../pages/Works";
import Work from "../pages/Work";
import News from "../pages/News";
import Bonuses from "../pages/Bonuses";

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
            path: '/works',
            name: 'works',
            component: Works,
        },
        {
            path: '/news',
            name: 'news',
            component: News,
        },
        {
            path: '/bonuses',
            name: 'bonuses',
            component: Bonuses,
        },
        {
            path: '/work/:id',
            name: 'work',
            component: Work,
        },
        {
            path: '/coasts',
            name: 'coasts',
            component: Coasts,

        },
        {
            path: '/questions',
            name: 'questions',
            component: Questions,
        },
        {
            path: '/benefit',
            name: 'benefit',
            component: Benefit,
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
        },
        {
            path: '/chat/:id',
            name: 'chat',
            component: Chat
        }
    ]
})
