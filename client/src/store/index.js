import Vue from 'vue';
import Vuex from 'vuex';
import cameras from './modules/cameras';
import users from './modules/users';
import self from './modules/self';
import api from './modules/api';
import socket from './modules/socket';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        cameras,
        users,
        self,
        api,
        socket
    }
});