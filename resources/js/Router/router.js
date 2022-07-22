import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login'
import Category from "../components/category/Category"
import Signup from "../components/signup/Signup"
import Forum from "../components/forum/Forum"

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: Login, name: 'login'},
    { path: '/signup', component: Signup, name: 'signup' },
    { path: '/forum', component: Forum, name : 'forum'},
    { path: '/category', component: Category, name :"category"},
]

const router = new VueRouter({
    routes,
    hashbang:true,
    mode: 'history',
})

export default router;
