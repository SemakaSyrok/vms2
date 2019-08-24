import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/Login";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Project from "../pages/Project";
import Benefit from "../pages/Benefit";
import Bonuses from "../pages/Bonuses";
import Coasts from "../pages/Coasts";
import News from "../pages/News";
import Unswers from "../pages/Unswers";
import Works from "../pages/Works";
import Work from "../pages/Work";
import Video from "../pages/Video";

import { store } from "@/store/index";

Vue.use(Router);

export default new  Router({
    // mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/video/:path',
            name: 'video',
            component: Video,
        },
        {
            path: '/coasts',
            name: 'coasts',
            component: Coasts,//

        },
        {
            path: '/benefit',
            name: 'benefit',
            component: Benefit,//
        },
        {
            path: '/work/:id',
            name: 'work',
            component: Work,//
        },
        {
            path: '/unswers',
            name: 'unswers',
            component: Unswers,

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
            path: '/chat/:id',
            name: 'chat',
            component: Chat
        },
        {
            path: '/project',
            name: 'project',
            component: Project,
        },
        {
            path: '/',
            name: 'home',
            component: Home,
        }
    ]
});



