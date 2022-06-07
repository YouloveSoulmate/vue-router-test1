import { createWebHashHistory, createRouter } from 'vue-router';

//pages
import Home from '@/pages/Home'
import Example from '@/pages/Example'

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
    ],
});