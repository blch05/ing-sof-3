<template>
  <div>
    <h2>Video List</h2>
    <AddMagnet /> <!-- Asegúrate de incluir el componente para agregar magnets -->
    <ul>
      <li v-for="video in videos" :key="video._id">
        {{ video.title }} - <router-link :to="{ name: 'VideoPlayer', params: { magnetLink: video.magnetLink } }">Watch</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import AddMagnet from './AddMagnet.vue'; // Asegúrate de importar el componente

export default {
  components: {
    AddMagnet,
  },
  data() {
    return {
      videos: [],
    };
  },
  async mounted() {
    const res = await axios.get('http://localhost:5000/api/magnets');
    this.videos = res.data;
  },
};
</script>
