<template>
  <section class="search-bar">
    <h1>Youtube Search</h1>
    <input
      class="search-input"
      v-model="inputValue"
      @keypress.enter="$emit('handleInput', inputValue)"
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
      inputValue: null,
    };
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
