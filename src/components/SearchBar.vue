<template>
  <section class="search-bar">
    <h1>Youtube Search</h1>
    <input
      class="search-input"
      v-model="userInput"
      @keypress.enter="getVideos(userInput)"
      type="text"
      placeholder="🔍"
      onfocus="this.placeholder = ''"
    />
  </section>
</template>

<script>
import { mapActions } from "vuex";
// action method들을 일일히 this.$store.dispatch()로 부르지 않고 바로 사용할 수 있도록 하는 함수
export default {
  name: "SearchBar",
  data() {
    return {
      userInput: null,
      // vuex store에 data를 변경
    };
  },
  methods: {
    ...mapActions(["getVideos"]),
    // mapActions()는 object를 반환하기 때문에 spread operator로 methods 안에 action methods를 선언해줘야함
  },
};
</script>

<style>
.search-bar {
  margin-bottom: 4rem;
}
.search-input {
  width: 20rem;
  height: 2.5rem;
  padding: 0 0.5rem;
  font-size: 1rem;
}
h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #282828;
}
</style>
