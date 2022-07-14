require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './Router/router.js'
import User from "./Helpers/User.js"
import AppStorage from "./Helpers/AppStorage.js"

Vue.use(Vuetify)

window.User = User
window.AppStorage = AppStorage

Vue.component('AppHome', require('./components/AppHome.vue').default)

const app = new Vue({
    router,
    vuetify: new Vuetify()
}).$mount('#app');
