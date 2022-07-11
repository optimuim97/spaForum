import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login'
import Category from "../components/category/Category"

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: Login },
    { path: '/category', component: Category },
]

const router = new VueRouter({
    routes,
    hashbang:true,
    mode: 'history',
})

export default router;
