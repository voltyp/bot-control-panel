import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/TheIndex.vue'),
        meta: { layout: 'AppLayoutDefault' },
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: () => import('@/views/AboutUs.vue'),
        meta: { layout: 'AppLayoutDefault' },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginPage.vue'),
        meta: { layout: 'AppLayoutEmpty' },
    },

];
