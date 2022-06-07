import Vue from 'vue'
import App from '@/App.vue'

import router from '@/routes'

import '@/assets/scss/main.scss'
import '@/assets/scss/common.scss'

Vue.config.prouctionTip = false

const app = Vue.createApp({
    router,
    render: h => h(App),
})
app.use(ThePluginIWantToUse)

app.mount('#app')