import Vue from 'vue'
import Router from 'vue-router'

// Vue.use(Router)

//pages
import Home from '@/pages/Home'
import Example from '@/pages/Example'

//Routering
export default new Router ({
    routes:[
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
    ]
})