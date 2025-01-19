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

router.beforeEach((to, _, next) => {
    const login = sessionStorage.getItem('login'); // Получаем login из сессии

    // Если login не равен "9908879976" и маршрут не является "/auth", перенаправляем на "/auth"
    if (login !== '9908879976' && to.path !== '/auth') {
        next('/auth');
    } else {
        next(); // Разрешаем переход
    }
});