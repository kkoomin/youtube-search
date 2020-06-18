import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 데이터 저장소 (~= 동기적)
    // this.$store.state로 접근
    videos: [],
    mainVideo: null,
  },
  getters: {
    // 데이터에 대한 getter (~= computed 조회)
    videos: (state) => state.videos,
    mainVideo: (state) => state.mainVideo,
  },
  mutations: {
    // 데이터를 변경시키는 로직 (~= methods 동기적)
    // mutations 호출방법: $store.commit('함수명')
    setVideos(state, videos) {
      state.videos = videos;
    },
    setMainVideo(state, video) {
      state.mainVideo = video;
    },
    setVideoPlayer(state, id) {
      const newMainVideo = state.videos.filter(
        (video) => video.id.videoId === id
      )[0];
      state.mainVideo = newMainVideo;
    },
  },
  actions: {
    // 데이터를 변경 + 비동기적 (~= methods 비동기적)
    // actions 호출방법: $store.dispatch('함수명')
    async getVideos(context, userInput) {
      // 1. 입력된 검색어를 가지고,
      const baseUrl = `https://www.googleapis.com/youtube/v3/search?`;

      // 2. Youtube API에 요청을 보내어
      const videos = await axios.get(baseUrl, {
        params: {
          type: "video",
          key: process.env.VUE_APP_API_KEY,
          part: "snippet",
          q: userInput,
          maxResults: "10",
        },
      });

      // 3. 검색어로 검색한 결과를 가져옴
      context.commit("setVideos", videos.data.items);
      context.commit("setMainVideo", videos.data.items[0]);
    },
  },
  modules: {
    //
  },
});
