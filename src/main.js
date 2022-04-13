import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App);
app.use(router);
app.use(VueToast);
app.mount('#app');
