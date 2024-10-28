import { createRouter, createWebHistory } from 'vue-router';
import VideoList from './src//components/VideoList.vue';
import VideoPlayer from './src//components/VideoPlayer.vue';
import AddMagnet from './src/components/AddMagnet.vue'; // Importa el nuevo componente

const routes = [
  {
    path: '/',
    name: 'VideoList',
    component: VideoList,
  },
  {
    path: '/video/:magnetLink',
    name: 'VideoPlayer',
    component: VideoPlayer,
    props: true,
  },
  {
    path: '/add-magnet',
    name: 'AddMagnet',
    component: AddMagnet, // Agrega la nueva ruta
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
