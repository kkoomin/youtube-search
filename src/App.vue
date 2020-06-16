<template>
  <div id="app">
    <header>
      <SearchBar @handleInput="input" />
    </header>
    <main class="main">
      <VideoPlayer :mainVideo="mainVideo" />
      <VideoList
        :videos="videos"
        :mainVideo="mainVideo"
        @handleSetVideoPlayer="setVideoPlayer"
      />
    </main>
  </div>
</template>

<script>
import axios from "axios";

import SearchBar from "./components/SearchBar.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import VideoList from "./components/VideoList.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoPlayer,
    VideoList,
  },
  data() {
    return {
      videos: [],
      mainVideo: null,
    };
  },
  methods: {
    async input(value) {
      // 1. 입력된 검색어를 가지고,
      const baseUrl = `https://www.googleapis.com/youtube/v3/search?`;

      // 2. Youtube API에 요청을 보내어
      const videos = await axios.get(baseUrl, {
        params: {
          type: "video",
          key: process.env.VUE_APP_API_KEY,
          part: "snippet",
          q: value, // input keyword
          maxResults: "10",
        },
      });

      // 3. 검색어로 검색한 결과를 가져옴
      this.videos = videos.data.items;
      this.mainVideo = videos.data.items[0];
    },
    setVideoPlayer(id) {
      this.mainVideo = this.videos.filter(
        (video) => video.id.videoId === id
      )[0];
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 2rem;
}
.main {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>

//
https://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it/7394787
