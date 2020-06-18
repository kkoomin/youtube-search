<template>
  <section class="search-bar">
    <h1>Youtube Search</h1>
    <input
      class="search-input"
      v-model="userInput"
      @keypress.enter="onInput"
      type="text"
      placeholder="🔍"
      onfocus="this.placeholder = ''"
    />
  </section>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      userInput: null,
      // vuex store에 data를 변경
    };
  },
  methods: {
    onInput() {
      this.$emit("handleInput", this.userInput);
      this.$store.state.userInput;
    },
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
