import { createApp } from 'vue';
import App from '@/App.vue'

import router from '@/routes'
import store from '@/store'

import '@/assets/scss/main.scss'
import '@/assets/scss/common.scss'

const app = createApp(App);
app.use(router);
app.use(store);

// app.use(ThePluginIWantToUse)

app.mount('#app')