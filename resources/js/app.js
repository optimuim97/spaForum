require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './Router/router.js'

Vue.use(Vuetify)

Vue.component('AppHome', require('./components/AppHome.vue').default)

const app = new Vue({
    router,
    vuetify: new Vuetify()
}).$mount('#app');
