import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 데이터 저장소 (~= 동기적)
    // this.$store.state로 접근
    videos: [],
    mainVideo: null,
    userInput: "",
  },
  getters: {
    // 데이터에 대한 getter (~= computed 조회)
  },
  mutations: {
    // 데이터를 변경시키는 로직 (~= methods 동기적)
    setUserInput() {
      console.log("Mutation hey! Userinput has been changed!");
    },
    setVideos() {},
    setMainVideo() {},
  },
  actions: {
    // 데이터를 변경 + 비동기적 (~= methods 비동기적)
  },
  modules: {
    //
  },
});
