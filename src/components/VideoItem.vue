<template>
  <div class="video-li">
    <img :src="url" alt="Video Thumbnail Image" height="120" width="200" />
    <h4>
      {{ decodeHtmlEntity(title).substring(0, 25) + "..." }}
    </h4>
  </div>
</template>

<script>
export default {
  name: "VideoItem",
  props: ["url", "title"],
  methods: {
    decodeHtmlEntity(str) {
      return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
      });
    },
  },
};
</script>

<style>
.video-li {
  cursor: pointer;
  display: flex;
}
img {
  margin-right: 0.5rem;
  margin-bottom: 1rem;
}
</style>
