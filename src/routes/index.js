import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    routes: [
        {path: '/', component: () => import('../pages/HomePage.vue')},
    ],
    history: createWebHashHistory()
})

export default router