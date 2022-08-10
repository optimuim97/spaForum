require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './Router/router.js'
import User from "./Helpers/User.js"
import AppStorage from "./Helpers/AppStorage.js"
import { Editor } from '@toast-ui/vue-editor';
import mdiVue from 'mdi-vue/v2'
import * as mdijs from '@mdi/js'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)
Vue.use(Editor)

window.User = User
window.AppStorage = AppStorage
window.EventBus = new Vue();

Vue.component('AppHome', require('./components/AppHome.vue').default)

const app = new Vue({
    router,
    vuetify: new Vuetify()
}).$mount('#app');
