<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<template>
  <div id="app">
    <Header title="Project Vue" />
    <RouterView />
  </div>


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #a70101;
}
</style>

<!-- <style scoped>
  li {
    border: solid 1px red;
  }
</style> -->
