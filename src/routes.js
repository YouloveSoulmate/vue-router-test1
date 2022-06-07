import { createWebHashHistory, createRouter } from 'vue-router';

//pages
import Home from '@/pages/Home'
import Example from '@/pages/Example'
import Store from '@/pages/Store'

//Routering
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/example',
            name: 'Example',
            component: Example
        },
        {
            path: '/store',
            name: 'Store',
            component: Store
        },
    ],
});