<template>
  <div id="app">
    <header>
      <SearchBar />
    </header>
    <main class="main">
      <VideoPlayer />
      <VideoList />
    </main>
  </div>
</template>

<script>
// import axios from "axios";

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
