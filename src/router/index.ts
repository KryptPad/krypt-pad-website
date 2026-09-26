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
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: () => import('../routes/PrivacyView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../routes/AboutView.vue'),
        },
    ],
});

export default router;
