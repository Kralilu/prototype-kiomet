import './assets/main.css'
import './index.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/nano/theme.css'
import PrimeVue from 'primevue/config';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ToastService from 'primevue/toastservice';
const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.use(ToastService);
app.mount('#app')
