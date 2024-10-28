<template>
  <div>
    <h2>Video Player</h2>
    <video id="videoPlayer" controls></video>
  </div>
</template>

<script>
import WebTorrent from 'webtorrent';

export default {
  props: {
    magnetLink: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const client = new WebTorrent();
    const magnetURI = this.magnetLink;

    client.add(magnetURI, (torrent) => {
      const file = torrent.files.find(file => file.name.endsWith('.mp4')); // Cambia esto si usas otro formato
      if (file) {
        file.renderTo('video#videoPlayer', {
          autoplay: true,
        });
      }
    });
  },
};
</script>
