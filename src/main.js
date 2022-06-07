import { createApp } from 'vue';
import App from '@/App.vue'

import router from '@/routes'

import '@/assets/scss/main.scss'
import '@/assets/scss/common.scss'

const app = createApp(App);
app.use(router);

// app.use(ThePluginIWantToUse)

app.mount('#app')