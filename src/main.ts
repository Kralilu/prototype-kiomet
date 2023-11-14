import './assets/main.css'
import './index.css'
import 'primeicons/primeicons.css'
import Chart from 'primevue/chart';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
