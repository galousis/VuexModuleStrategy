<template>
  <div id="app">
    <LatestArticles/>
    <MyArticles/>
  </div>
</template>

<script>
import LatestArticles from "./components/LatestArticles";
import MyArticles from "./components/MyArticles";

export default {
  name: "App",
  components: {
    LatestArticles,
    MyArticles
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
