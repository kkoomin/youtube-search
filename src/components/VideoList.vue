<template>
  <aside class="video-list">
    <div
      v-for="video in videos.filter((v) => v !== mainVideo)"
      v-bind:key="video.id.videoId"
    >
      <VideoItem
        @click.native="$emit('handleSetVideoPlayer', video.id.videoId)"
        :url="video.snippet.thumbnails.high.url"
        :title="video.snippet.title"
      />
    </div>
  </aside>
</template>

<script>
import VideoItem from "./VideoItem.vue";

export default {
  name: "VideoList",
  components: {
    VideoItem,
  },
  props: ["videos", "mainVideo"],
};
</script>

<style>
ul,
li {
  all: unset;
}
.video-list {
  display: flex;
  flex-direction: column;
  justify-items: left;
}
</style>
