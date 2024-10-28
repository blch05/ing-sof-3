<template>
    <div>
      <h2>Agregar Video (Magnet)</h2>
      <form @submit.prevent="addMagnet">
        <input type="text" v-model="title" placeholder="Título" required />
        <input type="text" v-model="magnetLink" placeholder="Enlace Magnet" required />
        <button type="submit">Agregar Magnet</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        title: '',
        magnetLink: '',
      };
    },
    methods: {
      async addMagnet() {
        try {
          await axios.post('http://localhost:5000/api/magnets', {
            title: this.title,
            magnetLink: this.magnetLink,
          });
          // Limpia los campos después de agregar
          this.title = '';
          this.magnetLink = '';
        } catch (error) {
          console.error('Error al agregar el magnet', error);
        }
      },
    },
  };
  </script>
  