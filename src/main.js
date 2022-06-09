import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { registerSW } from 'virtual:pwa-register';
import '/assets/main.scss'
registerSW();

createApp(App).use(router).mount('#app');
