import Vue from 'vue';
import Vuex from 'vuex';
import cameras from './modules/cameras';
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
        self,
        api,
        socket
    }
});