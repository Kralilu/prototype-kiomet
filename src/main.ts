import './assets/main.css'
import './assets/theme.css'
import './index.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ToastService from 'primevue/toastservice';
const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true  });
app.use(ToastService);
app.mount('#app')
