<template>
  <section class="video-player">
    <div v-if="mainVideo">
      <iframe
        width="942"
        height="524"
        :src="`https://www.youtube.com/embed/${mainVideo.id.videoId}`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h2>{{ decodeHtmlEntity(mainVideo.snippet.title) }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: ["mainVideo"],
  methods: {
    decodeHtmlEntity(str) {
      return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
      });
    },
  },
};
</script>

<style></style>
