// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {store} from './store'


Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//     next();
// });

/* eslint-disable no-new */
let app = new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
