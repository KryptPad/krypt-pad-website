import { createRouter, createWebHistory } from 'vue-router';


// Home
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../routes/HomeView.vue'),
        },
        {
            path: '/download',
            name: 'download',
            component: () => import('../routes/DownloadView.vue'),
        }
    ],
});

export default router;
