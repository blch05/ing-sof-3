import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js'; // Asegúrate de que esta ruta sea correcta
import { Buffer } from 'buffer';


// Define global si no está definido
window.global = window.global || window;
window.Buffer = Buffer; // Asigna `Buffer` al objeto global `window`

createApp(App)
  .use(router)
  .mount('#app');
