import {createRouter, createWebHistory} from 'vue-router'
import Default from "../layouts/default/default.vue";
import MainPage from "../pages/Main/MainPage.vue";
import Auth from "../layouts/auth.layout.vue";
import OthersPage from "../pages/Others/OthersPage.vue";


const routes = [
    {path: '/auth', component: Auth},
    {
        path: '/', component: Default,
        children: [
            {path: '', component: MainPage},
            {path: '/others', component: OthersPage},
        ]
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})