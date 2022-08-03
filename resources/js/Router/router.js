import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login'
import Category from "../components/category/Category"
import Signup from "../components/signup/Signup"
import Forum from "../components/forum/Forum"
import Logout from '../components/login/logout'
import Read from '../components/forum/read'
import Create from '../components/forum/create'

Vue.use(VueRouter)

const routes = [
    { path: '/ask', component: Create, name: 'create'},
    { path: '/login', component: Login, name: 'login'},
    { path: '/signup', component: Signup, name: 'signup' },
    { path: '/forum', component: Forum, name : 'forum'},
    { path: '/category', component: Category, name :"category"},
    { path: '/logout', component : Logout, name: 'logout'},
    { path: '/question/:slug', component : Read, name: 'read'},
]

const router = new VueRouter({
    routes,
    hashbang:true,
    mode: 'history',
})

export default router;
